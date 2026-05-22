// Generated from oceanengine/ad_open_sdk_go api/api_tools_event_assets_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsEventAssetsGetV2AssetType, ToolsEventAssetsGetV2Filtering, ToolsEventAssetsGetV2Response, ToolsEventAssetsGetV2SortType } from "../models/index";


export interface ToolsEventAssetsGetV2ApiOpenApi2ToolsEventAssetsGetGetRequest {
  advertiserId: number | string;
  assetType: ToolsEventAssetsGetV2AssetType;
  filtering?: ToolsEventAssetsGetV2Filtering;
  sortType?: ToolsEventAssetsGetV2SortType;
  page?: number;
  pageSize?: number;
}

export class ToolsEventAssetsGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsEventAssetsGetGet(request: ToolsEventAssetsGetV2ApiOpenApi2ToolsEventAssetsGetGetRequest): Promise<ToolsEventAssetsGetV2Response> {
    const response = await this.openApi2ToolsEventAssetsGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsEventAssetsGetGetWithHttpInfo(request: ToolsEventAssetsGetV2ApiOpenApi2ToolsEventAssetsGetGetRequest): Promise<ApiResponse<ToolsEventAssetsGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) > -9223372036854775616) {
      throw new ApiException("advertiserId must be less than -9223372036854775616");
    }

    if (request.assetType == null) {
      throw new ApiException("assetType is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEventAssetsGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/event/assets/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "asset_type", value: request.assetType },
        { name: "filtering", value: request.filtering },
        { name: "sort_type", value: request.sortType },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


