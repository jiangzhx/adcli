// Generated from oceanengine/ad_open_sdk_go api/api_brand_campaign_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandCampaignListV30Filter, BrandCampaignListV30PageInfo, BrandCampaignListV30Response } from "../models/index";


export interface BrandCampaignListV30ApiOpenApiV30BrandCampaignListGetRequest {
  advertiserId: number | string;
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

  async openApiV30BrandCampaignListGet(request: BrandCampaignListV30ApiOpenApiV30BrandCampaignListGetRequest): Promise<BrandCampaignListV30Response> {
    const response = await this.openApiV30BrandCampaignListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandCampaignListGetWithHttpInfo(request: BrandCampaignListV30ApiOpenApiV30BrandCampaignListGetRequest): Promise<ApiResponse<BrandCampaignListV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
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


