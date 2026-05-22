// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_negativewords.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { NegativewordsAddRequest, NegativewordsAddResponseData, NegativewordsGetResponseData, NegativewordsUpdateRequest, NegativewordsUpdateResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface NegativewordsApiAddRequest {
  data: NegativewordsAddRequest;
}

export interface NegativewordsApiGetRequest {
  accountId: number | string;
  adgroupIds?: unknown;
  dynamicCreativeIds?: unknown;
  fields?: unknown;
}

export interface NegativewordsApiUpdateRequest {
  data: NegativewordsUpdateRequest;
}


export class NegativewordsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: NegativewordsApiAddRequest): Promise<NegativewordsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: NegativewordsApiAddRequest): Promise<ApiResponse<NegativewordsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<NegativewordsAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/negativewords/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: NegativewordsApiGetRequest): Promise<NegativewordsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: NegativewordsApiGetRequest): Promise<ApiResponse<NegativewordsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<NegativewordsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/negativewords/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "adgroup_ids", value: request.adgroupIds, collectionFormat: "multi" },
        { name: "dynamic_creative_ids", value: request.dynamicCreativeIds, collectionFormat: "multi" },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

  async update(request: NegativewordsApiUpdateRequest): Promise<NegativewordsUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: NegativewordsApiUpdateRequest): Promise<ApiResponse<NegativewordsUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<NegativewordsUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/negativewords/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


