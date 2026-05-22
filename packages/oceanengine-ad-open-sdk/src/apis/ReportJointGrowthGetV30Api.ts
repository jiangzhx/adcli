// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportJointGrowthGetV30Response } from "../models";


export class ReportJointGrowthGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportJointGrowthGetGet(advertiserId: number, rtaId: number, startTime: string, endTime: string, page: number, pageSize: number): Promise<ReportJointGrowthGetV30Response> {
    const response = await this.openApiV30ReportJointGrowthGetGetWithHttpInfo(advertiserId, rtaId, startTime, endTime, page, pageSize);
    return response.data;
  }

  async openApiV30ReportJointGrowthGetGetWithHttpInfo(advertiserId: number, rtaId: number, startTime: string, endTime: string, page: number, pageSize: number): Promise<ApiResponse<ReportJointGrowthGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportJointGrowthGetGet");
    }

    if (rtaId == null) {
      throw new ApiException("Missing the required parameter 'rtaId' when calling openApiV30ReportJointGrowthGetGet");
    }

    if (startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV30ReportJointGrowthGetGet");
    }

    if (endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV30ReportJointGrowthGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportJointGrowthGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/joint_growth/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "rta_id", value: rtaId },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


