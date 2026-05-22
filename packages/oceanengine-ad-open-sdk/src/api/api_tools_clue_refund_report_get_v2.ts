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
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) < 1) {
      throw new ApiException("advertiserId must be greater than 1");
    }

    if (request.month == null) {
      throw new ApiException("month is required and must be specified");
    }

    if (request.month != null && Array.from(String(request.month)).length < 6) {
      throw new ApiException("month must have at least 6 elements");
    }

    if (request.month != null && Array.from(String(request.month)).length > 6) {
      throw new ApiException("month must have less than 6 elements");
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


