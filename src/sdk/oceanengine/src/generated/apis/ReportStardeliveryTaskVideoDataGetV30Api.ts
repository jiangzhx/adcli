// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ReportStardeliveryTaskVideoDataGetV30Filtering, ReportStardeliveryTaskVideoDataGetV30OrderType, ReportStardeliveryTaskVideoDataGetV30Response } from "../models";


export class ReportStardeliveryTaskVideoDataGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportStardeliveryTaskVideoDataGetGet(advertiserId: number, starTaskId: number, startDate: string, endDate: string, filtering: ReportStardeliveryTaskVideoDataGetV30Filtering, orderField: string, orderType: ReportStardeliveryTaskVideoDataGetV30OrderType, page: number, pageSize: number): Promise<ReportStardeliveryTaskVideoDataGetV30Response> {
    const response = await this.openApiV30ReportStardeliveryTaskVideoDataGetGetWithHttpInfo(advertiserId, starTaskId, startDate, endDate, filtering, orderField, orderType, page, pageSize);
    return response.data;
  }

  async openApiV30ReportStardeliveryTaskVideoDataGetGetWithHttpInfo(advertiserId: number, starTaskId: number, startDate: string, endDate: string, filtering: ReportStardeliveryTaskVideoDataGetV30Filtering, orderField: string, orderType: ReportStardeliveryTaskVideoDataGetV30OrderType, page: number, pageSize: number): Promise<ApiResponse<ReportStardeliveryTaskVideoDataGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportStardeliveryTaskVideoDataGetGet");
    }

    if (starTaskId == null) {
      throw new ApiException("Missing the required parameter 'starTaskId' when calling openApiV30ReportStardeliveryTaskVideoDataGetGet");
    }

    if (startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV30ReportStardeliveryTaskVideoDataGetGet");
    }

    if (endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV30ReportStardeliveryTaskVideoDataGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportStardeliveryTaskVideoDataGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/stardelivery/task_video_data/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "star_task_id", value: starTaskId },
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


