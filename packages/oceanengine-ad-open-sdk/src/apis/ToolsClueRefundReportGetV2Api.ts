// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsClueRefundReportGetV2Response } from "../models";


export interface OpenApi2ToolsClueRefundReportGetGetRequest {
  advertiserId: number;
  month: string;
}

export class ToolsClueRefundReportGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueRefundReportGetGet(request: OpenApi2ToolsClueRefundReportGetGetRequest): Promise<ToolsClueRefundReportGetV2Response> {
    const response = await this.openApi2ToolsClueRefundReportGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueRefundReportGetGetWithHttpInfo(request: OpenApi2ToolsClueRefundReportGetGetRequest): Promise<ApiResponse<ToolsClueRefundReportGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsClueRefundReportGetGet");
    }

    if (request.month == null) {
      throw new ApiException("Missing the required parameter 'month' when calling openApi2ToolsClueRefundReportGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsClueRefundReportGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/clue/refund_report/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "month", value: request.month }
      ]
    });
  }
}


