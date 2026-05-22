// Generated from oceanengine/ad_open_sdk_go api/api_gameplay_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { GameplayListV30AccountType, GameplayListV30AssetType, GameplayListV30PageInfo, GameplayListV30Response } from "../models/index";


export interface GameplayListV30ApiOpenApiV30GameplayListGetRequest {
  accountId: number | string;
  accountType: GameplayListV30AccountType;
  assetId: string;
  assetType: GameplayListV30AssetType;
  pageInfo: GameplayListV30PageInfo;
  filterPlayNames?: string[];
}

export class GameplayListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30GameplayListGet(request: GameplayListV30ApiOpenApiV30GameplayListGetRequest): Promise<GameplayListV30Response> {
    const response = await this.openApiV30GameplayListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30GameplayListGetWithHttpInfo(request: GameplayListV30ApiOpenApiV30GameplayListGetRequest): Promise<ApiResponse<GameplayListV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("accountId is required and must be specified");
    }

    if (request.accountType == null) {
      throw new ApiException("accountType is required and must be specified");
    }

    if (request.assetId == null) {
      throw new ApiException("assetId is required and must be specified");
    }

    if (request.assetType == null) {
      throw new ApiException("assetType is required and must be specified");
    }

    if (request.pageInfo == null) {
      throw new ApiException("pageInfo is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<GameplayListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/gameplay/list/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "asset_id", value: request.assetId },
        { name: "asset_type", value: request.assetType },
        { name: "filter_play_names", value: request.filterPlayNames },
        { name: "page_info", value: request.pageInfo }
      ]
    });
  }
}


