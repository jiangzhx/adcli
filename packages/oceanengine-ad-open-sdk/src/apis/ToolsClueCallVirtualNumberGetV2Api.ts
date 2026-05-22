// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsClueCallVirtualNumberGetV2Response } from "../models";


export class ToolsClueCallVirtualNumberGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueCallVirtualNumberGetGet(advertiserId: number, clueId: number, callerNumber: string, calleeNumber: string): Promise<ToolsClueCallVirtualNumberGetV2Response> {
    const response = await this.openApi2ToolsClueCallVirtualNumberGetGetWithHttpInfo(advertiserId, clueId, callerNumber, calleeNumber);
    return response.data;
  }

  async openApi2ToolsClueCallVirtualNumberGetGetWithHttpInfo(advertiserId: number, clueId: number, callerNumber: string, calleeNumber: string): Promise<ApiResponse<ToolsClueCallVirtualNumberGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsClueCallVirtualNumberGetGet");
    }

    if (clueId == null) {
      throw new ApiException("Missing the required parameter 'clueId' when calling openApi2ToolsClueCallVirtualNumberGetGet");
    }

    if (callerNumber == null) {
      throw new ApiException("Missing the required parameter 'callerNumber' when calling openApi2ToolsClueCallVirtualNumberGetGet");
    }

    if (calleeNumber == null) {
      throw new ApiException("Missing the required parameter 'calleeNumber' when calling openApi2ToolsClueCallVirtualNumberGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsClueCallVirtualNumberGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/clue/call_virtual_number/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "clue_id", value: clueId },
        { name: "caller_number", value: callerNumber },
        { name: "callee_number", value: calleeNumber }
      ]
    });
  }
}


