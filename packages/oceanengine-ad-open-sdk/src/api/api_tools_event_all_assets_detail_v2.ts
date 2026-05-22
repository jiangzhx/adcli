// Generated from oceanengine/ad_open_sdk_go api/api_tools_event_all_assets_detail_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsEventAllAssetsDetailV2Response } from "../models/index";


export interface ToolsEventAllAssetsDetailV2ApiOpenApi2ToolsEventAllAssetsDetailGetRequest {
  advertiserId: number | string;
  assetIds: (number | string)[];
}

export class ToolsEventAllAssetsDetailV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsEventAllAssetsDetailGet(request: ToolsEventAllAssetsDetailV2ApiOpenApi2ToolsEventAllAssetsDetailGetRequest): Promise<ToolsEventAllAssetsDetailV2Response> {
    const response = await this.openApi2ToolsEventAllAssetsDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsEventAllAssetsDetailGetWithHttpInfo(request: ToolsEventAllAssetsDetailV2ApiOpenApi2ToolsEventAllAssetsDetailGetRequest): Promise<ApiResponse<ToolsEventAllAssetsDetailV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.assetIds == null) {
      throw new ApiException("assetIds is required and must be specified");
    }

    if (request.assetIds != null && request.assetIds.length < 1) {
      throw new ApiException("assetIds must have at least 1 elements");
    }

    if (request.assetIds != null && request.assetIds.length > 50) {
      throw new ApiException("assetIds must have less than 50 elements");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEventAllAssetsDetailV2Response>({
      method: "GET",
      path: "/open_api/2/tools/event/all_assets/detail/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "asset_ids", value: request.assetIds }
      ]
    });
  }
}


