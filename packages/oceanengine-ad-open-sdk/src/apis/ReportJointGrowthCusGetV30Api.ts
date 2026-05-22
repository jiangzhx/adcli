// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportJointGrowthCusGetV30Response } from "../models";


export interface OpenApiV30ReportJointGrowthCusGetGetRequest {
  advertiserId: number;
  rtaId: number;
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

  async openApiV30ReportJointGrowthCusGetGet(request: OpenApiV30ReportJointGrowthCusGetGetRequest): Promise<ReportJointGrowthCusGetV30Response> {
    const response = await this.openApiV30ReportJointGrowthCusGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ReportJointGrowthCusGetGetWithHttpInfo(request: OpenApiV30ReportJointGrowthCusGetGetRequest): Promise<ApiResponse<ReportJointGrowthCusGetV30Response>> {
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


