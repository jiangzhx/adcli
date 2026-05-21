// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ReportBrandCampaignGetV30LandingType, ReportBrandCampaignGetV30PricingType, ReportBrandCampaignGetV30Response } from "../models";


export class ReportBrandCampaignGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportBrandCampaignGetGet(advertiserId: number, page: number, size: number, landingType: ReportBrandCampaignGetV30LandingType, pricingType: ReportBrandCampaignGetV30PricingType, campaignIds: string[], startTime: string, endTime: string): Promise<ReportBrandCampaignGetV30Response> {
    const response = await this.openApiV30ReportBrandCampaignGetGetWithHttpInfo(advertiserId, page, size, landingType, pricingType, campaignIds, startTime, endTime);
    return response.data;
  }

  async openApiV30ReportBrandCampaignGetGetWithHttpInfo(advertiserId: number, page: number, size: number, landingType: ReportBrandCampaignGetV30LandingType, pricingType: ReportBrandCampaignGetV30PricingType, campaignIds: string[], startTime: string, endTime: string): Promise<ApiResponse<ReportBrandCampaignGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportBrandCampaignGetGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApiV30ReportBrandCampaignGetGet");
    }

    if (size == null) {
      throw new ApiException("Missing the required parameter 'size' when calling openApiV30ReportBrandCampaignGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportBrandCampaignGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/brand/campaign/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "landing_type", value: landingType },
        { name: "pricing_type", value: pricingType },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "page", value: page },
        { name: "size", value: size },
        { name: "campaign_ids", value: campaignIds, collectionFormat: "csv" }
      ]
    });
  }
}


