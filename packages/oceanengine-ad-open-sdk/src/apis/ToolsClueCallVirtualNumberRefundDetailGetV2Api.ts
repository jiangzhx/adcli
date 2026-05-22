// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsClueCallVirtualNumberRefundDetailGetV2Response } from "../models";


export interface OpenApi2ToolsClueCallVirtualNumberRefundDetailGetGetRequest {
  advertiserId: number;
  month: string;
  page?: number;
  pageSize?: number;
}

export class ToolsClueCallVirtualNumberRefundDetailGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueCallVirtualNumberRefundDetailGetGet(request: OpenApi2ToolsClueCallVirtualNumberRefundDetailGetGetRequest): Promise<ToolsClueCallVirtualNumberRefundDetailGetV2Response> {
    const response = await this.openApi2ToolsClueCallVirtualNumberRefundDetailGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueCallVirtualNumberRefundDetailGetGetWithHttpInfo(request: OpenApi2ToolsClueCallVirtualNumberRefundDetailGetGetRequest): Promise<ApiResponse<ToolsClueCallVirtualNumberRefundDetailGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsClueCallVirtualNumberRefundDetailGetGet");
    }

    if (request.month == null) {
      throw new ApiException("Missing the required parameter 'month' when calling openApi2ToolsClueCallVirtualNumberRefundDetailGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsClueCallVirtualNumberRefundDetailGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/clue/call_virtual_number/refund_detail/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "month", value: request.month },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


