// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsLiveAuthorizeListV2Response, ToolsLiveAuthorizeListV2Status } from "../models";


export class ToolsLiveAuthorizeListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsLiveAuthorizeListGet(advertiserId: number, page: number, pageSize: number, status: ToolsLiveAuthorizeListV2Status[]): Promise<ToolsLiveAuthorizeListV2Response> {
    const response = await this.openApi2ToolsLiveAuthorizeListGetWithHttpInfo(advertiserId, page, pageSize, status);
    return response.data;
  }

  async openApi2ToolsLiveAuthorizeListGetWithHttpInfo(advertiserId: number, page: number, pageSize: number, status: ToolsLiveAuthorizeListV2Status[]): Promise<ApiResponse<ToolsLiveAuthorizeListV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsLiveAuthorizeListV2Response>({
      method: "GET",
      path: "/open_api/2/tools/live_authorize/list/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "status", value: status, collectionFormat: "multi" }
      ]
    });
  }
}


