// Generated from oceanengine/ad_open_sdk_go api/api_report_rubeex_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ReportRubeexGetV2Filtering, ReportRubeexGetV2Order, ReportRubeexGetV2Response } from "../models/index";


export interface ReportRubeexGetV2ApiOpenApi2ReportRubeexGetGetRequest {
  advertiserId?: number | string;
  dimensions?: string[];
  filtering?: ReportRubeexGetV2Filtering;
  metrics?: string[];
  order?: ReportRubeexGetV2Order;
  page?: number;
  pageSize?: number;
  projectId?: number | string;
  statTimeDay?: string[];
}

export class ReportRubeexGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ReportRubeexGetGet(request: ReportRubeexGetV2ApiOpenApi2ReportRubeexGetGetRequest): Promise<ReportRubeexGetV2Response> {
    const response = await this.openApi2ReportRubeexGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ReportRubeexGetGetWithHttpInfo(request: ReportRubeexGetV2ApiOpenApi2ReportRubeexGetGetRequest): Promise<ApiResponse<ReportRubeexGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ReportRubeexGetV2Response>({
      method: "GET",
      path: "/open_api/2/report/rubeex/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "dimensions", value: request.dimensions },
        { name: "filtering", value: request.filtering },
        { name: "metrics", value: request.metrics },
        { name: "order", value: request.order },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "project_id", value: request.projectId },
        { name: "stat_time_day", value: request.statTimeDay }
      ]
    });
  }
}


