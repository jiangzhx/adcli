// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsClueRefundViewGetV2Response } from "../models";


export class ToolsClueRefundViewGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueRefundViewGetGet(advertiserId: number, clueId: number): Promise<ToolsClueRefundViewGetV2Response> {
    const response = await this.openApi2ToolsClueRefundViewGetGetWithHttpInfo(advertiserId, clueId);
    return response.data;
  }

  async openApi2ToolsClueRefundViewGetGetWithHttpInfo(advertiserId: number, clueId: number): Promise<ApiResponse<ToolsClueRefundViewGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsClueRefundViewGetGet");
    }

    if (clueId == null) {
      throw new ApiException("Missing the required parameter 'clueId' when calling openApi2ToolsClueRefundViewGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsClueRefundViewGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/clue/refund_view/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "clue_id", value: clueId }
      ]
    });
  }
}


