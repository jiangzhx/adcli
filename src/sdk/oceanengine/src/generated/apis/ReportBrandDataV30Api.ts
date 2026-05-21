// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ReportBrandDataV30DataReportType, ReportBrandDataV30Filter, ReportBrandDataV30Page, ReportBrandDataV30PageType, ReportBrandDataV30Response, ReportBrandDataV30TimeDimension } from "../models";


export class ReportBrandDataV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportBrandDataGet(advertiserId: number, dataReportType: ReportBrandDataV30DataReportType, startTime: string, endTime: string, timeDimension: ReportBrandDataV30TimeDimension, pageType: ReportBrandDataV30PageType, filter: ReportBrandDataV30Filter, metrics: string[], page: ReportBrandDataV30Page): Promise<ReportBrandDataV30Response> {
    const response = await this.openApiV30ReportBrandDataGetWithHttpInfo(advertiserId, dataReportType, startTime, endTime, timeDimension, pageType, filter, metrics, page);
    return response.data;
  }

  async openApiV30ReportBrandDataGetWithHttpInfo(advertiserId: number, dataReportType: ReportBrandDataV30DataReportType, startTime: string, endTime: string, timeDimension: ReportBrandDataV30TimeDimension, pageType: ReportBrandDataV30PageType, filter: ReportBrandDataV30Filter, metrics: string[], page: ReportBrandDataV30Page): Promise<ApiResponse<ReportBrandDataV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportBrandDataGet");
    }

    if (dataReportType == null) {
      throw new ApiException("Missing the required parameter 'dataReportType' when calling openApiV30ReportBrandDataGet");
    }

    if (startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV30ReportBrandDataGet");
    }

    if (endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV30ReportBrandDataGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportBrandDataV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/brand/data/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "data_report_type", value: dataReportType },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "time_dimension", value: timeDimension },
        { name: "page_type", value: pageType },
        { name: "filter", value: filter },
        { name: "page", value: page },
        { name: "metrics", value: metrics, collectionFormat: "csv" }
      ]
    });
  }
}


