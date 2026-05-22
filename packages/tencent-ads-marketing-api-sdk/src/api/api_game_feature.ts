// Generated from tencentad/marketing-api-go-sdk pkg/api/api_game_feature.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { GameFeatureAddRequest, GameFeatureAddResponseData, GameFeatureGetResponseData, GameFeatureUpdateRequest, GameFeatureUpdateResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface GameFeatureApiAddRequest {
  data: GameFeatureAddRequest;
}

export interface GameFeatureApiGetRequest {
  accountId: number | string;
  promotedObjectType: string;
  promotedObjectId: string;
  fields?: unknown;
}

export interface GameFeatureApiUpdateRequest {
  data: GameFeatureUpdateRequest;
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
      basePath: TencentAdsV13Configuration.basePath,
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

    if (request.promotedObjectType == null) {
      throw new ApiException("Missing the required parameter 'promotedObjectType' when calling get");
    }

    if (request.promotedObjectId == null) {
      throw new ApiException("Missing the required parameter 'promotedObjectId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<GameFeatureGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/game_feature/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "promoted_object_type", value: request.promotedObjectType },
        { name: "promoted_object_id", value: request.promotedObjectId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

  async update(request: GameFeatureApiUpdateRequest): Promise<GameFeatureUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: GameFeatureApiUpdateRequest): Promise<ApiResponse<GameFeatureUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<GameFeatureUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/game_feature/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


