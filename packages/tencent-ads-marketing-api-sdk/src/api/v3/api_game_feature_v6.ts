// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_game_feature_v6.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { GameFeatureV6AddRequest, GameFeatureV6AddResponseData, GameFeatureV6GetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface GameFeatureV6ApiAddRequest {
  data: GameFeatureV6AddRequest;
}

export interface GameFeatureV6ApiGetRequest {
  accountId: number | string;
  marketingTargetType: string;
  marketingTargetDetailId: string;
  fields?: unknown;
}


export class GameFeatureV6Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: GameFeatureV6ApiAddRequest): Promise<GameFeatureV6AddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: GameFeatureV6ApiAddRequest): Promise<ApiResponse<GameFeatureV6AddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<GameFeatureV6AddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/game_feature_v6/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: GameFeatureV6ApiGetRequest): Promise<GameFeatureV6GetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: GameFeatureV6ApiGetRequest): Promise<ApiResponse<GameFeatureV6GetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.marketingTargetType == null) {
      throw new ApiException("Missing the required parameter 'marketingTargetType' when calling get");
    }

    if (request.marketingTargetDetailId == null) {
      throw new ApiException("Missing the required parameter 'marketingTargetDetailId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<GameFeatureV6GetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/game_feature_v6/get",
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


