// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandOrderListV30CampaignFilter, BrandOrderListV30Filter, BrandOrderListV30PageInfo, BrandOrderListV30Response } from "../models";


export interface OpenApiV30BrandOrderListGetRequest {
  advertiserId: number;
  filter?: BrandOrderListV30Filter;
  campaignFilter?: BrandOrderListV30CampaignFilter;
  pageInfo?: BrandOrderListV30PageInfo;
}

export class BrandOrderListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandOrderListGet(request: OpenApiV30BrandOrderListGetRequest): Promise<BrandOrderListV30Response> {
    const response = await this.openApiV30BrandOrderListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandOrderListGetWithHttpInfo(request: OpenApiV30BrandOrderListGetRequest): Promise<ApiResponse<BrandOrderListV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30BrandOrderListGet");
    }
    return this.apiClient.requestWithHttpInfo<BrandOrderListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/order/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filter", value: request.filter },
        { name: "campaign_filter", value: request.campaignFilter },
        { name: "page_info", value: request.pageInfo }
      ]
    });
  }
}


