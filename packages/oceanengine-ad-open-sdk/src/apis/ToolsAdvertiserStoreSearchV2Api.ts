// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAdvertiserStoreSearchV2Response, ToolsAdvertiserStoreSearchV2Type } from "../models";


export class ToolsAdvertiserStoreSearchV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAdvertiserStoreSearchGet(advertiserId: number, page: number, pageSize: number, type: ToolsAdvertiserStoreSearchV2Type): Promise<ToolsAdvertiserStoreSearchV2Response> {
    const response = await this.openApi2ToolsAdvertiserStoreSearchGetWithHttpInfo(advertiserId, page, pageSize, type);
    return response.data;
  }

  async openApi2ToolsAdvertiserStoreSearchGetWithHttpInfo(advertiserId: number, page: number, pageSize: number, type: ToolsAdvertiserStoreSearchV2Type): Promise<ApiResponse<ToolsAdvertiserStoreSearchV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAdvertiserStoreSearchV2Response>({
      method: "GET",
      path: "/open_api/2/tools/advertiser_store/search/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "type", value: type }
      ]
    });
  }
}


