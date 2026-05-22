// Generated from oceanengine/ad_open_sdk_go api/api_tools_rta_set_scope_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsRtaSetScopeV2Request, ToolsRtaSetScopeV2Response } from "../models/index";


export interface ToolsRtaSetScopeV2ApiOpenApi2ToolsRtaSetScopePostRequest {
  toolsRtaSetScopeV2Request?: ToolsRtaSetScopeV2Request;
}

export class ToolsRtaSetScopeV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsRtaSetScopePost(request: ToolsRtaSetScopeV2ApiOpenApi2ToolsRtaSetScopePostRequest): Promise<ToolsRtaSetScopeV2Response> {
    const response = await this.openApi2ToolsRtaSetScopePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsRtaSetScopePostWithHttpInfo(request: ToolsRtaSetScopeV2ApiOpenApi2ToolsRtaSetScopePostRequest): Promise<ApiResponse<ToolsRtaSetScopeV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsRtaSetScopeV2Response>({
      method: "POST",
      path: "/open_api/2/tools/rta/set_scope/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsRtaSetScopeV2Request
    });
  }
}


