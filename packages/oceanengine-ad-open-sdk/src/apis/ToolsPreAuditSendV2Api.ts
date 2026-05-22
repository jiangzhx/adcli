// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsPreAuditSendV2Request, ToolsPreAuditSendV2Response } from "../models";


export interface OpenApi2ToolsPreAuditSendPostRequest {
  toolsPreAuditSendV2Request?: ToolsPreAuditSendV2Request;
}

export class ToolsPreAuditSendV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsPreAuditSendPost(request: OpenApi2ToolsPreAuditSendPostRequest): Promise<ToolsPreAuditSendV2Response> {
    const response = await this.openApi2ToolsPreAuditSendPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsPreAuditSendPostWithHttpInfo(request: OpenApi2ToolsPreAuditSendPostRequest): Promise<ApiResponse<ToolsPreAuditSendV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPreAuditSendV2Response>({
      method: "POST",
      path: "/open_api/2/tools/pre_audit/send/",
      queryParams: [

      ],
      body: request.toolsPreAuditSendV2Request
    });
  }
}


