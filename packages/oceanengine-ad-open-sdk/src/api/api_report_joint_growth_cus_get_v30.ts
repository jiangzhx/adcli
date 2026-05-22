// Generated from oceanengine/ad_open_sdk_go api/api_report_joint_growth_cus_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ReportJointGrowthCusGetV30Response } from "../models/index";


export interface ReportJointGrowthCusGetV30ApiOpenApiV30ReportJointGrowthCusGetGetRequest {
  advertiserId: number | string;
  rtaId: number | string;
  startTime: string;
  endTime: string;
  page?: number;
  pageSize?: number;
}

export class ReportJointGrowthCusGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportJointGrowthCusGetGet(request: ReportJointGrowthCusGetV30ApiOpenApiV30ReportJointGrowthCusGetGetRequest): Promise<ReportJointGrowthCusGetV30Response> {
    const response = await this.openApiV30ReportJointGrowthCusGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ReportJointGrowthCusGetGetWithHttpInfo(request: ReportJointGrowthCusGetV30ApiOpenApiV30ReportJointGrowthCusGetGetRequest): Promise<ApiResponse<ReportJointGrowthCusGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportJointGrowthCusGetGet");
    }

    if (request.rtaId == null) {
      throw new ApiException("Missing the required parameter 'rtaId' when calling openApiV30ReportJointGrowthCusGetGet");
    }

    if (request.startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV30ReportJointGrowthCusGetGet");
    }

    if (request.endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV30ReportJointGrowthCusGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportJointGrowthCusGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/joint_growth_cus/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "rta_id", value: request.rtaId },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


