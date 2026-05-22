// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportRtaExpLocalDailyGetV30Filtering, ReportRtaExpLocalDailyGetV30Response } from "../models";


export class ReportRtaExpLocalDailyGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportRtaExpLocalDailyGetGet(rtaId: number, advertiserId: number, startDate: string, endDate: string, vid: number, cusVid: number, filtering: ReportRtaExpLocalDailyGetV30Filtering): Promise<ReportRtaExpLocalDailyGetV30Response> {
    const response = await this.openApiV30ReportRtaExpLocalDailyGetGetWithHttpInfo(rtaId, advertiserId, startDate, endDate, vid, cusVid, filtering);
    return response.data;
  }

  async openApiV30ReportRtaExpLocalDailyGetGetWithHttpInfo(rtaId: number, advertiserId: number, startDate: string, endDate: string, vid: number, cusVid: number, filtering: ReportRtaExpLocalDailyGetV30Filtering): Promise<ApiResponse<ReportRtaExpLocalDailyGetV30Response>> {
    if (rtaId == null) {
      throw new ApiException("Missing the required parameter 'rtaId' when calling openApiV30ReportRtaExpLocalDailyGetGet");
    }

    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportRtaExpLocalDailyGetGet");
    }

    if (startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV30ReportRtaExpLocalDailyGetGet");
    }

    if (endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV30ReportRtaExpLocalDailyGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportRtaExpLocalDailyGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/rta_exp_local_daily/get/",
      queryParams: [
        { name: "rta_id", value: rtaId },
        { name: "advertiser_id", value: advertiserId },
        { name: "vid", value: vid },
        { name: "cus_vid", value: cusVid },
        { name: "start_date", value: startDate },
        { name: "end_date", value: endDate },
        { name: "filtering", value: filtering }
      ]
    });
  }
}


