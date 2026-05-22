// Generated from oceanengine/ad_open_sdk_go api/api_brand_campaign_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandCampaignGetV30CampaignStatus, BrandCampaignGetV30Response } from "../models/index";


export interface BrandCampaignGetV30ApiOpenApiV30BrandCampaignGetGetRequest {
  advertiserId: number | string;
  page: number;
  size: number;
  campaignIds?: string[];
  campaignNames?: string[];
  campaignStatus?: BrandCampaignGetV30CampaignStatus;
  createStartTime?: string;
  createEndTime?: string;
  startTime?: string;
  endTime?: string;
}

export class BrandCampaignGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandCampaignGetGet(request: BrandCampaignGetV30ApiOpenApiV30BrandCampaignGetGetRequest): Promise<BrandCampaignGetV30Response> {
    const response = await this.openApiV30BrandCampaignGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandCampaignGetGetWithHttpInfo(request: BrandCampaignGetV30ApiOpenApiV30BrandCampaignGetGetRequest): Promise<ApiResponse<BrandCampaignGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30BrandCampaignGetGet");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApiV30BrandCampaignGetGet");
    }

    if (request.size == null) {
      throw new ApiException("Missing the required parameter 'size' when calling openApiV30BrandCampaignGetGet");
    }
    return this.apiClient.requestWithHttpInfo<BrandCampaignGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/campaign/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "campaign_ids", value: request.campaignIds },
        { name: "campaign_names", value: request.campaignNames },
        { name: "campaign_status", value: request.campaignStatus },
        { name: "create_start_time", value: request.createStartTime },
        { name: "create_end_time", value: request.createEndTime },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "page", value: request.page },
        { name: "size", value: request.size }
      ]
    });
  }
}


