// Generated from oceanengine/ad_open_sdk_go api/api_tools_clue_call_virtual_number_refund_detail_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsClueCallVirtualNumberRefundDetailGetV2Response } from "../models/index";


export interface ToolsClueCallVirtualNumberRefundDetailGetV2ApiOpenApi2ToolsClueCallVirtualNumberRefundDetailGetGetRequest {
  advertiserId: number | string;
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

  async openApi2ToolsClueCallVirtualNumberRefundDetailGetGet(request: ToolsClueCallVirtualNumberRefundDetailGetV2ApiOpenApi2ToolsClueCallVirtualNumberRefundDetailGetGetRequest): Promise<ToolsClueCallVirtualNumberRefundDetailGetV2Response> {
    const response = await this.openApi2ToolsClueCallVirtualNumberRefundDetailGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueCallVirtualNumberRefundDetailGetGetWithHttpInfo(request: ToolsClueCallVirtualNumberRefundDetailGetV2ApiOpenApi2ToolsClueCallVirtualNumberRefundDetailGetGetRequest): Promise<ApiResponse<ToolsClueCallVirtualNumberRefundDetailGetV2Response>> {
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


