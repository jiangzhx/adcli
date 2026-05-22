// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { TargetingsShareAddRequest, TargetingsShareAddResponseData, TargetingsShareGetResponseData } from "../models";

export interface TargetingsShareApiAddRequest {
  data: TargetingsShareAddRequest;
}

export interface TargetingsShareApiGetRequest {
  accountId: number | string;
  targetingId: number | string;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class TargetingsShareApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: TargetingsShareApiAddRequest): Promise<TargetingsShareAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: TargetingsShareApiAddRequest): Promise<ApiResponse<TargetingsShareAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<TargetingsShareAddResponseData>({
      method: "POST",
      path: "/targetings_share/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: TargetingsShareApiGetRequest): Promise<TargetingsShareGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: TargetingsShareApiGetRequest): Promise<ApiResponse<TargetingsShareGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.targetingId == null) {
      throw new ApiException("Missing the required parameter 'targetingId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<TargetingsShareGetResponseData>({
      method: "GET",
      path: "/targetings_share/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "targeting_id", value: request.targetingId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


