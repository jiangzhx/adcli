// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { GameFeatureAddRequest, GameFeatureAddResponseData, GameFeatureGetResponseData } from "../models";

export interface V3GameFeatureApiAddRequest {
  data: GameFeatureAddRequest;
}

export interface V3GameFeatureApiGetRequest {
  accountId: number | string;
  marketingTargetType: string;
  marketingTargetDetailId: string;
  fields?: unknown;
}


export class V3GameFeatureApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3GameFeatureApiAddRequest): Promise<GameFeatureAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3GameFeatureApiAddRequest): Promise<ApiResponse<GameFeatureAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<GameFeatureAddResponseData>({
      method: "POST",
      path: "/game_feature/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: V3GameFeatureApiGetRequest): Promise<GameFeatureGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3GameFeatureApiGetRequest): Promise<ApiResponse<GameFeatureGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.marketingTargetType == null) {
      throw new ApiException("Missing the required parameter 'marketingTargetType' when calling get");
    }

    if (request.marketingTargetDetailId == null) {
      throw new ApiException("Missing the required parameter 'marketingTargetDetailId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<GameFeatureGetResponseData>({
      method: "GET",
      path: "/game_feature/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "marketing_target_type", value: request.marketingTargetType },
        { name: "marketing_target_detail_id", value: request.marketingTargetDetailId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


