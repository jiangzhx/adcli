// Generated from oceanengine/ad_open_sdk_go api/api_report_rta_exp_local_daily_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ReportRtaExpLocalDailyGetV30Filtering, ReportRtaExpLocalDailyGetV30Response } from "../models/index";


export interface ReportRtaExpLocalDailyGetV30ApiOpenApiV30ReportRtaExpLocalDailyGetGetRequest {
  rtaId: number | string;
  advertiserId: number | string;
  startDate: string;
  endDate: string;
  vid?: number;
  cusVid?: number;
  filtering?: ReportRtaExpLocalDailyGetV30Filtering;
}

export class ReportRtaExpLocalDailyGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportRtaExpLocalDailyGetGet(request: ReportRtaExpLocalDailyGetV30ApiOpenApiV30ReportRtaExpLocalDailyGetGetRequest): Promise<ReportRtaExpLocalDailyGetV30Response> {
    const response = await this.openApiV30ReportRtaExpLocalDailyGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ReportRtaExpLocalDailyGetGetWithHttpInfo(request: ReportRtaExpLocalDailyGetV30ApiOpenApiV30ReportRtaExpLocalDailyGetGetRequest): Promise<ApiResponse<ReportRtaExpLocalDailyGetV30Response>> {
    if (request.rtaId == null) {
      throw new ApiException("rtaId is required and must be specified");
    }

    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.startDate == null) {
      throw new ApiException("startDate is required and must be specified");
    }

    if (request.endDate == null) {
      throw new ApiException("endDate is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ReportRtaExpLocalDailyGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/rta_exp_local_daily/get/",
      queryParams: [
        { name: "rta_id", value: request.rtaId },
        { name: "advertiser_id", value: request.advertiserId },
        { name: "vid", value: request.vid },
        { name: "cus_vid", value: request.cusVid },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "filtering", value: request.filtering }
      ]
    });
  }
}


