// Generated from oceanengine/ad_open_sdk_go api/api_tools_event_all_assets_detail_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsEventAllAssetsDetailV2Response } from "../models/index";


export interface ToolsEventAllAssetsDetailV2ApiOpenApi2ToolsEventAllAssetsDetailGetRequest {
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

  async openApi2ToolsEventAllAssetsDetailGet(request: ToolsEventAllAssetsDetailV2ApiOpenApi2ToolsEventAllAssetsDetailGetRequest): Promise<ToolsEventAllAssetsDetailV2Response> {
    const response = await this.openApi2ToolsEventAllAssetsDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsEventAllAssetsDetailGetWithHttpInfo(request: ToolsEventAllAssetsDetailV2ApiOpenApi2ToolsEventAllAssetsDetailGetRequest): Promise<ApiResponse<ToolsEventAllAssetsDetailV2Response>> {
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


