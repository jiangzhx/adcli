// Generated from oceanengine/ad_open_sdk_go api/api_tools_clue_refund_report_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsClueRefundReportGetV2Response } from "../models/index";


export interface ToolsClueRefundReportGetV2ApiOpenApi2ToolsClueRefundReportGetGetRequest {
  advertiserId: number | string;
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

  async openApi2ToolsClueRefundReportGetGet(request: ToolsClueRefundReportGetV2ApiOpenApi2ToolsClueRefundReportGetGetRequest): Promise<ToolsClueRefundReportGetV2Response> {
    const response = await this.openApi2ToolsClueRefundReportGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueRefundReportGetGetWithHttpInfo(request: ToolsClueRefundReportGetV2ApiOpenApi2ToolsClueRefundReportGetGetRequest): Promise<ApiResponse<ToolsClueRefundReportGetV2Response>> {
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


