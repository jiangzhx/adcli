// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsClueRefundDetailGetV2Response } from "../models";


export class ToolsClueRefundDetailGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueRefundDetailGetGet(advertiserId: number, month: string, page: number, pageSize: number): Promise<ToolsClueRefundDetailGetV2Response> {
    const response = await this.openApi2ToolsClueRefundDetailGetGetWithHttpInfo(advertiserId, month, page, pageSize);
    return response.data;
  }

  async openApi2ToolsClueRefundDetailGetGetWithHttpInfo(advertiserId: number, month: string, page: number, pageSize: number): Promise<ApiResponse<ToolsClueRefundDetailGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsClueRefundDetailGetGet");
    }

    if (month == null) {
      throw new ApiException("Missing the required parameter 'month' when calling openApi2ToolsClueRefundDetailGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsClueRefundDetailGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/clue/refund_detail/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "month", value: month },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


