// Generated from oceanengine/ad_open_sdk_go api/api_report_rta_cus_exp_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ReportRtaCusExpGetV2Response } from "../models/index";


export interface ReportRtaCusExpGetV2ApiOpenApi2ReportRtaCusExpGetGetRequest {
  advertiserId: number | string;
  rtaInterfaceId: number | string;
  rtaId: number | string;
  rtaVid: string;
  startTime: string;
  endTime: string;
}

export class ReportRtaCusExpGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ReportRtaCusExpGetGet(request: ReportRtaCusExpGetV2ApiOpenApi2ReportRtaCusExpGetGetRequest): Promise<ReportRtaCusExpGetV2Response> {
    const response = await this.openApi2ReportRtaCusExpGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ReportRtaCusExpGetGetWithHttpInfo(request: ReportRtaCusExpGetV2ApiOpenApi2ReportRtaCusExpGetGetRequest): Promise<ApiResponse<ReportRtaCusExpGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ReportRtaCusExpGetGet");
    }

    if (request.rtaInterfaceId == null) {
      throw new ApiException("Missing the required parameter 'rtaInterfaceId' when calling openApi2ReportRtaCusExpGetGet");
    }

    if (request.rtaId == null) {
      throw new ApiException("Missing the required parameter 'rtaId' when calling openApi2ReportRtaCusExpGetGet");
    }

    if (request.rtaVid == null) {
      throw new ApiException("Missing the required parameter 'rtaVid' when calling openApi2ReportRtaCusExpGetGet");
    }

    if (request.startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApi2ReportRtaCusExpGetGet");
    }

    if (request.endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApi2ReportRtaCusExpGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportRtaCusExpGetV2Response>({
      method: "GET",
      path: "/open_api/2/report/rta_cus_exp/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "rta_interface_id", value: request.rtaInterfaceId },
        { name: "rta_id", value: request.rtaId },
        { name: "rta_vid", value: request.rtaVid },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime }
      ]
    });
  }
}


