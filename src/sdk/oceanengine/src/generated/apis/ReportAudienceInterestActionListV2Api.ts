// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ReportAudienceInterestActionListV2Filtering, ReportAudienceInterestActionListV2Response } from "../models";


export class ReportAudienceInterestActionListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ReportAudienceInterestActionListGet(advertiserId: number, endDate: string, filtering: ReportAudienceInterestActionListV2Filtering, metrics: string[], page: number, pageSize: number, startDate: string): Promise<ReportAudienceInterestActionListV2Response> {
    const response = await this.openApi2ReportAudienceInterestActionListGetWithHttpInfo(advertiserId, endDate, filtering, metrics, page, pageSize, startDate);
    return response.data;
  }

  async openApi2ReportAudienceInterestActionListGetWithHttpInfo(advertiserId: number, endDate: string, filtering: ReportAudienceInterestActionListV2Filtering, metrics: string[], page: number, pageSize: number, startDate: string): Promise<ApiResponse<ReportAudienceInterestActionListV2Response>> {

    return this.apiClient.requestWithHttpInfo<ReportAudienceInterestActionListV2Response>({
      method: "GET",
      path: "/open_api/2/report/audience/interest_action/list/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "end_date", value: endDate },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "start_date", value: startDate },
        { name: "metrics", value: metrics, collectionFormat: "multi" }
      ]
    });
  }
}


