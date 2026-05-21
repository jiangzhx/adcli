// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsJointBidCreateV30Request, ToolsJointBidCreateV30Response } from "../models";


export class ToolsJointBidCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsJointBidCreatePost(toolsJointBidCreateV30Request: ToolsJointBidCreateV30Request): Promise<ToolsJointBidCreateV30Response> {
    const response = await this.openApiV30ToolsJointBidCreatePostWithHttpInfo(toolsJointBidCreateV30Request);
    return response.data;
  }

  async openApiV30ToolsJointBidCreatePostWithHttpInfo(toolsJointBidCreateV30Request: ToolsJointBidCreateV30Request): Promise<ApiResponse<ToolsJointBidCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsJointBidCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/joint_bid/create/",
      queryParams: [

      ],
      body: toolsJointBidCreateV30Request
    });
  }
}


