// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ReportRtaExpLocalHourlyGetV30Response } from "../models";


export class ReportRtaExpLocalHourlyGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportRtaExpLocalHourlyGetGet(rtaId: number, advertiserId: number, startDate: string, endDate: string, vid: number, cusVid: number): Promise<ReportRtaExpLocalHourlyGetV30Response> {
    const response = await this.openApiV30ReportRtaExpLocalHourlyGetGetWithHttpInfo(rtaId, advertiserId, startDate, endDate, vid, cusVid);
    return response.data;
  }

  async openApiV30ReportRtaExpLocalHourlyGetGetWithHttpInfo(rtaId: number, advertiserId: number, startDate: string, endDate: string, vid: number, cusVid: number): Promise<ApiResponse<ReportRtaExpLocalHourlyGetV30Response>> {
    if (rtaId == null) {
      throw new ApiException("Missing the required parameter 'rtaId' when calling openApiV30ReportRtaExpLocalHourlyGetGet");
    }

    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportRtaExpLocalHourlyGetGet");
    }

    if (startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV30ReportRtaExpLocalHourlyGetGet");
    }

    if (endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV30ReportRtaExpLocalHourlyGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportRtaExpLocalHourlyGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/rta_exp_local_hourly/get/",
      queryParams: [
        { name: "rta_id", value: rtaId },
        { name: "advertiser_id", value: advertiserId },
        { name: "vid", value: vid },
        { name: "cus_vid", value: cusVid },
        { name: "start_date", value: startDate },
        { name: "end_date", value: endDate }
      ]
    });
  }
}


