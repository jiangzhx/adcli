// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ReportBusinessPlatformStardeliveryTaskVideoDataGetV30Filtering, ReportBusinessPlatformStardeliveryTaskVideoDataGetV30OrderType, ReportBusinessPlatformStardeliveryTaskVideoDataGetV30Response } from "../models";


export class ReportBusinessPlatformStardeliveryTaskVideoDataGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportBusinessPlatformStardeliveryTaskVideoDataGetGet(organizationId: number, startDate: string, endDate: string, filtering: ReportBusinessPlatformStardeliveryTaskVideoDataGetV30Filtering, orderField: string, orderType: ReportBusinessPlatformStardeliveryTaskVideoDataGetV30OrderType, page: number, pageSize: number): Promise<ReportBusinessPlatformStardeliveryTaskVideoDataGetV30Response> {
    const response = await this.openApiV30ReportBusinessPlatformStardeliveryTaskVideoDataGetGetWithHttpInfo(organizationId, startDate, endDate, filtering, orderField, orderType, page, pageSize);
    return response.data;
  }

  async openApiV30ReportBusinessPlatformStardeliveryTaskVideoDataGetGetWithHttpInfo(organizationId: number, startDate: string, endDate: string, filtering: ReportBusinessPlatformStardeliveryTaskVideoDataGetV30Filtering, orderField: string, orderType: ReportBusinessPlatformStardeliveryTaskVideoDataGetV30OrderType, page: number, pageSize: number): Promise<ApiResponse<ReportBusinessPlatformStardeliveryTaskVideoDataGetV30Response>> {
    if (organizationId == null) {
      throw new ApiException("Missing the required parameter 'organizationId' when calling openApiV30ReportBusinessPlatformStardeliveryTaskVideoDataGetGet");
    }

    if (startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV30ReportBusinessPlatformStardeliveryTaskVideoDataGetGet");
    }

    if (endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV30ReportBusinessPlatformStardeliveryTaskVideoDataGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportBusinessPlatformStardeliveryTaskVideoDataGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/business_platform/stardelivery/task_video_data/get/",
      queryParams: [
        { name: "organization_id", value: organizationId },
        { name: "start_date", value: startDate },
        { name: "end_date", value: endDate },
        { name: "filtering", value: filtering },
        { name: "order_field", value: orderField },
        { name: "order_type", value: orderType },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


