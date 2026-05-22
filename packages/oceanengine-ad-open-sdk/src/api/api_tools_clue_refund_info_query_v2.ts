// Generated from oceanengine/ad_open_sdk_go api/api_tools_clue_refund_info_query_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsClueRefundInfoQueryV2Request, ToolsClueRefundInfoQueryV2Response } from "../models/index";


export interface ToolsClueRefundInfoQueryV2ApiOpenApi2ToolsClueRefundInfoQueryPostRequest {
  toolsClueRefundInfoQueryV2Request?: ToolsClueRefundInfoQueryV2Request;
}

export class ToolsClueRefundInfoQueryV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueRefundInfoQueryPost(request: ToolsClueRefundInfoQueryV2ApiOpenApi2ToolsClueRefundInfoQueryPostRequest): Promise<ToolsClueRefundInfoQueryV2Response> {
    const response = await this.openApi2ToolsClueRefundInfoQueryPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueRefundInfoQueryPostWithHttpInfo(request: ToolsClueRefundInfoQueryV2ApiOpenApi2ToolsClueRefundInfoQueryPostRequest): Promise<ApiResponse<ToolsClueRefundInfoQueryV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsClueRefundInfoQueryV2Response>({
      method: "POST",
      path: "/open_api/2/tools/clue/refund/info/query/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsClueRefundInfoQueryV2Request
    });
  }
}


