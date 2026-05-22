// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_game_feature.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { GameFeatureAddRequest, GameFeatureAddResponseData, GameFeatureGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface GameFeatureApiAddRequest {
  data: GameFeatureAddRequest;
}

export interface GameFeatureApiGetRequest {
  accountId: number | string;
  marketingTargetType: string;
  marketingTargetDetailId: string;
  fields?: unknown;
}


export class GameFeatureApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: GameFeatureApiAddRequest): Promise<GameFeatureAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: GameFeatureApiAddRequest): Promise<ApiResponse<GameFeatureAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<GameFeatureAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/game_feature/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: GameFeatureApiGetRequest): Promise<GameFeatureGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: GameFeatureApiGetRequest): Promise<ApiResponse<GameFeatureGetResponseData>> {
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
      basePath: TencentAdsV30Configuration.basePath,
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


