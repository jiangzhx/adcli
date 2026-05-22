// Generated from oceanengine/ad_open_sdk_go api/api_report_brand_campaign_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ReportBrandCampaignGetV30LandingType, ReportBrandCampaignGetV30PricingType, ReportBrandCampaignGetV30Response } from "../models/index";


export interface ReportBrandCampaignGetV30ApiOpenApiV30ReportBrandCampaignGetGetRequest {
  advertiserId: number | string;
  page: number;
  size: number;
  landingType?: ReportBrandCampaignGetV30LandingType;
  pricingType?: ReportBrandCampaignGetV30PricingType;
  campaignIds?: string[];
  startTime?: string;
  endTime?: string;
}

export class ReportBrandCampaignGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportBrandCampaignGetGet(request: ReportBrandCampaignGetV30ApiOpenApiV30ReportBrandCampaignGetGetRequest): Promise<ReportBrandCampaignGetV30Response> {
    const response = await this.openApiV30ReportBrandCampaignGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ReportBrandCampaignGetGetWithHttpInfo(request: ReportBrandCampaignGetV30ApiOpenApiV30ReportBrandCampaignGetGetRequest): Promise<ApiResponse<ReportBrandCampaignGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.page == null) {
      throw new ApiException("page is required and must be specified");
    }

    if (request.page != null && Number(request.page) < 1) {
      throw new ApiException("page must be greater than 1");
    }

    if (request.size == null) {
      throw new ApiException("size is required and must be specified");
    }

    if (request.size != null && Number(request.size) > 100) {
      throw new ApiException("size must be less than 100");
    }
    return this.apiClient.requestWithHttpInfo<ReportBrandCampaignGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/brand/campaign/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "landing_type", value: request.landingType },
        { name: "pricing_type", value: request.pricingType },
        { name: "campaign_ids", value: request.campaignIds },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "page", value: request.page },
        { name: "size", value: request.size }
      ]
    });
  }
}


