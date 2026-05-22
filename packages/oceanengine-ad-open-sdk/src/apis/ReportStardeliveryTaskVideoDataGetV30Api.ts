// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportStardeliveryTaskVideoDataGetV30Filtering, ReportStardeliveryTaskVideoDataGetV30OrderType, ReportStardeliveryTaskVideoDataGetV30Response } from "../models";


export interface OpenApiV30ReportStardeliveryTaskVideoDataGetGetRequest {
  advertiserId: number;
  starTaskId: number;
  startDate: string;
  endDate: string;
  filtering?: ReportStardeliveryTaskVideoDataGetV30Filtering;
  orderField?: string;
  orderType?: ReportStardeliveryTaskVideoDataGetV30OrderType;
  page?: number;
  pageSize?: number;
}

export class ReportStardeliveryTaskVideoDataGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportStardeliveryTaskVideoDataGetGet(request: OpenApiV30ReportStardeliveryTaskVideoDataGetGetRequest): Promise<ReportStardeliveryTaskVideoDataGetV30Response> {
    const response = await this.openApiV30ReportStardeliveryTaskVideoDataGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ReportStardeliveryTaskVideoDataGetGetWithHttpInfo(request: OpenApiV30ReportStardeliveryTaskVideoDataGetGetRequest): Promise<ApiResponse<ReportStardeliveryTaskVideoDataGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportStardeliveryTaskVideoDataGetGet");
    }

    if (request.starTaskId == null) {
      throw new ApiException("Missing the required parameter 'starTaskId' when calling openApiV30ReportStardeliveryTaskVideoDataGetGet");
    }

    if (request.startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV30ReportStardeliveryTaskVideoDataGetGet");
    }

    if (request.endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV30ReportStardeliveryTaskVideoDataGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportStardeliveryTaskVideoDataGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/stardelivery/task_video_data/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "star_task_id", value: request.starTaskId },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "filtering", value: request.filtering },
        { name: "order_field", value: request.orderField },
        { name: "order_type", value: request.orderType },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


