// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DouplusOrderReportV30Filter, DouplusOrderReportV30GroupBy, DouplusOrderReportV30Response, DouplusOrderReportV30StatTime } from "../models";


export class DouplusOrderReportV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DouplusOrderReportGet(awemeSecUid: string, statTime: DouplusOrderReportV30StatTime, groupBy: DouplusOrderReportV30GroupBy[], filter: DouplusOrderReportV30Filter, pageSize: number, page: number): Promise<DouplusOrderReportV30Response> {
    const response = await this.openApiV30DouplusOrderReportGetWithHttpInfo(awemeSecUid, statTime, groupBy, filter, pageSize, page);
    return response.data;
  }

  async openApiV30DouplusOrderReportGetWithHttpInfo(awemeSecUid: string, statTime: DouplusOrderReportV30StatTime, groupBy: DouplusOrderReportV30GroupBy[], filter: DouplusOrderReportV30Filter, pageSize: number, page: number): Promise<ApiResponse<DouplusOrderReportV30Response>> {

    return this.apiClient.requestWithHttpInfo<DouplusOrderReportV30Response>({
      method: "GET",
      path: "/open_api/v3.0/douplus/order/report/",
      queryParams: [
        { name: "aweme_sec_uid", value: awemeSecUid },
        { name: "stat_time", value: statTime },
        { name: "filter", value: filter },
        { name: "page_size", value: pageSize },
        { name: "page", value: page },
        { name: "group_by", value: groupBy, collectionFormat: "csv" }
      ]
    });
  }
}


