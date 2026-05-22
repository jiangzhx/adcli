// Generated from oceanengine/ad_open_sdk_go api/api_report_audience_interest_action_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ReportAudienceInterestActionListV2Filtering, ReportAudienceInterestActionListV2Response } from "../models/index";


export interface ReportAudienceInterestActionListV2ApiOpenApi2ReportAudienceInterestActionListGetRequest {
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

  async openApi2ReportAudienceInterestActionListGet(request: ReportAudienceInterestActionListV2ApiOpenApi2ReportAudienceInterestActionListGetRequest): Promise<ReportAudienceInterestActionListV2Response> {
    const response = await this.openApi2ReportAudienceInterestActionListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ReportAudienceInterestActionListGetWithHttpInfo(request: ReportAudienceInterestActionListV2ApiOpenApi2ReportAudienceInterestActionListGetRequest): Promise<ApiResponse<ReportAudienceInterestActionListV2Response>> {

    return this.apiClient.requestWithHttpInfo<ReportAudienceInterestActionListV2Response>({
      method: "GET",
      path: "/open_api/2/report/audience/interest_action/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "end_date", value: request.endDate },
        { name: "filtering", value: request.filtering },
        { name: "metrics", value: request.metrics },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "start_date", value: request.startDate }
      ]
    });
  }
}


