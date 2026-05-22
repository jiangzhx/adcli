// Generated from oceanengine/ad_open_sdk_go api/api_tools_rta_status_update_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsRtaStatusUpdateV2Request, ToolsRtaStatusUpdateV2Response } from "../models/index";


export interface ToolsRtaStatusUpdateV2ApiOpenApi2ToolsRtaStatusUpdatePostRequest {
  toolsRtaStatusUpdateV2Request?: ToolsRtaStatusUpdateV2Request;
}

export class ToolsRtaStatusUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsRtaStatusUpdatePost(request: ToolsRtaStatusUpdateV2ApiOpenApi2ToolsRtaStatusUpdatePostRequest): Promise<ToolsRtaStatusUpdateV2Response> {
    const response = await this.openApi2ToolsRtaStatusUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsRtaStatusUpdatePostWithHttpInfo(request: ToolsRtaStatusUpdateV2ApiOpenApi2ToolsRtaStatusUpdatePostRequest): Promise<ApiResponse<ToolsRtaStatusUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsRtaStatusUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/rta/status_update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsRtaStatusUpdateV2Request
    });
  }
}


