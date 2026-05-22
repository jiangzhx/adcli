// Generated from oceanengine/ad_open_sdk_go api/api_report_joint_growth_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ReportJointGrowthGetV30Response } from "../models/index";


export interface ReportJointGrowthGetV30ApiOpenApiV30ReportJointGrowthGetGetRequest {
  advertiserId: number | string;
  rtaId: number | string;
  startTime: string;
  endTime: string;
  page?: number;
  pageSize?: number;
}

export class ReportJointGrowthGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportJointGrowthGetGet(request: ReportJointGrowthGetV30ApiOpenApiV30ReportJointGrowthGetGetRequest): Promise<ReportJointGrowthGetV30Response> {
    const response = await this.openApiV30ReportJointGrowthGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ReportJointGrowthGetGetWithHttpInfo(request: ReportJointGrowthGetV30ApiOpenApiV30ReportJointGrowthGetGetRequest): Promise<ApiResponse<ReportJointGrowthGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.rtaId == null) {
      throw new ApiException("rtaId is required and must be specified");
    }

    if (request.startTime == null) {
      throw new ApiException("startTime is required and must be specified");
    }

    if (request.endTime == null) {
      throw new ApiException("endTime is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ReportJointGrowthGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/joint_growth/get/",
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


