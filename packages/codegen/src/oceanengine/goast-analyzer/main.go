package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"go/ast"
	"go/parser"
	"go/printer"
	"go/token"
	"os"
	"reflect"
	"strconv"
	"strings"
)

type ApiFacts struct {
	Kind         string      `json:"kind"`
	File         string      `json:"file"`
	ClassName    string      `json:"className"`
	MethodName   string      `json:"methodName"`
	HTTPMethod   string      `json:"httpMethod"`
	Path         string      `json:"path"`
	ResponseType string      `json:"responseType"`
	Params       []ParamFact `json:"params"`
	QueryParams  []ParamMap  `json:"queryParams"`
	FormParams   []ParamMap  `json:"formParams"`
	FileParams   []ParamMap  `json:"fileParams"`
	Checks       []CheckFact `json:"checks"`
	BodyParam    string      `json:"bodyParam,omitempty"`
	ContentTypes []string    `json:"contentTypes"`
}

type ParamFact struct {
	Name     string `json:"name"`
	Type     string `json:"type"`
	Required bool   `json:"required"`
}

type ParamMap struct {
	Name   string `json:"name"`
	Source string `json:"source"`
}

type CheckFact struct {
	Kind     string `json:"kind"`
	Param    string `json:"param"`
	Message  string `json:"message"`
	Operator string `json:"operator,omitempty"`
	Value    string `json:"value,omitempty"`
}

type ModelFacts struct {
	Kind  string    `json:"kind"`
	File  string    `json:"file"`
	Model ModelSpec `json:"model"`
}

type UnknownFacts struct {
	Kind string `json:"kind"`
	File string `json:"file"`
}

type ModelSpec struct {
	Kind   string       `json:"kind"`
	Name   string       `json:"name"`
	Fields []ModelField `json:"fields,omitempty"`
	Values []EnumValue  `json:"values,omitempty"`
}

type ModelField struct {
	JSONName string `json:"jsonName"`
	GoName   string `json:"goName"`
	GoType   string `json:"goType"`
	Required bool   `json:"required"`
}

type EnumValue struct {
	Key   string      `json:"key"`
	Value interface{} `json:"value"`
}

func main() {
	args := os.Args[1:]
	if len(args) > 0 && args[0] == "--" {
		args = args[1:]
	}
	if len(args) != 1 {
		fmt.Fprintln(os.Stderr, "用法：goast-analyzer <go-file>")
		os.Exit(2)
	}

	facts, err := analyzeFile(args[0])
	if err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}

	encoder := json.NewEncoder(os.Stdout)
	encoder.SetIndent("", "  ")
	if err := encoder.Encode(facts); err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}
}

func analyzeFile(filename string) (interface{}, error) {
	fset := token.NewFileSet()
	file, err := parser.ParseFile(fset, filename, nil, parser.ParseComments)
	if err != nil {
		return nil, err
	}

	if hasApiService(file) {
		return analyzeApiFile(fset, file, filename)
	}
	return analyzeModelFile(fset, file, filename)
}

func hasApiService(file *ast.File) bool {
	for _, decl := range file.Decls {
		genDecl, ok := decl.(*ast.GenDecl)
		if !ok || genDecl.Tok != token.TYPE {
			continue
		}
		for _, spec := range genDecl.Specs {
			typeSpec, ok := spec.(*ast.TypeSpec)
			if ok && strings.HasSuffix(typeSpec.Name.Name, "ApiService") {
				return true
			}
		}
	}
	return false
}

func analyzeApiFile(fset *token.FileSet, file *ast.File, filename string) (*ApiFacts, error) {
	facts := &ApiFacts{
		Kind:        "api",
		File:        filename,
		Params:      []ParamFact{},
		QueryParams: []ParamMap{},
		FormParams:  []ParamMap{},
		FileParams:  []ParamMap{},
		Checks:      []CheckFact{},
	}

	requestType := ""
	for _, decl := range file.Decls {
		genDecl, ok := decl.(*ast.GenDecl)
		if !ok || genDecl.Tok != token.TYPE {
			continue
		}
		for _, spec := range genDecl.Specs {
			typeSpec, ok := spec.(*ast.TypeSpec)
			if !ok {
				continue
			}
			if strings.HasSuffix(typeSpec.Name.Name, "ApiService") {
				facts.ClassName = strings.TrimSuffix(typeSpec.Name.Name, "Service")
				continue
			}
			if strings.HasPrefix(typeSpec.Name.Name, "Api") && strings.HasSuffix(typeSpec.Name.Name, "Request") {
				requestType = typeSpec.Name.Name
				structType, ok := typeSpec.Type.(*ast.StructType)
				if !ok {
					continue
				}
				facts.Params = parseRequestFields(fset, structType)
			}
		}
	}

	if requestType == "" {
		return nil, fmt.Errorf("unable to find API request struct in %s", filename)
	}
	facts.MethodName = lowerFirst(strings.TrimSuffix(strings.TrimPrefix(requestType, "Api"), "Request"))

	for _, decl := range file.Decls {
		fn, ok := decl.(*ast.FuncDecl)
		if !ok || fn.Body == nil || !isApiExecuteFunc(fn) {
			continue
		}
		facts.ResponseType = parseResponseType(fset, fn)
		ast.Inspect(fn.Body, func(node ast.Node) bool {
			switch n := node.(type) {
			case *ast.ValueSpec:
				collectValueSpecFacts(fset, facts, n)
			case *ast.AssignStmt:
				collectAssignFacts(fset, facts, n)
			case *ast.CallExpr:
				collectCallFacts(facts, n)
			case *ast.IfStmt:
				if check, ok := parseCheck(n); ok {
					facts.Checks = append(facts.Checks, check)
				}
			}
			return true
		})
	}

	required := map[string]bool{}
	for _, check := range facts.Checks {
		if check.Kind == "required" {
			required[check.Param] = true
		}
	}
	for index := range facts.Params {
		facts.Params[index].Required = required[facts.Params[index].Name]
	}

	return facts, nil
}

func analyzeModelFile(fset *token.FileSet, file *ast.File, filename string) (interface{}, error) {
	for _, decl := range file.Decls {
		genDecl, ok := decl.(*ast.GenDecl)
		if !ok || genDecl.Tok != token.TYPE {
			continue
		}
		for _, spec := range genDecl.Specs {
			typeSpec, ok := spec.(*ast.TypeSpec)
			if !ok {
				continue
			}
			if structType, ok := typeSpec.Type.(*ast.StructType); ok {
				fields := parseModelFields(fset, structType)
				if len(fields) == 0 {
					continue
				}
				return &ModelFacts{
					Kind: "model",
					File: filename,
					Model: ModelSpec{
						Kind:   "interface",
						Name:   typeSpec.Name.Name,
						Fields: fields,
					},
				}, nil
			}
			if isEnumBaseType(typeSpec.Type) {
				values := parseEnumValues(fset, file, typeSpec.Name.Name)
				if len(values) > 0 {
					return &ModelFacts{
						Kind: "model",
						File: filename,
						Model: ModelSpec{
							Kind:   "enum",
							Name:   typeSpec.Name.Name,
							Values: values,
						},
					}, nil
				}
			}
		}
	}
	return &UnknownFacts{Kind: "unknown", File: filename}, nil
}

func parseModelFields(fset *token.FileSet, structType *ast.StructType) []ModelField {
	fields := []ModelField{}
	for _, field := range structType.Fields.List {
		if field.Tag == nil {
			continue
		}
		jsonName, required, ok := parseJSONTag(field.Tag.Value)
		if !ok || jsonName == "-" {
			continue
		}
		for _, name := range field.Names {
			fields = append(fields, ModelField{
				JSONName: jsonName,
				GoName:   name.Name,
				GoType:   exprString(fset, field.Type),
				Required: required,
			})
		}
	}
	return fields
}

func parseJSONTag(raw string) (string, bool, bool) {
	tag := strings.Trim(raw, "`")
	jsonTag := reflect.StructTag(tag).Get("json")
	if jsonTag == "" {
		return "", false, false
	}
	parts := strings.Split(jsonTag, ",")
	required := true
	for _, part := range parts[1:] {
		if part == "omitempty" {
			required = false
		}
	}
	return parts[0], required, true
}

func isEnumBaseType(expr ast.Expr) bool {
	ident, ok := expr.(*ast.Ident)
	if !ok {
		return false
	}
	switch ident.Name {
	case "string", "int", "int32", "int64", "float32", "float64":
		return true
	default:
		return false
	}
}

func parseEnumValues(fset *token.FileSet, file *ast.File, enumName string) []EnumValue {
	values := []EnumValue{}
	for _, decl := range file.Decls {
		genDecl, ok := decl.(*ast.GenDecl)
		if !ok || genDecl.Tok != token.CONST {
			continue
		}
		currentType := ""
		for _, spec := range genDecl.Specs {
			valueSpec, ok := spec.(*ast.ValueSpec)
			if !ok {
				continue
			}
			if valueSpec.Type != nil {
				currentType = exprString(fset, valueSpec.Type)
			}
			if currentType != enumName {
				continue
			}
			for index, name := range valueSpec.Names {
				if index >= len(valueSpec.Values) {
					continue
				}
				value, ok := enumLiteral(valueSpec.Values[index])
				if !ok {
					continue
				}
				values = append(values, EnumValue{
					Key:   stripEnumSuffix(name.Name, enumName),
					Value: value,
				})
			}
		}
	}
	return values
}

func collectValueSpecFacts(fset *token.FileSet, facts *ApiFacts, spec *ast.ValueSpec) {
	for index, name := range spec.Names {
		if index >= len(spec.Values) {
			continue
		}
		collectNamedValueFact(fset, facts, name.Name, spec.Values[index])
	}
}

func parseRequestFields(fset *token.FileSet, structType *ast.StructType) []ParamFact {
	fields := []ParamFact{}
	for _, field := range structType.Fields.List {
		for _, name := range field.Names {
			if name.Name == "ctx" || name.Name == "ApiService" {
				continue
			}
			fields = append(fields, ParamFact{
				Name: name.Name,
				Type: normalizeGoType(exprString(fset, field.Type)),
			})
		}
	}
	return fields
}

func isApiExecuteFunc(fn *ast.FuncDecl) bool {
	return strings.HasSuffix(fn.Name.Name, "Execute")
}

func parseResponseType(fset *token.FileSet, fn *ast.FuncDecl) string {
	if fn.Type.Results == nil || len(fn.Type.Results.List) == 0 {
		return ""
	}
	return normalizeGoType(exprString(fset, fn.Type.Results.List[0].Type))
}

func collectAssignFacts(fset *token.FileSet, facts *ApiFacts, stmt *ast.AssignStmt) {
	for index, lhs := range stmt.Lhs {
		name, ok := lhs.(*ast.Ident)
		if !ok || index >= len(stmt.Rhs) {
			continue
		}
		collectNamedValueFact(fset, facts, name.Name, stmt.Rhs[index])
	}
}

func collectNamedValueFact(fset *token.FileSet, facts *ApiFacts, name string, value ast.Expr) {
	switch name {
	case "localVarHTTPMethod":
		if method, ok := parseHTTPMethod(value); ok {
			facts.HTTPMethod = method
		}
	case "localVarPath":
		if path, ok := parsePath(value); ok {
			facts.Path = path
		}
	case "localVarPostBody":
		if source, ok := parseRequestSelector(value); ok {
			facts.BodyParam = source
		}
	case "localVarHTTPContentTypes":
		facts.ContentTypes = parseStringSlice(value)
	}
}

func collectCallFacts(facts *ApiFacts, call *ast.CallExpr) {
	name, ok := call.Fun.(*ast.Ident)
	if !ok {
		return
	}
	if name.Name == "parameterAddToHeaderOrQuery" && len(call.Args) >= 3 {
		target, ok := call.Args[0].(*ast.Ident)
		if !ok {
			return
		}
		paramName, ok := stringLiteral(call.Args[1])
		if !ok {
			return
		}
		source, ok := parseRequestSelector(call.Args[2])
		if !ok {
			return
		}
		param := ParamMap{Name: paramName, Source: source}
		switch target.Name {
		case "localVarQueryParams":
			facts.QueryParams = append(facts.QueryParams, param)
		case "localVarFormParams":
			facts.FormParams = append(facts.FormParams, param)
		}
	}
}

func parseCheck(stmt *ast.IfStmt) (CheckFact, bool) {
	message := reportErrorMessage(stmt.Body)
	if message == "" {
		return CheckFact{}, false
	}

	binary, ok := stmt.Cond.(*ast.BinaryExpr)
	if !ok {
		return CheckFact{}, false
	}
	if source, ok := parseRequestSelector(binary.X); ok && binary.Op == token.EQL && isNil(binary.Y) {
		return CheckFact{Kind: "required", Param: source, Message: message}, true
	}
	return CheckFact{}, false
}

func reportErrorMessage(block *ast.BlockStmt) string {
	for _, stmt := range block.List {
		ret, ok := stmt.(*ast.ReturnStmt)
		if !ok {
			continue
		}
		for _, result := range ret.Results {
			call, ok := result.(*ast.CallExpr)
			if !ok {
				continue
			}
			name, ok := call.Fun.(*ast.Ident)
			if ok && name.Name == "ReportError" && len(call.Args) > 0 {
				message, _ := stringLiteral(call.Args[0])
				return message
			}
		}
	}
	return ""
}

func parseHTTPMethod(expr ast.Expr) (string, bool) {
	selector, ok := expr.(*ast.SelectorExpr)
	if !ok {
		return "", false
	}
	x, ok := selector.X.(*ast.Ident)
	if !ok || x.Name != "http" || !strings.HasPrefix(selector.Sel.Name, "Method") {
		return "", false
	}
	return strings.ToUpper(strings.TrimPrefix(selector.Sel.Name, "Method")), true
}

func parsePath(expr ast.Expr) (string, bool) {
	binary, ok := expr.(*ast.BinaryExpr)
	if !ok || binary.Op != token.ADD {
		return "", false
	}
	return stringLiteral(binary.Y)
}

func parseStringSlice(expr ast.Expr) []string {
	literal, ok := expr.(*ast.CompositeLit)
	if !ok {
		return []string{}
	}
	values := []string{}
	for _, elt := range literal.Elts {
		if value, ok := stringLiteral(elt); ok {
			values = append(values, value)
		}
	}
	return values
}

func parseRequestSelector(expr ast.Expr) (string, bool) {
	selector, ok := expr.(*ast.SelectorExpr)
	if !ok {
		return "", false
	}
	x, ok := selector.X.(*ast.Ident)
	if !ok || x.Name != "r" {
		return "", false
	}
	return selector.Sel.Name, true
}

func stringLiteral(expr ast.Expr) (string, bool) {
	lit, ok := expr.(*ast.BasicLit)
	if !ok || lit.Kind != token.STRING {
		return "", false
	}
	return strings.Trim(lit.Value, `"`), true
}

func enumLiteral(expr ast.Expr) (interface{}, bool) {
	lit, ok := expr.(*ast.BasicLit)
	if !ok {
		return nil, false
	}
	switch lit.Kind {
	case token.STRING:
		return strings.Trim(lit.Value, `"`), true
	case token.INT:
		value, err := strconv.ParseInt(lit.Value, 10, 64)
		if err != nil {
			return nil, false
		}
		return value, true
	case token.FLOAT:
		value, err := strconv.ParseFloat(lit.Value, 64)
		if err != nil {
			return nil, false
		}
		return value, true
	default:
		return nil, false
	}
}

func stripEnumSuffix(key string, enumName string) string {
	suffix := "_" + enumName
	if strings.HasSuffix(key, suffix) {
		return strings.TrimSuffix(key, suffix)
	}
	return key
}

func isNil(expr ast.Expr) bool {
	ident, ok := expr.(*ast.Ident)
	return ok && ident.Name == "nil"
}

func exprString(fset *token.FileSet, expr ast.Expr) string {
	var buffer bytes.Buffer
	_ = printer.Fprint(&buffer, fset, expr)
	return buffer.String()
}

func normalizeGoType(goType string) string {
	normalized := strings.TrimSpace(goType)
	for strings.HasPrefix(normalized, "*") {
		normalized = strings.TrimPrefix(normalized, "*")
	}
	if normalized == "[]byte" {
		return "byte[]"
	}
	return normalized
}

func lowerFirst(value string) string {
	if value == "" {
		return value
	}
	return strings.ToLower(value[:1]) + value[1:]
}
