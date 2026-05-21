// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsSiteGetV2Filtering, ToolsSiteGetV2Response, ToolsSiteGetV2ShareType, ToolsSiteGetV2Status } from "../models";


export class ToolsSiteGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsSiteGetGet(advertiserId: number, xOrangeCaller: string, page: number, pageSize: number, status: ToolsSiteGetV2Status, shareType: ToolsSiteGetV2ShareType, filtering: ToolsSiteGetV2Filtering): Promise<ToolsSiteGetV2Response> {
    const response = await this.openApi2ToolsSiteGetGetWithHttpInfo(advertiserId, xOrangeCaller, page, pageSize, status, shareType, filtering);
    return response.data;
  }

  async openApi2ToolsSiteGetGetWithHttpInfo(advertiserId: number, xOrangeCaller: string, page: number, pageSize: number, status: ToolsSiteGetV2Status, shareType: ToolsSiteGetV2ShareType, filtering: ToolsSiteGetV2Filtering): Promise<ApiResponse<ToolsSiteGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsSiteGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsSiteGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/site/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "status", value: status },
        { name: "share_type", value: shareType },
        { name: "filtering", value: filtering }
      ]
    });
  }
}


