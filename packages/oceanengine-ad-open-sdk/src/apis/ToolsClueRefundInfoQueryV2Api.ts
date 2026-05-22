// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsClueRefundInfoQueryV2Request, ToolsClueRefundInfoQueryV2Response } from "../models";


export class ToolsClueRefundInfoQueryV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueRefundInfoQueryPost(toolsClueRefundInfoQueryV2Request: ToolsClueRefundInfoQueryV2Request): Promise<ToolsClueRefundInfoQueryV2Response> {
    const response = await this.openApi2ToolsClueRefundInfoQueryPostWithHttpInfo(toolsClueRefundInfoQueryV2Request);
    return response.data;
  }

  async openApi2ToolsClueRefundInfoQueryPostWithHttpInfo(toolsClueRefundInfoQueryV2Request: ToolsClueRefundInfoQueryV2Request): Promise<ApiResponse<ToolsClueRefundInfoQueryV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsClueRefundInfoQueryV2Response>({
      method: "POST",
      path: "/open_api/2/tools/clue/refund/info/query/",
      queryParams: [

      ],
      body: toolsClueRefundInfoQueryV2Request
    });
  }
}


