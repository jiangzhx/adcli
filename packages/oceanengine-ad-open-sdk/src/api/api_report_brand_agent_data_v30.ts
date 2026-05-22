// Generated from oceanengine/ad_open_sdk_go api/api_report_brand_agent_data_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ReportBrandAgentDataV30DataReportType, ReportBrandAgentDataV30Filter, ReportBrandAgentDataV30Page, ReportBrandAgentDataV30PageType, ReportBrandAgentDataV30Response, ReportBrandAgentDataV30TimeDimension } from "../models/index";


export interface ReportBrandAgentDataV30ApiOpenApiV30ReportBrandAgentDataGetRequest {
  advertiserId: number | string;
  dataReportType: ReportBrandAgentDataV30DataReportType;
  startTime: string;
  endTime: string;
  timeDimension?: ReportBrandAgentDataV30TimeDimension;
  pageType?: ReportBrandAgentDataV30PageType;
  filter?: ReportBrandAgentDataV30Filter;
  metrics?: string[];
  page?: ReportBrandAgentDataV30Page;
}

export class ReportBrandAgentDataV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportBrandAgentDataGet(request: ReportBrandAgentDataV30ApiOpenApiV30ReportBrandAgentDataGetRequest): Promise<ReportBrandAgentDataV30Response> {
    const response = await this.openApiV30ReportBrandAgentDataGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ReportBrandAgentDataGetWithHttpInfo(request: ReportBrandAgentDataV30ApiOpenApiV30ReportBrandAgentDataGetRequest): Promise<ApiResponse<ReportBrandAgentDataV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportBrandAgentDataGet");
    }

    if (request.dataReportType == null) {
      throw new ApiException("Missing the required parameter 'dataReportType' when calling openApiV30ReportBrandAgentDataGet");
    }

    if (request.startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV30ReportBrandAgentDataGet");
    }

    if (request.endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV30ReportBrandAgentDataGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportBrandAgentDataV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/brand/agent/data/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "data_report_type", value: request.dataReportType },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "time_dimension", value: request.timeDimension },
        { name: "page_type", value: request.pageType },
        { name: "filter", value: request.filter },
        { name: "metrics", value: request.metrics },
        { name: "page", value: request.page }
      ]
    });
  }
}


