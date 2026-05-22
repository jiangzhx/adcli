// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEventAllAssetsListV2Filtering, ToolsEventAllAssetsListV2Response } from "../models";


export class ToolsEventAllAssetsListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsEventAllAssetsListGet(advertiserId: number, filtering: ToolsEventAllAssetsListV2Filtering, page: number, pageSize: number): Promise<ToolsEventAllAssetsListV2Response> {
    const response = await this.openApi2ToolsEventAllAssetsListGetWithHttpInfo(advertiserId, filtering, page, pageSize);
    return response.data;
  }

  async openApi2ToolsEventAllAssetsListGetWithHttpInfo(advertiserId: number, filtering: ToolsEventAllAssetsListV2Filtering, page: number, pageSize: number): Promise<ApiResponse<ToolsEventAllAssetsListV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsEventAllAssetsListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEventAllAssetsListV2Response>({
      method: "GET",
      path: "/open_api/2/tools/event/all_assets/list/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


