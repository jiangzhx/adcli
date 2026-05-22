// Generated from tencentad/marketing-api-go-sdk pkg/api/api_adgroup_negativewords.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdgroupNegativewordsAddRequest, AdgroupNegativewordsAddResponseData, AdgroupNegativewordsGetRequest, AdgroupNegativewordsGetResponseData, AdgroupNegativewordsUpdateRequest, AdgroupNegativewordsUpdateResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface AdgroupNegativewordsApiAddRequest {
  data: AdgroupNegativewordsAddRequest;
}

export interface AdgroupNegativewordsApiGetRequest {
  data: AdgroupNegativewordsGetRequest;
}

export interface AdgroupNegativewordsApiUpdateRequest {
  data: AdgroupNegativewordsUpdateRequest;
}


export class AdgroupNegativewordsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: AdgroupNegativewordsApiAddRequest): Promise<AdgroupNegativewordsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: AdgroupNegativewordsApiAddRequest): Promise<ApiResponse<AdgroupNegativewordsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<AdgroupNegativewordsAddResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/adgroup_negativewords/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: AdgroupNegativewordsApiGetRequest): Promise<AdgroupNegativewordsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: AdgroupNegativewordsApiGetRequest): Promise<ApiResponse<AdgroupNegativewordsGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AdgroupNegativewordsGetResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/adgroup_negativewords/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async update(request: AdgroupNegativewordsApiUpdateRequest): Promise<AdgroupNegativewordsUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: AdgroupNegativewordsApiUpdateRequest): Promise<ApiResponse<AdgroupNegativewordsUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<AdgroupNegativewordsUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/adgroup_negativewords/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


