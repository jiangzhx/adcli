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
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.rtaInterfaceId == null) {
      throw new ApiException("rtaInterfaceId is required and must be specified");
    }

    if (request.rtaId == null) {
      throw new ApiException("rtaId is required and must be specified");
    }

    if (request.rtaVid == null) {
      throw new ApiException("rtaVid is required and must be specified");
    }

    if (request.startTime == null) {
      throw new ApiException("startTime is required and must be specified");
    }

    if (request.endTime == null) {
      throw new ApiException("endTime is required and must be specified");
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


