// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportBrandAgentDataV30DataReportType, ReportBrandAgentDataV30Filter, ReportBrandAgentDataV30Page, ReportBrandAgentDataV30PageType, ReportBrandAgentDataV30Response, ReportBrandAgentDataV30TimeDimension } from "../models";


export class ReportBrandAgentDataV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportBrandAgentDataGet(advertiserId: number, dataReportType: ReportBrandAgentDataV30DataReportType, startTime: string, endTime: string, timeDimension: ReportBrandAgentDataV30TimeDimension, pageType: ReportBrandAgentDataV30PageType, filter: ReportBrandAgentDataV30Filter, metrics: string[], page: ReportBrandAgentDataV30Page): Promise<ReportBrandAgentDataV30Response> {
    const response = await this.openApiV30ReportBrandAgentDataGetWithHttpInfo(advertiserId, dataReportType, startTime, endTime, timeDimension, pageType, filter, metrics, page);
    return response.data;
  }

  async openApiV30ReportBrandAgentDataGetWithHttpInfo(advertiserId: number, dataReportType: ReportBrandAgentDataV30DataReportType, startTime: string, endTime: string, timeDimension: ReportBrandAgentDataV30TimeDimension, pageType: ReportBrandAgentDataV30PageType, filter: ReportBrandAgentDataV30Filter, metrics: string[], page: ReportBrandAgentDataV30Page): Promise<ApiResponse<ReportBrandAgentDataV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportBrandAgentDataGet");
    }

    if (dataReportType == null) {
      throw new ApiException("Missing the required parameter 'dataReportType' when calling openApiV30ReportBrandAgentDataGet");
    }

    if (startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV30ReportBrandAgentDataGet");
    }

    if (endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV30ReportBrandAgentDataGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportBrandAgentDataV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/brand/agent/data/",
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


