// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportAudienceInterestActionListV2Filtering, ReportAudienceInterestActionListV2Response } from "../models";


export interface OpenApi2ReportAudienceInterestActionListGetRequest {
  advertiserId?: number | string;
  endDate?: string;
  filtering?: ReportAudienceInterestActionListV2Filtering;
  metrics?: string[];
  page?: number;
  pageSize?: number;
  startDate?: string;
}

export class ReportAudienceInterestActionListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ReportAudienceInterestActionListGet(request: OpenApi2ReportAudienceInterestActionListGetRequest): Promise<ReportAudienceInterestActionListV2Response> {
    const response = await this.openApi2ReportAudienceInterestActionListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ReportAudienceInterestActionListGetWithHttpInfo(request: OpenApi2ReportAudienceInterestActionListGetRequest): Promise<ApiResponse<ReportAudienceInterestActionListV2Response>> {

    return this.apiClient.requestWithHttpInfo<ReportAudienceInterestActionListV2Response>({
      method: "GET",
      path: "/open_api/2/report/audience/interest_action/list/",
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


