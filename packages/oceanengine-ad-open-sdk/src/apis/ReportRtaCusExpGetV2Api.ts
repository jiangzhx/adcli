// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportRtaCusExpGetV2Response } from "../models";


export class ReportRtaCusExpGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ReportRtaCusExpGetGet(advertiserId: number, rtaInterfaceId: number, rtaId: number, rtaVid: string, startTime: string, endTime: string): Promise<ReportRtaCusExpGetV2Response> {
    const response = await this.openApi2ReportRtaCusExpGetGetWithHttpInfo(advertiserId, rtaInterfaceId, rtaId, rtaVid, startTime, endTime);
    return response.data;
  }

  async openApi2ReportRtaCusExpGetGetWithHttpInfo(advertiserId: number, rtaInterfaceId: number, rtaId: number, rtaVid: string, startTime: string, endTime: string): Promise<ApiResponse<ReportRtaCusExpGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ReportRtaCusExpGetGet");
    }

    if (rtaInterfaceId == null) {
      throw new ApiException("Missing the required parameter 'rtaInterfaceId' when calling openApi2ReportRtaCusExpGetGet");
    }

    if (rtaId == null) {
      throw new ApiException("Missing the required parameter 'rtaId' when calling openApi2ReportRtaCusExpGetGet");
    }

    if (rtaVid == null) {
      throw new ApiException("Missing the required parameter 'rtaVid' when calling openApi2ReportRtaCusExpGetGet");
    }

    if (startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApi2ReportRtaCusExpGetGet");
    }

    if (endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApi2ReportRtaCusExpGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportRtaCusExpGetV2Response>({
      method: "GET",
      path: "/open_api/2/report/rta_cus_exp/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "rta_interface_id", value: rtaInterfaceId },
        { name: "rta_id", value: rtaId },
        { name: "rta_vid", value: rtaVid },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime }
      ]
    });
  }
}


