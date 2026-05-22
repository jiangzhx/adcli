// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdgroupNegativewordsAddRequest, AdgroupNegativewordsAddResponseData, AdgroupNegativewordsGetRequest, AdgroupNegativewordsGetResponseData, AdgroupNegativewordsUpdateRequest, AdgroupNegativewordsUpdateResponseData } from "../models";

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
      path: "/adgroup_negativewords/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


