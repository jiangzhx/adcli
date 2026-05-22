import { describe, expect, test } from "bun:test";
import { parseGoApiSource, parseGoModelSource } from "../../src/oceanengine/go-parser";

describe("go parser", () => {
  test("extracts request object API facts from Go source", () => {
    const source = `
package api

type ReportCustomConfigGetV30ApiService service

type ApiOpenApiV30ReportCustomConfigGetGetRequest struct {
	ctx          context.Context
	ApiService   *ReportCustomConfigGetV30ApiService
	advertiserId *int64
	dataTopics   *[]*ReportCustomConfigGetV30DataTopics
	page          *int32
}

func (r *ApiOpenApiV30ReportCustomConfigGetGetRequest) AdvertiserId(advertiserId int64) *ApiOpenApiV30ReportCustomConfigGetGetRequest {
	r.advertiserId = &advertiserId
	return r
}

func (r *ApiOpenApiV30ReportCustomConfigGetGetRequest) DataTopics(dataTopics []*ReportCustomConfigGetV30DataTopics) *ApiOpenApiV30ReportCustomConfigGetGetRequest {
	r.dataTopics = &dataTopics
	return r
}

func (a *ReportCustomConfigGetV30ApiService) getExecute(r *ApiOpenApiV30ReportCustomConfigGetGetRequest) (*ReportCustomConfigGetV30Response, *http.Response, error) {
	localVarHTTPMethod := http.MethodGet
	localBasePath := a.client.Cfg.GetBasePath()
	localVarPath := localBasePath + "/open_api/v3.0/report/custom/config/get/"
	localVarQueryParams := url.Values{}
	if r.advertiserId == nil {
		return localVarReturnValue, nil, ReportError("advertiserId is required and must be specified")
	}
	if r.dataTopics == nil {
		return localVarReturnValue, nil, ReportError("dataTopics is required and must be specified")
	}
	parameterAddToHeaderOrQuery(localVarQueryParams, "advertiser_id", r.advertiserId)
	parameterAddToHeaderOrQuery(localVarQueryParams, "data_topics", r.dataTopics)
	localVarHTTPContentTypes := []string{}
	return localVarReturnValue, localVarHTTPResponse, nil
}`;

    const api = parseGoApiSource(source, "api_report_custom_config_get_v30.go");

    expect(api.className).toBe("ReportCustomConfigGetV30Api");
    expect(api.methodName).toBe("openApiV30ReportCustomConfigGetGet");
    expect(api.httpMethod).toBe("GET");
    expect(api.path).toBe("/open_api/v3.0/report/custom/config/get/");
    expect(api.responseType).toBe("ReportCustomConfigGetV30Response");
    expect(api.params).toEqual([
      { javaType: "LongString", name: "advertiserId", required: true },
      { javaType: "List<ReportCustomConfigGetV30DataTopics>", name: "dataTopics", required: true },
      { javaType: "Integer", name: "page", required: false },
    ]);
    expect(api.queryParams).toEqual([
      { name: "advertiser_id", source: "request.advertiserId" },
      { name: "data_topics", source: "request.dataTopics" },
    ]);
    expect(api.contentTypes).toEqual([]);
    expect(api.bodyParam).toBeUndefined();
  });

  test("extracts POST body APIs from Go source", () => {
    const source = `
package api

type Oauth2AccessTokenApiService service

type ApiOpenApiOauth2AccessTokenPostRequest struct {
	ctx                      context.Context
	ApiService               *Oauth2AccessTokenApiService
	oauth2AccessTokenRequest *Oauth2AccessTokenRequest
}

func (a *Oauth2AccessTokenApiService) postExecute(r *ApiOpenApiOauth2AccessTokenPostRequest) (*Oauth2AccessTokenResponse, *http.Response, error) {
	localVarHTTPMethod := http.MethodPost
	localBasePath := a.client.Cfg.GetBasePath()
	localVarPath := localBasePath + "/open_api/oauth2/access_token/"
	localVarHTTPContentTypes := []string{"application/json"}
	localVarPostBody = r.oauth2AccessTokenRequest
	return localVarReturnValue, localVarHTTPResponse, nil
}`;

    const api = parseGoApiSource(source, "api_oauth2_access_token.go");

    expect(api.className).toBe("Oauth2AccessTokenApi");
    expect(api.methodName).toBe("openApiOauth2AccessTokenPost");
    expect(api.httpMethod).toBe("POST");
    expect(api.path).toBe("/open_api/oauth2/access_token/");
    expect(api.responseType).toBe("Oauth2AccessTokenResponse");
    expect(api.params).toEqual([{ javaType: "Oauth2AccessTokenRequest", name: "oauth2AccessTokenRequest", required: false }]);
    expect(api.contentTypes).toEqual(["application/json"]);
    expect(api.bodyParam).toBe("request.oauth2AccessTokenRequest");
  });

  test("extracts multipart form and file params from Go source", () => {
    const source = `
package api

type FileVideoAgentV2ApiService service

type ApiOpenApi2FileVideoAgentPostRequest struct {
	ctx        context.Context
	ApiService *FileVideoAgentV2ApiService
	agentId   *int64
	fileName  *string
	videoFile *FormFileInfo
}

func (a *FileVideoAgentV2ApiService) postExecute(r *ApiOpenApi2FileVideoAgentPostRequest) (*FileVideoAgentV2Response, *http.Response, error) {
	localVarHTTPMethod := http.MethodPost
	localBasePath := a.client.Cfg.GetBasePath()
	localVarPath := localBasePath + "/open_api/2/file/video/agent/"
	localVarFormParams := url.Values{}
	formFiles = make(map[string]*FormFileInfo)
	if r.agentId == nil {
		return localVarReturnValue, nil, ReportError("agentId is required and must be specified")
	}
	localVarHTTPContentTypes := []string{"multipart/form-data"}
	parameterAddToHeaderOrQuery(localVarFormParams, "agent_id", r.agentId)
	parameterAddToHeaderOrQuery(localVarFormParams, "file_name", r.fileName)
	if r.videoFile != nil {
		formFiles["video_file"] = r.videoFile
	}
	return localVarReturnValue, localVarHTTPResponse, nil
}`;

    const api = parseGoApiSource(source, "api_file_video_agent_v2.go");

    expect(api.params).toEqual([
      { javaType: "LongString", name: "agentId", required: true },
      { javaType: "String", name: "fileName", required: false },
      { javaType: "File", name: "videoFile", required: false },
    ]);
    expect(api.formParams).toEqual([
      { name: "agent_id", source: "request.agentId" },
      { name: "file_name", source: "request.fileName" },
    ]);
    expect(api.fileParams).toEqual([{ name: "video_file", source: "request.videoFile" }]);
    expect(api.contentTypes).toEqual(["multipart/form-data"]);
  });

  test("extracts model fields and enum values from Go source", () => {
    const structSource = `
package models

type Oauth2AccessTokenRequest struct {
	AppId *int64 \`json:"app_id,omitempty"\`
	AuthCode string \`json:"auth_code"\`
	DeliverEnd *NullableTime \`json:"deliver_end,omitempty"\`
	Tags []*ReportCustomConfigGetV30DataTopics \`json:"tags,omitempty"\`
}`;

    expect(parseGoModelSource(structSource, "model_oauth2_access_token_request.go")).toEqual({
      kind: "interface",
      name: "Oauth2AccessTokenRequest",
      fields: [
        { jsonName: "app_id", javaName: "appId", javaType: "LongString", required: false },
        { jsonName: "auth_code", javaName: "authCode", javaType: "String", required: true },
        { jsonName: "deliver_end", javaName: "deliverEnd", javaType: "JsonNullable<String>", required: false },
        { jsonName: "tags", javaName: "tags", javaType: "List<ReportCustomConfigGetV30DataTopics>", required: false },
      ],
    });

    const enumSource = `
package models

type ReportCustomConfigGetV30DataTopics string

const (
	BASIC_DATA_ReportCustomConfigGetV30DataTopics ReportCustomConfigGetV30DataTopics = "BASIC_DATA"
	CREATIVE_DATA_ReportCustomConfigGetV30DataTopics ReportCustomConfigGetV30DataTopics = "CREATIVE_DATA"
)`;

    expect(parseGoModelSource(enumSource, "model_report_custom_config_get_v3_0_data_topics.go")).toEqual({
      kind: "enum",
      name: "ReportCustomConfigGetV30DataTopics",
      values: [
        { key: "BASIC_DATA", value: "BASIC_DATA" },
        { key: "CREATIVE_DATA", value: "CREATIVE_DATA" },
      ],
    });
  });

  test("extracts byte array responses and numeric enum values", () => {
    const apiSource = `
package api

type AsyncTaskDownloadV2ApiService service

type ApiOpenApi2AsyncTaskDownloadGetRequest struct {
	ctx          context.Context
	ApiService   *AsyncTaskDownloadV2ApiService
	advertiserId *int64
}

func (a *AsyncTaskDownloadV2ApiService) getExecute(r *ApiOpenApi2AsyncTaskDownloadGetRequest) ([]byte, *http.Response, error) {
	localVarHTTPMethod := http.MethodGet
	localBasePath := a.client.Cfg.GetBasePath()
	localVarPath := localBasePath + "/open_api/2/async_task/download/"
	localVarHTTPContentTypes := []string{}
	return localVarReturnValue, localVarHTTPResponse, nil
}`;

    expect(parseGoApiSource(apiSource, "api_async_task_download_v2.go").responseType).toBe("byte[]");

    const enumSource = `
package models

type PageSize int64

const (
	Enum_10_PageSize PageSize = 10
	Enum_20_PageSize PageSize = 20
)`;

    expect(parseGoModelSource(enumSource, "model_page_size.go")).toEqual({
      kind: "enum",
      name: "PageSize",
      values: [
        { key: "Enum_10", value: 10 },
        { key: "Enum_20", value: 20 },
      ],
    });
  });

  test("keeps non-ID int64 fields as numbers", () => {
    const structSource = `
package models

type ReportStat struct {
	PromotionId *int64 \`json:"promotion_id,omitempty"\`
	Bid *int64 \`json:"bid,omitempty"\`
	CreateTime *int64 \`json:"create_time,omitempty"\`
	Count *int64 \`json:"count,omitempty"\`
}`;

    expect(parseGoModelSource(structSource, "model_report_stat.go")).toEqual({
      kind: "interface",
      name: "ReportStat",
      fields: [
        { jsonName: "promotion_id", javaName: "promotionId", javaType: "LongString", required: false },
        { jsonName: "bid", javaName: "bid", javaType: "Long", required: false },
        { jsonName: "create_time", javaName: "createTime", javaType: "Long", required: false },
        { jsonName: "count", javaName: "count", javaType: "Long", required: false },
      ],
    });
  });
});
