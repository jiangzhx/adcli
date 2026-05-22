// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportRtaExpLocalHourlyGetV30Response } from "../models";


export interface OpenApiV30ReportRtaExpLocalHourlyGetGetRequest {
  rtaId: number;
  advertiserId: number;
  startDate: string;
  endDate: string;
  vid?: number;
  cusVid?: number;
}

export class ReportRtaExpLocalHourlyGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportRtaExpLocalHourlyGetGet(request: OpenApiV30ReportRtaExpLocalHourlyGetGetRequest): Promise<ReportRtaExpLocalHourlyGetV30Response> {
    const response = await this.openApiV30ReportRtaExpLocalHourlyGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ReportRtaExpLocalHourlyGetGetWithHttpInfo(request: OpenApiV30ReportRtaExpLocalHourlyGetGetRequest): Promise<ApiResponse<ReportRtaExpLocalHourlyGetV30Response>> {
    if (request.rtaId == null) {
      throw new ApiException("Missing the required parameter 'rtaId' when calling openApiV30ReportRtaExpLocalHourlyGetGet");
    }

    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportRtaExpLocalHourlyGetGet");
    }

    if (request.startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV30ReportRtaExpLocalHourlyGetGet");
    }

    if (request.endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV30ReportRtaExpLocalHourlyGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportRtaExpLocalHourlyGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/rta_exp_local_hourly/get/",
      queryParams: [
        { name: "rta_id", value: request.rtaId },
        { name: "advertiser_id", value: request.advertiserId },
        { name: "vid", value: request.vid },
        { name: "cus_vid", value: request.cusVid },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate }
      ]
    });
  }
}


