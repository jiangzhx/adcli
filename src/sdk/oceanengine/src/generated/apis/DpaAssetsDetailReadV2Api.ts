// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { DpaAssetsDetailReadV2Response } from "../models";


export class DpaAssetsDetailReadV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaAssetsDetailReadGet(advertiserId: number, assetIds: number[]): Promise<DpaAssetsDetailReadV2Response> {
    const response = await this.openApi2DpaAssetsDetailReadGetWithHttpInfo(advertiserId, assetIds);
    return response.data;
  }

  async openApi2DpaAssetsDetailReadGetWithHttpInfo(advertiserId: number, assetIds: number[]): Promise<ApiResponse<DpaAssetsDetailReadV2Response>> {

    return this.apiClient.requestWithHttpInfo<DpaAssetsDetailReadV2Response>({
      method: "GET",
      path: "/open_api/2/dpa/assets/detail/read/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "asset_ids", value: assetIds, collectionFormat: "multi" }
      ]
    });
  }
}


