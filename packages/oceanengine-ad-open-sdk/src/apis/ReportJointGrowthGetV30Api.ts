// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportJointGrowthGetV30Response } from "../models";


export interface OpenApiV30ReportJointGrowthGetGetRequest {
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

  async openApiV30ReportJointGrowthGetGet(request: OpenApiV30ReportJointGrowthGetGetRequest): Promise<ReportJointGrowthGetV30Response> {
    const response = await this.openApiV30ReportJointGrowthGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ReportJointGrowthGetGetWithHttpInfo(request: OpenApiV30ReportJointGrowthGetGetRequest): Promise<ApiResponse<ReportJointGrowthGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportJointGrowthGetGet");
    }

    if (request.rtaId == null) {
      throw new ApiException("Missing the required parameter 'rtaId' when calling openApiV30ReportJointGrowthGetGet");
    }

    if (request.startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV30ReportJointGrowthGetGet");
    }

    if (request.endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV30ReportJointGrowthGetGet");
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


