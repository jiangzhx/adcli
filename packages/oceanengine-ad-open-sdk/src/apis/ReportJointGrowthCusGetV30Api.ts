// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportJointGrowthCusGetV30Response } from "../models";


export class ReportJointGrowthCusGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportJointGrowthCusGetGet(advertiserId: number, rtaId: number, startTime: string, endTime: string, page: number, pageSize: number): Promise<ReportJointGrowthCusGetV30Response> {
    const response = await this.openApiV30ReportJointGrowthCusGetGetWithHttpInfo(advertiserId, rtaId, startTime, endTime, page, pageSize);
    return response.data;
  }

  async openApiV30ReportJointGrowthCusGetGetWithHttpInfo(advertiserId: number, rtaId: number, startTime: string, endTime: string, page: number, pageSize: number): Promise<ApiResponse<ReportJointGrowthCusGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportJointGrowthCusGetGet");
    }

    if (rtaId == null) {
      throw new ApiException("Missing the required parameter 'rtaId' when calling openApiV30ReportJointGrowthCusGetGet");
    }

    if (startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV30ReportJointGrowthCusGetGet");
    }

    if (endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV30ReportJointGrowthCusGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportJointGrowthCusGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/joint_growth_cus/get/",
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


