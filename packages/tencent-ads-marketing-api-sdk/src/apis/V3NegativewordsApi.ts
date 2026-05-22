// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { NegativewordsAddRequest, NegativewordsAddResponseData, NegativewordsGetResponseData, NegativewordsUpdateRequest, NegativewordsUpdateResponseData } from "../models";

export interface V3NegativewordsApiAddRequest {
  data: NegativewordsAddRequest;
}

export interface V3NegativewordsApiGetRequest {
  accountId: number | string;
  adgroupIds?: unknown;
  dynamicCreativeIds?: unknown;
  fields?: unknown;
}

export interface V3NegativewordsApiUpdateRequest {
  data: NegativewordsUpdateRequest;
}


export class V3NegativewordsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3NegativewordsApiAddRequest): Promise<NegativewordsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3NegativewordsApiAddRequest): Promise<ApiResponse<NegativewordsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<NegativewordsAddResponseData>({
      method: "POST",
      path: "/negativewords/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: V3NegativewordsApiGetRequest): Promise<NegativewordsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3NegativewordsApiGetRequest): Promise<ApiResponse<NegativewordsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<NegativewordsGetResponseData>({
      method: "GET",
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

  async update(request: V3NegativewordsApiUpdateRequest): Promise<NegativewordsUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: V3NegativewordsApiUpdateRequest): Promise<ApiResponse<NegativewordsUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<NegativewordsUpdateResponseData>({
      method: "POST",
      path: "/negativewords/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


