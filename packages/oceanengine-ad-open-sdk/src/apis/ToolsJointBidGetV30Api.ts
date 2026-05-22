// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsJointBidGetV30Response } from "../models";


export class ToolsJointBidGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsJointBidGetGet(advertiserId: number): Promise<ToolsJointBidGetV30Response> {
    const response = await this.openApiV30ToolsJointBidGetGetWithHttpInfo(advertiserId);
    return response.data;
  }

  async openApiV30ToolsJointBidGetGetWithHttpInfo(advertiserId: number): Promise<ApiResponse<ToolsJointBidGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsJointBidGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsJointBidGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/joint_bid/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId }
      ]
    });
  }
}


