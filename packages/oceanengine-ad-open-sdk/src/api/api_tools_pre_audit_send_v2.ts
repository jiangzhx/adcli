// Generated from oceanengine/ad_open_sdk_go api/api_tools_pre_audit_send_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsPreAuditSendV2Request, ToolsPreAuditSendV2Response } from "../models/index";


export interface ToolsPreAuditSendV2ApiOpenApi2ToolsPreAuditSendPostRequest {
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

  async openApi2ToolsPreAuditSendPost(request: ToolsPreAuditSendV2ApiOpenApi2ToolsPreAuditSendPostRequest): Promise<ToolsPreAuditSendV2Response> {
    const response = await this.openApi2ToolsPreAuditSendPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsPreAuditSendPostWithHttpInfo(request: ToolsPreAuditSendV2ApiOpenApi2ToolsPreAuditSendPostRequest): Promise<ApiResponse<ToolsPreAuditSendV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPreAuditSendV2Response>({
      method: "POST",
      path: "/open_api/2/tools/pre_audit/send/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsPreAuditSendV2Request
    });
  }
}


