// Generated from oceanengine/ad_open_sdk_go api/api_report_rta_exp_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ReportRtaExpGetV2Response } from "../models/index";


export interface ReportRtaExpGetV2ApiOpenApi2ReportRtaExpGetGetRequest {
  advertiserId: number | string;
  rtaId: number | string;
  startDate: string;
  endDate: string;
  strategy: number;
}

export class ReportRtaExpGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ReportRtaExpGetGet(request: ReportRtaExpGetV2ApiOpenApi2ReportRtaExpGetGetRequest): Promise<ReportRtaExpGetV2Response> {
    const response = await this.openApi2ReportRtaExpGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ReportRtaExpGetGetWithHttpInfo(request: ReportRtaExpGetV2ApiOpenApi2ReportRtaExpGetGetRequest): Promise<ApiResponse<ReportRtaExpGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ReportRtaExpGetGet");
    }

    if (request.rtaId == null) {
      throw new ApiException("Missing the required parameter 'rtaId' when calling openApi2ReportRtaExpGetGet");
    }

    if (request.startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApi2ReportRtaExpGetGet");
    }

    if (request.endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApi2ReportRtaExpGetGet");
    }

    if (request.strategy == null) {
      throw new ApiException("Missing the required parameter 'strategy' when calling openApi2ReportRtaExpGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportRtaExpGetV2Response>({
      method: "GET",
      path: "/open_api/2/report/rta_exp/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "rta_id", value: request.rtaId },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "strategy", value: request.strategy }
      ]
    });
  }
}


