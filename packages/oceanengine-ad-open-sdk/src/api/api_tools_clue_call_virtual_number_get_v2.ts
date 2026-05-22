// Generated from oceanengine/ad_open_sdk_go api/api_tools_clue_call_virtual_number_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsClueCallVirtualNumberGetV2Response } from "../models/index";


export interface ToolsClueCallVirtualNumberGetV2ApiOpenApi2ToolsClueCallVirtualNumberGetGetRequest {
  advertiserId: number | string;
  clueId: number | string;
  callerNumber: string;
  calleeNumber: string;
}

export class ToolsClueCallVirtualNumberGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueCallVirtualNumberGetGet(request: ToolsClueCallVirtualNumberGetV2ApiOpenApi2ToolsClueCallVirtualNumberGetGetRequest): Promise<ToolsClueCallVirtualNumberGetV2Response> {
    const response = await this.openApi2ToolsClueCallVirtualNumberGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueCallVirtualNumberGetGetWithHttpInfo(request: ToolsClueCallVirtualNumberGetV2ApiOpenApi2ToolsClueCallVirtualNumberGetGetRequest): Promise<ApiResponse<ToolsClueCallVirtualNumberGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsClueCallVirtualNumberGetGet");
    }

    if (request.clueId == null) {
      throw new ApiException("Missing the required parameter 'clueId' when calling openApi2ToolsClueCallVirtualNumberGetGet");
    }

    if (request.callerNumber == null) {
      throw new ApiException("Missing the required parameter 'callerNumber' when calling openApi2ToolsClueCallVirtualNumberGetGet");
    }

    if (request.calleeNumber == null) {
      throw new ApiException("Missing the required parameter 'calleeNumber' when calling openApi2ToolsClueCallVirtualNumberGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsClueCallVirtualNumberGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/clue/call_virtual_number/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "clue_id", value: request.clueId },
        { name: "caller_number", value: request.callerNumber },
        { name: "callee_number", value: request.calleeNumber }
      ]
    });
  }
}


