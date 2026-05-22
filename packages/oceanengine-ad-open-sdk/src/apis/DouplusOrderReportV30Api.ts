// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DouplusOrderReportV30Filter, DouplusOrderReportV30GroupBy, DouplusOrderReportV30Response, DouplusOrderReportV30StatTime } from "../models";


export interface OpenApiV30DouplusOrderReportGetRequest {
  awemeSecUid?: string;
  statTime?: DouplusOrderReportV30StatTime;
  groupBy?: DouplusOrderReportV30GroupBy[];
  filter?: DouplusOrderReportV30Filter;
  pageSize?: number;
  page?: number;
}

export class DouplusOrderReportV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DouplusOrderReportGet(request: OpenApiV30DouplusOrderReportGetRequest): Promise<DouplusOrderReportV30Response> {
    const response = await this.openApiV30DouplusOrderReportGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DouplusOrderReportGetWithHttpInfo(request: OpenApiV30DouplusOrderReportGetRequest): Promise<ApiResponse<DouplusOrderReportV30Response>> {

    return this.apiClient.requestWithHttpInfo<DouplusOrderReportV30Response>({
      method: "GET",
      path: "/open_api/v3.0/douplus/order/report/",
      queryParams: [
        { name: "aweme_sec_uid", value: request.awemeSecUid },
        { name: "stat_time", value: request.statTime },
        { name: "group_by", value: request.groupBy, collectionFormat: "csv" },
        { name: "filter", value: request.filter },
        { name: "page_size", value: request.pageSize },
        { name: "page", value: request.page }
      ]
    });
  }
}


