// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEventAllAssetsDetailV2Response } from "../models";


export interface OpenApi2ToolsEventAllAssetsDetailGetRequest {
  advertiserId: number | string;
  assetIds: number | string[];
}

export class ToolsEventAllAssetsDetailV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsEventAllAssetsDetailGet(request: OpenApi2ToolsEventAllAssetsDetailGetRequest): Promise<ToolsEventAllAssetsDetailV2Response> {
    const response = await this.openApi2ToolsEventAllAssetsDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsEventAllAssetsDetailGetWithHttpInfo(request: OpenApi2ToolsEventAllAssetsDetailGetRequest): Promise<ApiResponse<ToolsEventAllAssetsDetailV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsEventAllAssetsDetailGet");
    }

    if (request.assetIds == null) {
      throw new ApiException("Missing the required parameter 'assetIds' when calling openApi2ToolsEventAllAssetsDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEventAllAssetsDetailV2Response>({
      method: "GET",
      path: "/open_api/2/tools/event/all_assets/detail/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "asset_ids", value: request.assetIds, collectionFormat: "csv" }
      ]
    });
  }
}


