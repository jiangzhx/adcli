// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { GameplayListV30AccountType, GameplayListV30AssetType, GameplayListV30PageInfo, GameplayListV30Response } from "../models";


export class GameplayListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30GameplayListGet(accountId: number, accountType: GameplayListV30AccountType, assetId: string, assetType: GameplayListV30AssetType, pageInfo: GameplayListV30PageInfo, filterPlayNames: string[]): Promise<GameplayListV30Response> {
    const response = await this.openApiV30GameplayListGetWithHttpInfo(accountId, accountType, assetId, assetType, pageInfo, filterPlayNames);
    return response.data;
  }

  async openApiV30GameplayListGetWithHttpInfo(accountId: number, accountType: GameplayListV30AccountType, assetId: string, assetType: GameplayListV30AssetType, pageInfo: GameplayListV30PageInfo, filterPlayNames: string[]): Promise<ApiResponse<GameplayListV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30GameplayListGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30GameplayListGet");
    }

    if (assetId == null) {
      throw new ApiException("Missing the required parameter 'assetId' when calling openApiV30GameplayListGet");
    }

    if (assetType == null) {
      throw new ApiException("Missing the required parameter 'assetType' when calling openApiV30GameplayListGet");
    }

    if (pageInfo == null) {
      throw new ApiException("Missing the required parameter 'pageInfo' when calling openApiV30GameplayListGet");
    }
    return this.apiClient.requestWithHttpInfo<GameplayListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/gameplay/list/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "asset_id", value: assetId },
        { name: "asset_type", value: assetType },
        { name: "page_info", value: pageInfo },
        { name: "filter_play_names", value: filterPlayNames, collectionFormat: "csv" }
      ]
    });
  }
}


