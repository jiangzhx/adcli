// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_dynamic_ad_images.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DynamicAdImagesAddRequest, DynamicAdImagesAddResponseData, DynamicAdImagesGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface DynamicAdImagesApiAddRequest {
  data: DynamicAdImagesAddRequest;
}

export interface DynamicAdImagesApiGetRequest {
  accountId: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class DynamicAdImagesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: DynamicAdImagesApiAddRequest): Promise<DynamicAdImagesAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: DynamicAdImagesApiAddRequest): Promise<ApiResponse<DynamicAdImagesAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<DynamicAdImagesAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/dynamic_ad_images/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: DynamicAdImagesApiGetRequest): Promise<DynamicAdImagesGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: DynamicAdImagesApiGetRequest): Promise<ApiResponse<DynamicAdImagesGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<DynamicAdImagesGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/dynamic_ad_images/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


