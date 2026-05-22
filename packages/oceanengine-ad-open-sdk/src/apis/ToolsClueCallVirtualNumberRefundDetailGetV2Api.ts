// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsClueCallVirtualNumberRefundDetailGetV2Response } from "../models";


export class ToolsClueCallVirtualNumberRefundDetailGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueCallVirtualNumberRefundDetailGetGet(advertiserId: number, month: string, page: number, pageSize: number): Promise<ToolsClueCallVirtualNumberRefundDetailGetV2Response> {
    const response = await this.openApi2ToolsClueCallVirtualNumberRefundDetailGetGetWithHttpInfo(advertiserId, month, page, pageSize);
    return response.data;
  }

  async openApi2ToolsClueCallVirtualNumberRefundDetailGetGetWithHttpInfo(advertiserId: number, month: string, page: number, pageSize: number): Promise<ApiResponse<ToolsClueCallVirtualNumberRefundDetailGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsClueCallVirtualNumberRefundDetailGetGet");
    }

    if (month == null) {
      throw new ApiException("Missing the required parameter 'month' when calling openApi2ToolsClueCallVirtualNumberRefundDetailGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsClueCallVirtualNumberRefundDetailGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/clue/call_virtual_number/refund_detail/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "month", value: month },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


