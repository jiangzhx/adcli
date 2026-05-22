// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { GameAddictionIdGetV30Response } from "../models";


export class GameAddictionIdGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30GameAddictionIdGetGet(advertiserId: number, assetId: number): Promise<GameAddictionIdGetV30Response> {
    const response = await this.openApiV30GameAddictionIdGetGetWithHttpInfo(advertiserId, assetId);
    return response.data;
  }

  async openApiV30GameAddictionIdGetGetWithHttpInfo(advertiserId: number, assetId: number): Promise<ApiResponse<GameAddictionIdGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30GameAddictionIdGetGet");
    }

    if (assetId == null) {
      throw new ApiException("Missing the required parameter 'assetId' when calling openApiV30GameAddictionIdGetGet");
    }
    return this.apiClient.requestWithHttpInfo<GameAddictionIdGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/game_addiction_id/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "asset_id", value: assetId }
      ]
    });
  }
}


