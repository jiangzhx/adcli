// Generated from oceanengine/ad_open_sdk_go api/api_tools_joint_bid_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsJointBidGetV30Response } from "../models/index";


export interface ToolsJointBidGetV30ApiOpenApiV30ToolsJointBidGetGetRequest {
  advertiserId: number | string;
}

export class ToolsJointBidGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsJointBidGetGet(request: ToolsJointBidGetV30ApiOpenApiV30ToolsJointBidGetGetRequest): Promise<ToolsJointBidGetV30Response> {
    const response = await this.openApiV30ToolsJointBidGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsJointBidGetGetWithHttpInfo(request: ToolsJointBidGetV30ApiOpenApiV30ToolsJointBidGetGetRequest): Promise<ApiResponse<ToolsJointBidGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ToolsJointBidGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/joint_bid/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


