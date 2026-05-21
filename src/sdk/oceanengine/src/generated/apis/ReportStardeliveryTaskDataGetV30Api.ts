// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ReportStardeliveryTaskDataGetV30Filtering, ReportStardeliveryTaskDataGetV30OrderType, ReportStardeliveryTaskDataGetV30Response } from "../models";


export class ReportStardeliveryTaskDataGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportStardeliveryTaskDataGetGet(advertiserId: number, startDate: string, endDate: string, starTaskVersion: string, filtering: ReportStardeliveryTaskDataGetV30Filtering, orderField: string, orderType: ReportStardeliveryTaskDataGetV30OrderType, page: number, pageSize: number): Promise<ReportStardeliveryTaskDataGetV30Response> {
    const response = await this.openApiV30ReportStardeliveryTaskDataGetGetWithHttpInfo(advertiserId, startDate, endDate, starTaskVersion, filtering, orderField, orderType, page, pageSize);
    return response.data;
  }

  async openApiV30ReportStardeliveryTaskDataGetGetWithHttpInfo(advertiserId: number, startDate: string, endDate: string, starTaskVersion: string, filtering: ReportStardeliveryTaskDataGetV30Filtering, orderField: string, orderType: ReportStardeliveryTaskDataGetV30OrderType, page: number, pageSize: number): Promise<ApiResponse<ReportStardeliveryTaskDataGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportStardeliveryTaskDataGetGet");
    }

    if (startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV30ReportStardeliveryTaskDataGetGet");
    }

    if (endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV30ReportStardeliveryTaskDataGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportStardeliveryTaskDataGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/stardelivery/task_data/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "start_date", value: startDate },
        { name: "end_date", value: endDate },
        { name: "star_task_version", value: starTaskVersion },
        { name: "filtering", value: filtering },
        { name: "order_field", value: orderField },
        { name: "order_type", value: orderType },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


