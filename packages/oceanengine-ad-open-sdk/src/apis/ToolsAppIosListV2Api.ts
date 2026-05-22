// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAppIosListV2Filtering, ToolsAppIosListV2Response } from "../models";


export class ToolsAppIosListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppIosListGet(advertiserId: number, filtering: ToolsAppIosListV2Filtering, page: number, pageSize: number): Promise<ToolsAppIosListV2Response> {
    const response = await this.openApi2ToolsAppIosListGetWithHttpInfo(advertiserId, filtering, page, pageSize);
    return response.data;
  }

  async openApi2ToolsAppIosListGetWithHttpInfo(advertiserId: number, filtering: ToolsAppIosListV2Filtering, page: number, pageSize: number): Promise<ApiResponse<ToolsAppIosListV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAppIosListV2Response>({
      method: "GET",
      path: "/open_api/2/tools/app/ios/list/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


