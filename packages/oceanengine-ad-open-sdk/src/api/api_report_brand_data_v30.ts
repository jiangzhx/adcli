// Generated from oceanengine/ad_open_sdk_go api/api_report_brand_data_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ReportBrandDataV30DataReportType, ReportBrandDataV30Filter, ReportBrandDataV30Page, ReportBrandDataV30PageType, ReportBrandDataV30Response, ReportBrandDataV30TimeDimension } from "../models/index";


export interface ReportBrandDataV30ApiOpenApiV30ReportBrandDataGetRequest {
  advertiserId: number | string;
  dataReportType: ReportBrandDataV30DataReportType;
  startTime: string;
  endTime: string;
  timeDimension?: ReportBrandDataV30TimeDimension;
  pageType?: ReportBrandDataV30PageType;
  filter?: ReportBrandDataV30Filter;
  metrics?: string[];
  page?: ReportBrandDataV30Page;
}

export class ReportBrandDataV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportBrandDataGet(request: ReportBrandDataV30ApiOpenApiV30ReportBrandDataGetRequest): Promise<ReportBrandDataV30Response> {
    const response = await this.openApiV30ReportBrandDataGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ReportBrandDataGetWithHttpInfo(request: ReportBrandDataV30ApiOpenApiV30ReportBrandDataGetRequest): Promise<ApiResponse<ReportBrandDataV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportBrandDataGet");
    }

    if (request.dataReportType == null) {
      throw new ApiException("Missing the required parameter 'dataReportType' when calling openApiV30ReportBrandDataGet");
    }

    if (request.startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV30ReportBrandDataGet");
    }

    if (request.endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV30ReportBrandDataGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportBrandDataV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/brand/data/",
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


