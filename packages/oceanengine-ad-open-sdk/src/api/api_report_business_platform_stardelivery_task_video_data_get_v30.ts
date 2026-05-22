// Generated from oceanengine/ad_open_sdk_go api/api_report_business_platform_stardelivery_task_video_data_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ReportBusinessPlatformStardeliveryTaskVideoDataGetV30Filtering, ReportBusinessPlatformStardeliveryTaskVideoDataGetV30OrderType, ReportBusinessPlatformStardeliveryTaskVideoDataGetV30Response } from "../models/index";


export interface ReportBusinessPlatformStardeliveryTaskVideoDataGetV30ApiOpenApiV30ReportBusinessPlatformStardeliveryTaskVideoDataGetGetRequest {
  organizationId: number | string;
  startDate: string;
  endDate: string;
  filtering?: ReportBusinessPlatformStardeliveryTaskVideoDataGetV30Filtering;
  orderField?: string;
  orderType?: ReportBusinessPlatformStardeliveryTaskVideoDataGetV30OrderType;
  page?: number;
  pageSize?: number;
}

export class ReportBusinessPlatformStardeliveryTaskVideoDataGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportBusinessPlatformStardeliveryTaskVideoDataGetGet(request: ReportBusinessPlatformStardeliveryTaskVideoDataGetV30ApiOpenApiV30ReportBusinessPlatformStardeliveryTaskVideoDataGetGetRequest): Promise<ReportBusinessPlatformStardeliveryTaskVideoDataGetV30Response> {
    const response = await this.openApiV30ReportBusinessPlatformStardeliveryTaskVideoDataGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ReportBusinessPlatformStardeliveryTaskVideoDataGetGetWithHttpInfo(request: ReportBusinessPlatformStardeliveryTaskVideoDataGetV30ApiOpenApiV30ReportBusinessPlatformStardeliveryTaskVideoDataGetGetRequest): Promise<ApiResponse<ReportBusinessPlatformStardeliveryTaskVideoDataGetV30Response>> {
    if (request.organizationId == null) {
      throw new ApiException("organizationId is required and must be specified");
    }

    if (request.startDate == null) {
      throw new ApiException("startDate is required and must be specified");
    }

    if (request.endDate == null) {
      throw new ApiException("endDate is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ReportBusinessPlatformStardeliveryTaskVideoDataGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/business_platform/stardelivery/task_video_data/get/",
      queryParams: [
        { name: "organization_id", value: request.organizationId },
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


