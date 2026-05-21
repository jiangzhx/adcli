// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsAwemeAuthListV2Filtering, ToolsAwemeAuthListV2Response } from "../models";


export class ToolsAwemeAuthListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAwemeAuthListGet(advertiserId: number, filtering: ToolsAwemeAuthListV2Filtering, page: number, pageSize: number): Promise<ToolsAwemeAuthListV2Response> {
    const response = await this.openApi2ToolsAwemeAuthListGetWithHttpInfo(advertiserId, filtering, page, pageSize);
    return response.data;
  }

  async openApi2ToolsAwemeAuthListGetWithHttpInfo(advertiserId: number, filtering: ToolsAwemeAuthListV2Filtering, page: number, pageSize: number): Promise<ApiResponse<ToolsAwemeAuthListV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsAwemeAuthListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsAwemeAuthListV2Response>({
      method: "GET",
      path: "/open_api/2/tools/aweme_auth_list/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


