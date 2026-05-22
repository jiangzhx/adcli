import { describe, expect, test } from "bun:test";
import { parseJavaApiSource, parseJavaModelSource } from "../../src/oceanengine/java-parser";

describe("java parser", () => {
  test("extracts API method facts from Java source", () => {
    const source = `
public class ReportCustomConfigGetV30Api {
  public okhttp3.Call openApiV30ReportCustomConfigGetGetCall(Long advertiserId, List<ReportCustomConfigGetV30DataTopics> dataTopics, final ApiCallback _callback) throws ApiException {
    Object localVarPostBody = null;
    String localVarPath = "/open_api/v3.0/report/custom/config/get/";
    if (advertiserId != null) {
      localVarQueryParams.addAll(localVarApiClient.parameterToPair("advertiser_id", advertiserId));
    }
    if (dataTopics != null) {
      localVarCollectionQueryParams.addAll(localVarApiClient.parameterToPairs("csv", "data_topics", dataTopics));
    }
    final String[] localVarAccepts = {
      "application/json"
    };
    final String[] localVarContentTypes = {
    };
    String[] localVarAuthNames = new String[] { "ApiKeyAuth" };
    return localVarApiClient.buildCall(basePath, localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
  }
  private okhttp3.Call openApiV30ReportCustomConfigGetGetValidateBeforeCall(Long advertiserId, List<ReportCustomConfigGetV30DataTopics> dataTopics, final ApiCallback _callback) throws ApiException {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportCustomConfigGetGet(Async)");
    }
    if (dataTopics == null) {
      throw new ApiException("Missing the required parameter 'dataTopics' when calling openApiV30ReportCustomConfigGetGet(Async)");
    }
    return openApiV30ReportCustomConfigGetGetCall(advertiserId, dataTopics, _callback);
  }
  public ReportCustomConfigGetV30Response openApiV30ReportCustomConfigGetGet(Long advertiserId, List<ReportCustomConfigGetV30DataTopics> dataTopics) throws ApiException {
    ApiResponse<ReportCustomConfigGetV30Response> localVarResp = openApiV30ReportCustomConfigGetGetWithHttpInfo(advertiserId, dataTopics);
    return localVarResp.getData();
  }
  public ApiResponse<ReportCustomConfigGetV30Response> openApiV30ReportCustomConfigGetGetWithHttpInfo(Long advertiserId, List<ReportCustomConfigGetV30DataTopics> dataTopics) throws ApiException {
    Type localVarReturnType = new TypeToken<ReportCustomConfigGetV30Response>(){}.getType();
    return localVarApiClient.execute(localVarCall, localVarReturnType);
  }
}`;

    const api = parseJavaApiSource(source, "ReportCustomConfigGetV30Api.java");

    expect(api.className).toBe("ReportCustomConfigGetV30Api");
    expect(api.methodName).toBe("openApiV30ReportCustomConfigGetGet");
    expect(api.httpMethod).toBe("GET");
    expect(api.path).toBe("/open_api/v3.0/report/custom/config/get/");
    expect(api.responseType).toBe("ReportCustomConfigGetV30Response");
    expect(api.authNames).toEqual(["ApiKeyAuth"]);
    expect(api.accepts).toEqual(["application/json"]);
    expect(api.contentTypes).toEqual([]);
    expect(api.params).toEqual([
      { javaType: "Long", name: "advertiserId", required: true },
      { javaType: "List<ReportCustomConfigGetV30DataTopics>", name: "dataTopics", required: true },
    ]);
    expect(api.queryParams).toEqual([
      { name: "advertiser_id", source: "advertiserId" },
      { name: "data_topics", source: "dataTopics", collectionFormat: "csv" },
    ]);
    expect(api.bodyParam).toBeUndefined();
    expect(api.formParams).toEqual([]);
  });

  test("extracts model fields from SerializedName and required fields", () => {
    const source = `
public class Oauth2AccessTokenRequest {
  public static final String SERIALIZED_NAME_APP_ID = "app_id";
  @SerializedName(SERIALIZED_NAME_APP_ID)
  private Long appId = null;
  public static final String SERIALIZED_NAME_AUTH_CODE = "auth_code";
  @SerializedName(SERIALIZED_NAME_AUTH_CODE)
  private String authCode = null;
  static {
    openapiRequiredFields.add("auth_code");
  }
}`;

    const model = parseJavaModelSource(source, "Oauth2AccessTokenRequest.java");

    expect(model).toEqual({
      kind: "interface",
      name: "Oauth2AccessTokenRequest",
      fields: [
        { jsonName: "app_id", javaName: "appId", javaType: "Long", required: false },
        { jsonName: "auth_code", javaName: "authCode", javaType: "String", required: true },
      ],
    });
  });

  test("extracts enum string values", () => {
    const source = `
public enum ReportCustomConfigGetV30DataTopics {
  BASIC_DATA("BASIC_DATA"),
  CREATIVE_DATA("CREATIVE_DATA");
  private String value;
}`;

    const model = parseJavaModelSource(source, "ReportCustomConfigGetV30DataTopics.java");

    expect(model).toEqual({
      kind: "enum",
      name: "ReportCustomConfigGetV30DataTopics",
      values: [
        { key: "BASIC_DATA", value: "BASIC_DATA" },
        { key: "CREATIVE_DATA", value: "CREATIVE_DATA" },
      ],
    });
  });

  test("extracts AbstractOpenApiSchema as an internal schema model", () => {
    const source = `
public abstract class AbstractOpenApiSchema {
  private Object instance;
  private Boolean isNullable;
  private String schemaType;
}`;

    const model = parseJavaModelSource(source, "AbstractOpenApiSchema.java");

    expect(model).toEqual({
      kind: "abstractSchema",
      name: "AbstractOpenApiSchema",
    });
  });

  test("extracts byte array response API methods", () => {
    const source = `
public class AsyncTaskDownloadV2Api {
  public okhttp3.Call openApi2AsyncTaskDownloadGetCall(Long advertiserId, final ApiCallback _callback) throws ApiException {
    Object localVarPostBody = null;
    String localVarPath = "/open_api/2/async_task/download/";
    String[] localVarAuthNames = new String[] { "ApiKeyAuth" };
    return localVarApiClient.buildCall(basePath, localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
  }
  public  byte[] openApi2AsyncTaskDownloadGet(Long advertiserId) throws ApiException {
    ApiResponse< byte[] > localVarResp = openApi2AsyncTaskDownloadGetWithHttpInfo(advertiserId);
    return localVarResp.getData();
  }
  public ApiResponse< byte[] > openApi2AsyncTaskDownloadGetWithHttpInfo(Long advertiserId) throws ApiException {
    Type localVarReturnType = new TypeToken< byte[] >(){}.getType();
    return localVarApiClient.execute(localVarCall, localVarReturnType);
  }
}`;

    const api = parseJavaApiSource(source, "AsyncTaskDownloadV2Api.java");

    expect(api.methodName).toBe("openApi2AsyncTaskDownloadGet");
    expect(api.responseType).toBe("byte[]");
  });
});
