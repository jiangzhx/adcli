// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_adgroup_negativewords.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdgroupNegativewordsAddRequest, AdgroupNegativewordsAddResponseData, AdgroupNegativewordsGetResponseData, AdgroupNegativewordsUpdateRequest, AdgroupNegativewordsUpdateResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface AdgroupNegativewordsApiAddRequest {
  data: AdgroupNegativewordsAddRequest;
}

export interface AdgroupNegativewordsApiGetRequest {
  accountId: number | string;
  adgroupIds: number | string[];
  fields?: unknown;
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
      basePath: TencentAdsV30Configuration.basePath,
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
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.adgroupIds == null) {
      throw new ApiException("Missing the required parameter 'adgroupIds' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AdgroupNegativewordsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/adgroup_negativewords/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "adgroup_ids", value: request.adgroupIds, collectionFormat: "multi" },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
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
      basePath: TencentAdsV30Configuration.basePath,
      path: "/adgroup_negativewords/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


