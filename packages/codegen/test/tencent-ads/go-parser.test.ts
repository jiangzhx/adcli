import { describe, expect, test } from "bun:test";
import { parseGoApiSource, parseGoModelSource } from "../../src/tencent-ads/go-parser";

describe("tencent ads go parser", () => {
  test("extracts GET APIs with required and optional query params", () => {
    const specs = parseGoApiSource(
      `
package api
type AdgroupsApiService service
type AdgroupsGetOpts struct {
  Filtering optional.Interface
  Page optional.Int64
  Fields optional.Interface
}
func (a *AdgroupsApiService) Get(ctx context.Context, accountId int64, localVarOptionals *AdgroupsGetOpts) (AdgroupsGetResponseData, http.Header, error) {
  localVarHttpMethod := strings.ToUpper("Get")
  localVarPath := a.client.Cfg.BasePath + "/adgroups/get"
  localVarQueryParams := url.Values{}
  localVarQueryParams.Add("account_id", parameterToString(accountId, ""))
  if localVarOptionals != nil && localVarOptionals.Filtering.IsSet() {
    localVarQueryParams.Add("filtering", parameterToString(localVarOptionals.Filtering.Value(), "multi"))
  }
  if localVarOptionals != nil && localVarOptionals.Page.IsSet() {
    localVarQueryParams.Add("page", parameterToString(localVarOptionals.Page.Value(), ""))
  }
  if localVarOptionals != nil && localVarOptionals.Fields.IsSet() {
    localVarQueryParams.Add("fields", parameterToString(localVarOptionals.Fields.Value(), "multi"))
  }
  localVarHttpContentTypes := []string{"text/plain"}
  localVarHttpHeaderAccepts := []string{"application/json"}
}
`,
      "api_adgroups.go",
    );

    expect(specs).toHaveLength(1);
    expect(specs[0]).toMatchObject({
      className: "AdgroupsApi",
      methodName: "get",
      httpMethod: "GET",
      path: "/adgroups/get",
      responseType: "AdgroupsGetResponseData",
    });
    expect(specs[0].params).toEqual([
      { name: "accountId", javaType: "LongString", required: true },
      { name: "filtering", javaType: "Object", required: false },
      { name: "page", javaType: "Long", required: false },
      { name: "fields", javaType: "Object", required: false },
    ]);
    expect(specs[0].queryParams).toEqual([
      { name: "account_id", source: "request.accountId" },
      { name: "filtering", source: "request.filtering", collectionFormat: "multi" },
      { name: "page", source: "request.page" },
      { name: "fields", source: "request.fields", collectionFormat: "multi" },
    ]);
  });

  test("extracts POST body and multipart file APIs", () => {
    const [bodySpec] = parseGoApiSource(
      `
package api
type AdgroupsApiService service
func (a *AdgroupsApiService) Add(ctx context.Context, data AdgroupsAddRequest) (AdgroupsAddResponseData, http.Header, error) {
  localVarHttpMethod := strings.ToUpper("Post")
  localVarPath := a.client.Cfg.BasePath + "/adgroups/add"
  localVarPostBody = &data
  localVarHttpContentTypes := []string{"application/json", "application/xml"}
  localVarHttpHeaderAccepts := []string{"application/json"}
}
`,
      "api_adgroups.go",
    );
    expect(bodySpec.bodyParam).toBe("request.data");
    expect(bodySpec.params).toEqual([{ name: "data", javaType: "AdgroupsAddRequest", required: true }]);

    const [fileSpec] = parseGoApiSource(
      `
package api
type CustomAudienceFilesApiService service
type CustomAudienceFilesAddOpts struct {
  OperationType optional.String
}
func (a *CustomAudienceFilesApiService) Add(ctx context.Context, accountId int64, file *os.File, localVarOptionals *CustomAudienceFilesAddOpts) (CustomAudienceFilesAddResponseData, http.Header, error) {
  localVarHttpMethod := strings.ToUpper("Post")
  localVarPath := a.client.Cfg.BasePath + "/custom_audience_files/add"
  localVarFormParams.Add("account_id", parameterToString(accountId, ""))
  localVarFile := file
  localVarFileKey = "file"
  if localVarOptionals != nil && localVarOptionals.OperationType.IsSet() {
    localVarFormParams.Add("operation_type", parameterToString(localVarOptionals.OperationType.Value(), ""))
  }
  localVarHttpContentTypes := []string{"multipart/form-data"}
  localVarHttpHeaderAccepts := []string{"application/json"}
}
`,
      "api_custom_audience_files.go",
    );
    expect(fileSpec.formParams).toEqual([
      { name: "account_id", source: "request.accountId" },
      { name: "operation_type", source: "request.operationType" },
    ]);
    expect(fileSpec.fileParams).toEqual([{ name: "file", source: "request.file" }]);
  });

  test("extracts model fields and enums", () => {
    expect(
      parseGoModelSource(
        `
package model
type AdgroupsGetResponseData struct {
  List *[]AdgroupsGetListStruct \`json:"list,omitempty"\`
  PageInfo *ConfPageSize500 \`json:"page_info,omitempty"\`
}
`,
        "model_adgroups_get_response_data.go",
      ),
    ).toEqual({
      kind: "interface",
      name: "AdgroupsGetResponseData",
      fields: [
        { jsonName: "list", javaName: "list", javaType: "List<AdgroupsGetListStruct>", required: false },
        { jsonName: "page_info", javaName: "pageInfo", javaType: "ConfPageSize500", required: false },
      ],
    });

    expect(
      parseGoModelSource(
        `
package model
type BillingEvent string
const (
  BillingEvent_CLICK BillingEvent = "BILLINGEVENT_CLICK"
)
`,
        "model_billing_event.go",
      ),
    ).toEqual({
      kind: "enum",
      name: "BillingEvent",
      values: [{ key: "CLICK", value: "BILLINGEVENT_CLICK" }],
    });

    expect(
      parseGoModelSource(
        `
package model
type AdcreativeImageList []string
`,
        "model_adcreative_image_list.go",
      ),
    ).toEqual({
      kind: "alias",
      name: "AdcreativeImageList",
      javaType: "List<String>",
    });
  });
});
