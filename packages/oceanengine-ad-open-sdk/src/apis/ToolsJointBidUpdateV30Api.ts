// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsJointBidUpdateV30Request, ToolsJointBidUpdateV30Response } from "../models";


export class ToolsJointBidUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsJointBidUpdatePost(request: ToolsJointBidUpdateV30Request): Promise<ToolsJointBidUpdateV30Response> {
    const response = await this.openApiV30ToolsJointBidUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsJointBidUpdatePostWithHttpInfo(request: ToolsJointBidUpdateV30Request): Promise<ApiResponse<ToolsJointBidUpdateV30Response>> {
    return this.apiClient.requestWithHttpInfo<ToolsJointBidUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/joint_bid/update/",
      queryParams: [

      ],
      body: request
    });
  }
}


