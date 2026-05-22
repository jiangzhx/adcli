// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsJointBidCreateV30Request, ToolsJointBidCreateV30Response } from "../models";


export interface OpenApiV30ToolsJointBidCreatePostRequest {
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

  async openApiV30ToolsJointBidCreatePost(request: OpenApiV30ToolsJointBidCreatePostRequest): Promise<ToolsJointBidCreateV30Response> {
    const response = await this.openApiV30ToolsJointBidCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsJointBidCreatePostWithHttpInfo(request: OpenApiV30ToolsJointBidCreatePostRequest): Promise<ApiResponse<ToolsJointBidCreateV30Response>> {

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


