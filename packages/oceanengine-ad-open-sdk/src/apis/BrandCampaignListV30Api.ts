// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandCampaignListV30Filter, BrandCampaignListV30PageInfo, BrandCampaignListV30Response } from "../models";


export interface OpenApiV30BrandCampaignListGetRequest {
  advertiserId: number;
  filter?: BrandCampaignListV30Filter;
  pageInfo?: BrandCampaignListV30PageInfo;
}

export class BrandCampaignListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandCampaignListGet(request: OpenApiV30BrandCampaignListGetRequest): Promise<BrandCampaignListV30Response> {
    const response = await this.openApiV30BrandCampaignListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandCampaignListGetWithHttpInfo(request: OpenApiV30BrandCampaignListGetRequest): Promise<ApiResponse<BrandCampaignListV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30BrandCampaignListGet");
    }
    return this.apiClient.requestWithHttpInfo<BrandCampaignListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/campaign/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filter", value: request.filter },
        { name: "page_info", value: request.pageInfo }
      ]
    });
  }
}


