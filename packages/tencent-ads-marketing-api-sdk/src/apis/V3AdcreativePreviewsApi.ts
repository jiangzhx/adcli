// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdcreativePreviewsAddRequest, AdcreativePreviewsAddResponseData, AdcreativePreviewsGetResponseData, FilteringStruct } from "../models";

export interface V3AdcreativePreviewsApiAddRequest {
  data: AdcreativePreviewsAddRequest;
}

export interface V3AdcreativePreviewsApiGetRequest {
  accountId: number | string;
  filtering: FilteringStruct[];
  fields?: unknown;
}


export class V3AdcreativePreviewsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3AdcreativePreviewsApiAddRequest): Promise<AdcreativePreviewsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3AdcreativePreviewsApiAddRequest): Promise<ApiResponse<AdcreativePreviewsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<AdcreativePreviewsAddResponseData>({
      method: "POST",
      path: "/adcreative_previews/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: V3AdcreativePreviewsApiGetRequest): Promise<AdcreativePreviewsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3AdcreativePreviewsApiGetRequest): Promise<ApiResponse<AdcreativePreviewsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AdcreativePreviewsGetResponseData>({
      method: "GET",
      path: "/adcreative_previews/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


