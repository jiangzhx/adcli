// Generated from oceanengine/ad_open_sdk_go api/api_tools_clue_refund_detail_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsClueRefundDetailGetV2Response } from "../models/index";


export interface ToolsClueRefundDetailGetV2ApiOpenApi2ToolsClueRefundDetailGetGetRequest {
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

  async openApi2ToolsClueRefundDetailGetGet(request: ToolsClueRefundDetailGetV2ApiOpenApi2ToolsClueRefundDetailGetGetRequest): Promise<ToolsClueRefundDetailGetV2Response> {
    const response = await this.openApi2ToolsClueRefundDetailGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueRefundDetailGetGetWithHttpInfo(request: ToolsClueRefundDetailGetV2ApiOpenApi2ToolsClueRefundDetailGetGetRequest): Promise<ApiResponse<ToolsClueRefundDetailGetV2Response>> {
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


