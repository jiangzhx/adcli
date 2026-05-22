// Generated from tencentad/marketing-api-go-sdk pkg/api/api_adcreative_previews.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdcreativePreviewsAddRequest, AdcreativePreviewsGetResponseData, FilteringStruct } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface AdcreativePreviewsApiAddRequest {
  data: AdcreativePreviewsAddRequest;
}

export interface AdcreativePreviewsApiGetRequest {
  accountId: number | string;
  filtering: FilteringStruct[];
  fields?: unknown;
}


export class AdcreativePreviewsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: AdcreativePreviewsApiAddRequest): Promise<unknown> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: AdcreativePreviewsApiAddRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/adcreative_previews/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: AdcreativePreviewsApiGetRequest): Promise<AdcreativePreviewsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: AdcreativePreviewsApiGetRequest): Promise<ApiResponse<AdcreativePreviewsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AdcreativePreviewsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
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


