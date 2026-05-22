// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportCampaignGetV2Filtering, ReportCampaignGetV2GroupBy, ReportCampaignGetV2OrderField, ReportCampaignGetV2OrderType, ReportCampaignGetV2Response, ReportCampaignGetV2TimeGranularity } from "../models";


export class ReportCampaignGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ReportCampaignGetGet(advertiserId: number, endDate: string, fields: string[], filtering: ReportCampaignGetV2Filtering, groupBy: ReportCampaignGetV2GroupBy[], orderField: ReportCampaignGetV2OrderField, orderType: ReportCampaignGetV2OrderType, page: number, pageSize: number, startDate: string, timeGranularity: ReportCampaignGetV2TimeGranularity): Promise<ReportCampaignGetV2Response> {
    const response = await this.openApi2ReportCampaignGetGetWithHttpInfo(advertiserId, endDate, fields, filtering, groupBy, orderField, orderType, page, pageSize, startDate, timeGranularity);
    return response.data;
  }

  async openApi2ReportCampaignGetGetWithHttpInfo(advertiserId: number, endDate: string, fields: string[], filtering: ReportCampaignGetV2Filtering, groupBy: ReportCampaignGetV2GroupBy[], orderField: ReportCampaignGetV2OrderField, orderType: ReportCampaignGetV2OrderType, page: number, pageSize: number, startDate: string, timeGranularity: ReportCampaignGetV2TimeGranularity): Promise<ApiResponse<ReportCampaignGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ReportCampaignGetV2Response>({
      method: "GET",
      path: "/open_api/2/report/campaign/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "end_date", value: endDate },
        { name: "filtering", value: filtering },
        { name: "order_field", value: orderField },
        { name: "order_type", value: orderType },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "start_date", value: startDate },
        { name: "time_granularity", value: timeGranularity },
        { name: "fields", value: fields, collectionFormat: "multi" },
        { name: "group_by", value: groupBy, collectionFormat: "multi" }
      ]
    });
  }
}


