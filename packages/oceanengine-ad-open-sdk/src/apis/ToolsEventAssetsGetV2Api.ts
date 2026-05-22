// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEventAssetsGetV2AssetType, ToolsEventAssetsGetV2Filtering, ToolsEventAssetsGetV2Response, ToolsEventAssetsGetV2SortType } from "../models";


export interface OpenApi2ToolsEventAssetsGetGetRequest {
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

  async openApi2ToolsEventAssetsGetGet(request: OpenApi2ToolsEventAssetsGetGetRequest): Promise<ToolsEventAssetsGetV2Response> {
    const response = await this.openApi2ToolsEventAssetsGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsEventAssetsGetGetWithHttpInfo(request: OpenApi2ToolsEventAssetsGetGetRequest): Promise<ApiResponse<ToolsEventAssetsGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsEventAssetsGetGet");
    }

    if (request.assetType == null) {
      throw new ApiException("Missing the required parameter 'assetType' when calling openApi2ToolsEventAssetsGetGet");
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


