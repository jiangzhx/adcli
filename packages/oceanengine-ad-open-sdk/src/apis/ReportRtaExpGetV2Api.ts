// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportRtaExpGetV2Response } from "../models";


export class ReportRtaExpGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ReportRtaExpGetGet(advertiserId: number, rtaId: number, startDate: string, endDate: string, strategy: number): Promise<ReportRtaExpGetV2Response> {
    const response = await this.openApi2ReportRtaExpGetGetWithHttpInfo(advertiserId, rtaId, startDate, endDate, strategy);
    return response.data;
  }

  async openApi2ReportRtaExpGetGetWithHttpInfo(advertiserId: number, rtaId: number, startDate: string, endDate: string, strategy: number): Promise<ApiResponse<ReportRtaExpGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ReportRtaExpGetGet");
    }

    if (rtaId == null) {
      throw new ApiException("Missing the required parameter 'rtaId' when calling openApi2ReportRtaExpGetGet");
    }

    if (startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApi2ReportRtaExpGetGet");
    }

    if (endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApi2ReportRtaExpGetGet");
    }

    if (strategy == null) {
      throw new ApiException("Missing the required parameter 'strategy' when calling openApi2ReportRtaExpGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportRtaExpGetV2Response>({
      method: "GET",
      path: "/open_api/2/report/rta_exp/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "rta_id", value: rtaId },
        { name: "start_date", value: startDate },
        { name: "end_date", value: endDate },
        { name: "strategy", value: strategy }
      ]
    });
  }
}


