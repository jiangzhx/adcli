// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportCampaignGetV2Filtering, ReportCampaignGetV2GroupBy, ReportCampaignGetV2OrderField, ReportCampaignGetV2OrderType, ReportCampaignGetV2Response, ReportCampaignGetV2TimeGranularity } from "../models";


export interface OpenApi2ReportCampaignGetGetRequest {
  advertiserId?: number;
  endDate?: string;
  fields?: string[];
  filtering?: ReportCampaignGetV2Filtering;
  groupBy?: ReportCampaignGetV2GroupBy[];
  orderField?: ReportCampaignGetV2OrderField;
  orderType?: ReportCampaignGetV2OrderType;
  page?: number;
  pageSize?: number;
  startDate?: string;
  timeGranularity?: ReportCampaignGetV2TimeGranularity;
}

export class ReportCampaignGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ReportCampaignGetGet(request: OpenApi2ReportCampaignGetGetRequest): Promise<ReportCampaignGetV2Response> {
    const response = await this.openApi2ReportCampaignGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ReportCampaignGetGetWithHttpInfo(request: OpenApi2ReportCampaignGetGetRequest): Promise<ApiResponse<ReportCampaignGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ReportCampaignGetV2Response>({
      method: "GET",
      path: "/open_api/2/report/campaign/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "end_date", value: request.endDate },
        { name: "fields", value: request.fields, collectionFormat: "csv" },
        { name: "filtering", value: request.filtering },
        { name: "group_by", value: request.groupBy, collectionFormat: "csv" },
        { name: "order_field", value: request.orderField },
        { name: "order_type", value: request.orderType },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "start_date", value: request.startDate },
        { name: "time_granularity", value: request.timeGranularity }
      ]
    });
  }
}


