// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsRtaSetScopeV2Request, ToolsRtaSetScopeV2Response } from "../models";


export class ToolsRtaSetScopeV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsRtaSetScopePost(toolsRtaSetScopeV2Request: ToolsRtaSetScopeV2Request): Promise<ToolsRtaSetScopeV2Response> {
    const response = await this.openApi2ToolsRtaSetScopePostWithHttpInfo(toolsRtaSetScopeV2Request);
    return response.data;
  }

  async openApi2ToolsRtaSetScopePostWithHttpInfo(toolsRtaSetScopeV2Request: ToolsRtaSetScopeV2Request): Promise<ApiResponse<ToolsRtaSetScopeV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsRtaSetScopeV2Response>({
      method: "POST",
      path: "/open_api/2/tools/rta/set_scope/",
      queryParams: [

      ],
      body: toolsRtaSetScopeV2Request
    });
  }
}


