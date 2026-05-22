// Generated from oceanengine/ad_open_sdk_go api/api_dpa_assets_detail_read_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DpaAssetsDetailReadV2Response } from "../models/index";


export interface DpaAssetsDetailReadV2ApiOpenApi2DpaAssetsDetailReadGetRequest {
  advertiserId?: number | string;
  assetIds?: number | string[];
}

export class DpaAssetsDetailReadV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaAssetsDetailReadGet(request: DpaAssetsDetailReadV2ApiOpenApi2DpaAssetsDetailReadGetRequest): Promise<DpaAssetsDetailReadV2Response> {
    const response = await this.openApi2DpaAssetsDetailReadGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2DpaAssetsDetailReadGetWithHttpInfo(request: DpaAssetsDetailReadV2ApiOpenApi2DpaAssetsDetailReadGetRequest): Promise<ApiResponse<DpaAssetsDetailReadV2Response>> {

    return this.apiClient.requestWithHttpInfo<DpaAssetsDetailReadV2Response>({
      method: "GET",
      path: "/open_api/2/dpa/assets/detail/read/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "asset_ids", value: request.assetIds, collectionFormat: "csv" }
      ]
    });
  }
}


