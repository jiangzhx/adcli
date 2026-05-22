// Generated from oceanengine/ad_open_sdk_go api/api_tools_joint_bid_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsJointBidCreateV30Request, ToolsJointBidCreateV30Response } from "../models/index";


export interface ToolsJointBidCreateV30ApiOpenApiV30ToolsJointBidCreatePostRequest {
  toolsJointBidCreateV30Request?: ToolsJointBidCreateV30Request;
}

export class ToolsJointBidCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsJointBidCreatePost(request: ToolsJointBidCreateV30ApiOpenApiV30ToolsJointBidCreatePostRequest): Promise<ToolsJointBidCreateV30Response> {
    const response = await this.openApiV30ToolsJointBidCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsJointBidCreatePostWithHttpInfo(request: ToolsJointBidCreateV30ApiOpenApiV30ToolsJointBidCreatePostRequest): Promise<ApiResponse<ToolsJointBidCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsJointBidCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/joint_bid/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsJointBidCreateV30Request
    });
  }
}


