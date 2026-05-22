// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdgroupNegativewordsAddRequest, AdgroupNegativewordsAddResponseData, AdgroupNegativewordsGetResponseData, AdgroupNegativewordsUpdateRequest, AdgroupNegativewordsUpdateResponseData } from "../models";

export interface V3AdgroupNegativewordsApiAddRequest {
  data: AdgroupNegativewordsAddRequest;
}

export interface V3AdgroupNegativewordsApiGetRequest {
  accountId: number | string;
  adgroupIds: number | string[];
  fields?: unknown;
}

export interface V3AdgroupNegativewordsApiUpdateRequest {
  data: AdgroupNegativewordsUpdateRequest;
}


export class V3AdgroupNegativewordsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3AdgroupNegativewordsApiAddRequest): Promise<AdgroupNegativewordsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3AdgroupNegativewordsApiAddRequest): Promise<ApiResponse<AdgroupNegativewordsAddResponseData>> {
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

  async get(request: V3AdgroupNegativewordsApiGetRequest): Promise<AdgroupNegativewordsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3AdgroupNegativewordsApiGetRequest): Promise<ApiResponse<AdgroupNegativewordsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.adgroupIds == null) {
      throw new ApiException("Missing the required parameter 'adgroupIds' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AdgroupNegativewordsGetResponseData>({
      method: "GET",
      path: "/adgroup_negativewords/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "adgroup_ids", value: request.adgroupIds, collectionFormat: "multi" },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

  async update(request: V3AdgroupNegativewordsApiUpdateRequest): Promise<AdgroupNegativewordsUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: V3AdgroupNegativewordsApiUpdateRequest): Promise<ApiResponse<AdgroupNegativewordsUpdateResponseData>> {
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


