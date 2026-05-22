// Generated from oceanengine/ad_open_sdk_go api/api_tools_joint_bid_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsJointBidUpdateV30Request, ToolsJointBidUpdateV30Response } from "../models/index";


export interface ToolsJointBidUpdateV30ApiOpenApiV30ToolsJointBidUpdatePostRequest {
  toolsJointBidUpdateV30Request?: ToolsJointBidUpdateV30Request;
}

export class ToolsJointBidUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsJointBidUpdatePost(request: ToolsJointBidUpdateV30ApiOpenApiV30ToolsJointBidUpdatePostRequest): Promise<ToolsJointBidUpdateV30Response> {
    const response = await this.openApiV30ToolsJointBidUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsJointBidUpdatePostWithHttpInfo(request: ToolsJointBidUpdateV30ApiOpenApiV30ToolsJointBidUpdatePostRequest): Promise<ApiResponse<ToolsJointBidUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsJointBidUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/joint_bid/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsJointBidUpdateV30Request
    });
  }
}


