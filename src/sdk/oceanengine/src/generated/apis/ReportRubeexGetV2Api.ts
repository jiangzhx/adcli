// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ReportRubeexGetV2Filtering, ReportRubeexGetV2Order, ReportRubeexGetV2Response } from "../models";


export class ReportRubeexGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ReportRubeexGetGet(advertiserId: number, dimensions: string[], filtering: ReportRubeexGetV2Filtering, metrics: string[], order: ReportRubeexGetV2Order, page: number, pageSize: number, projectId: number, statTimeDay: string[]): Promise<ReportRubeexGetV2Response> {
    const response = await this.openApi2ReportRubeexGetGetWithHttpInfo(advertiserId, dimensions, filtering, metrics, order, page, pageSize, projectId, statTimeDay);
    return response.data;
  }

  async openApi2ReportRubeexGetGetWithHttpInfo(advertiserId: number, dimensions: string[], filtering: ReportRubeexGetV2Filtering, metrics: string[], order: ReportRubeexGetV2Order, page: number, pageSize: number, projectId: number, statTimeDay: string[]): Promise<ApiResponse<ReportRubeexGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ReportRubeexGetV2Response>({
      method: "GET",
      path: "/open_api/2/report/rubeex/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "order", value: order },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "project_id", value: projectId },
        { name: "dimensions", value: dimensions, collectionFormat: "multi" },
        { name: "metrics", value: metrics, collectionFormat: "multi" },
        { name: "stat_time_day", value: statTimeDay, collectionFormat: "multi" }
      ]
    });
  }
}


