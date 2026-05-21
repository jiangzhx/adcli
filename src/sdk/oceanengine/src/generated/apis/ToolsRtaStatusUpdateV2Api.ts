// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsRtaStatusUpdateV2Request, ToolsRtaStatusUpdateV2Response } from "../models";


export class ToolsRtaStatusUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsRtaStatusUpdatePost(toolsRtaStatusUpdateV2Request: ToolsRtaStatusUpdateV2Request): Promise<ToolsRtaStatusUpdateV2Response> {
    const response = await this.openApi2ToolsRtaStatusUpdatePostWithHttpInfo(toolsRtaStatusUpdateV2Request);
    return response.data;
  }

  async openApi2ToolsRtaStatusUpdatePostWithHttpInfo(toolsRtaStatusUpdateV2Request: ToolsRtaStatusUpdateV2Request): Promise<ApiResponse<ToolsRtaStatusUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsRtaStatusUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/rta/status_update/",
      queryParams: [

      ],
      body: toolsRtaStatusUpdateV2Request
    });
  }
}


