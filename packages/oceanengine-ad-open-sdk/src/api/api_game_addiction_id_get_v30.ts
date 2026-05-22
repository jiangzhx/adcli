// Generated from oceanengine/ad_open_sdk_go api/api_game_addiction_id_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { GameAddictionIdGetV30Response } from "../models/index";


export interface GameAddictionIdGetV30ApiOpenApiV30GameAddictionIdGetGetRequest {
  advertiserId: number | string;
  assetId: number | string;
}

export class GameAddictionIdGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30GameAddictionIdGetGet(request: GameAddictionIdGetV30ApiOpenApiV30GameAddictionIdGetGetRequest): Promise<GameAddictionIdGetV30Response> {
    const response = await this.openApiV30GameAddictionIdGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30GameAddictionIdGetGetWithHttpInfo(request: GameAddictionIdGetV30ApiOpenApiV30GameAddictionIdGetGetRequest): Promise<ApiResponse<GameAddictionIdGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.assetId == null) {
      throw new ApiException("assetId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<GameAddictionIdGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/game_addiction_id/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "asset_id", value: request.assetId }
      ]
    });
  }
}


