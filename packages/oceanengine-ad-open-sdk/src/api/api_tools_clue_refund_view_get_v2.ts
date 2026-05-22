// Generated from oceanengine/ad_open_sdk_go api/api_tools_clue_refund_view_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsClueRefundViewGetV2Response } from "../models/index";


export interface ToolsClueRefundViewGetV2ApiOpenApi2ToolsClueRefundViewGetGetRequest {
  advertiserId: number | string;
  clueId: number | string;
}

export class ToolsClueRefundViewGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueRefundViewGetGet(request: ToolsClueRefundViewGetV2ApiOpenApi2ToolsClueRefundViewGetGetRequest): Promise<ToolsClueRefundViewGetV2Response> {
    const response = await this.openApi2ToolsClueRefundViewGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueRefundViewGetGetWithHttpInfo(request: ToolsClueRefundViewGetV2ApiOpenApi2ToolsClueRefundViewGetGetRequest): Promise<ApiResponse<ToolsClueRefundViewGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsClueRefundViewGetGet");
    }

    if (request.clueId == null) {
      throw new ApiException("Missing the required parameter 'clueId' when calling openApi2ToolsClueRefundViewGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsClueRefundViewGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/clue/refund_view/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "clue_id", value: request.clueId }
      ]
    });
  }
}


