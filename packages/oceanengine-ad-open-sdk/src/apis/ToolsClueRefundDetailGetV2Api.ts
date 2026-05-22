// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsClueRefundDetailGetV2Response } from "../models";


export interface OpenApi2ToolsClueRefundDetailGetGetRequest {
  advertiserId: number | string;
  month: string;
  page?: number;
  pageSize?: number;
}

export class ToolsClueRefundDetailGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueRefundDetailGetGet(request: OpenApi2ToolsClueRefundDetailGetGetRequest): Promise<ToolsClueRefundDetailGetV2Response> {
    const response = await this.openApi2ToolsClueRefundDetailGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueRefundDetailGetGetWithHttpInfo(request: OpenApi2ToolsClueRefundDetailGetGetRequest): Promise<ApiResponse<ToolsClueRefundDetailGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsClueRefundDetailGetGet");
    }

    if (request.month == null) {
      throw new ApiException("Missing the required parameter 'month' when calling openApi2ToolsClueRefundDetailGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsClueRefundDetailGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/clue/refund_detail/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "month", value: request.month },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


