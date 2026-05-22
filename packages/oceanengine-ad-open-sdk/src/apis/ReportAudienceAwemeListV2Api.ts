// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportAudienceAwemeListV2Filtering, ReportAudienceAwemeListV2Response } from "../models";


export interface OpenApi2ReportAudienceAwemeListGetRequest {
  advertiserId?: number;
  endDate?: string;
  filtering?: ReportAudienceAwemeListV2Filtering;
  metrics?: string[];
  page?: number;
  pageSize?: number;
  startDate?: string;
}

export class ReportAudienceAwemeListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ReportAudienceAwemeListGet(request: OpenApi2ReportAudienceAwemeListGetRequest): Promise<ReportAudienceAwemeListV2Response> {
    const response = await this.openApi2ReportAudienceAwemeListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ReportAudienceAwemeListGetWithHttpInfo(request: OpenApi2ReportAudienceAwemeListGetRequest): Promise<ApiResponse<ReportAudienceAwemeListV2Response>> {

    return this.apiClient.requestWithHttpInfo<ReportAudienceAwemeListV2Response>({
      method: "GET",
      path: "/open_api/2/report/audience/aweme/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "end_date", value: request.endDate },
        { name: "filtering", value: request.filtering },
        { name: "metrics", value: request.metrics, collectionFormat: "csv" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "start_date", value: request.startDate }
      ]
    });
  }
}


