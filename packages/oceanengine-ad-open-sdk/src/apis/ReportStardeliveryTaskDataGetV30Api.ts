// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportStardeliveryTaskDataGetV30Filtering, ReportStardeliveryTaskDataGetV30OrderType, ReportStardeliveryTaskDataGetV30Response } from "../models";


export interface OpenApiV30ReportStardeliveryTaskDataGetGetRequest {
  advertiserId: number | string;
  startDate: string;
  endDate: string;
  starTaskVersion?: string;
  filtering?: ReportStardeliveryTaskDataGetV30Filtering;
  orderField?: string;
  orderType?: ReportStardeliveryTaskDataGetV30OrderType;
  page?: number;
  pageSize?: number;
}

export class ReportStardeliveryTaskDataGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportStardeliveryTaskDataGetGet(request: OpenApiV30ReportStardeliveryTaskDataGetGetRequest): Promise<ReportStardeliveryTaskDataGetV30Response> {
    const response = await this.openApiV30ReportStardeliveryTaskDataGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ReportStardeliveryTaskDataGetGetWithHttpInfo(request: OpenApiV30ReportStardeliveryTaskDataGetGetRequest): Promise<ApiResponse<ReportStardeliveryTaskDataGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportStardeliveryTaskDataGetGet");
    }

    if (request.startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV30ReportStardeliveryTaskDataGetGet");
    }

    if (request.endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV30ReportStardeliveryTaskDataGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportStardeliveryTaskDataGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/stardelivery/task_data/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "star_task_version", value: request.starTaskVersion },
        { name: "filtering", value: request.filtering },
        { name: "order_field", value: request.orderField },
        { name: "order_type", value: request.orderType },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


