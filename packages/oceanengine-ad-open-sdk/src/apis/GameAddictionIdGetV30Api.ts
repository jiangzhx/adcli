// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { GameAddictionIdGetV30Response } from "../models";


export interface OpenApiV30GameAddictionIdGetGetRequest {
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

  async openApiV30GameAddictionIdGetGet(request: OpenApiV30GameAddictionIdGetGetRequest): Promise<GameAddictionIdGetV30Response> {
    const response = await this.openApiV30GameAddictionIdGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30GameAddictionIdGetGetWithHttpInfo(request: OpenApiV30GameAddictionIdGetGetRequest): Promise<ApiResponse<GameAddictionIdGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30GameAddictionIdGetGet");
    }

    if (request.assetId == null) {
      throw new ApiException("Missing the required parameter 'assetId' when calling openApiV30GameAddictionIdGetGet");
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


