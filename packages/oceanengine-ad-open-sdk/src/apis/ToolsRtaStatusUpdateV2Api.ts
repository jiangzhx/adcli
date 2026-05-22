// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsRtaStatusUpdateV2Request, ToolsRtaStatusUpdateV2Response } from "../models";


export interface OpenApi2ToolsRtaStatusUpdatePostRequest {
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

  async openApi2ToolsRtaStatusUpdatePost(request: OpenApi2ToolsRtaStatusUpdatePostRequest): Promise<ToolsRtaStatusUpdateV2Response> {
    const response = await this.openApi2ToolsRtaStatusUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsRtaStatusUpdatePostWithHttpInfo(request: OpenApi2ToolsRtaStatusUpdatePostRequest): Promise<ApiResponse<ToolsRtaStatusUpdateV2Response>> {

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


