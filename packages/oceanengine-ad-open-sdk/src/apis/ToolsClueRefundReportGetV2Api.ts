// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsClueRefundReportGetV2Response } from "../models";


export class ToolsClueRefundReportGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueRefundReportGetGet(advertiserId: number, month: string): Promise<ToolsClueRefundReportGetV2Response> {
    const response = await this.openApi2ToolsClueRefundReportGetGetWithHttpInfo(advertiserId, month);
    return response.data;
  }

  async openApi2ToolsClueRefundReportGetGetWithHttpInfo(advertiserId: number, month: string): Promise<ApiResponse<ToolsClueRefundReportGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsClueRefundReportGetGet");
    }

    if (month == null) {
      throw new ApiException("Missing the required parameter 'month' when calling openApi2ToolsClueRefundReportGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsClueRefundReportGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/clue/refund_report/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "month", value: month }
      ]
    });
  }
}


