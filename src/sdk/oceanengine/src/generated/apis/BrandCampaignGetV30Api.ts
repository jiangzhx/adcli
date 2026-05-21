// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { BrandCampaignGetV30CampaignStatus, BrandCampaignGetV30Response } from "../models";


export class BrandCampaignGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandCampaignGetGet(advertiserId: number, page: number, size: number, campaignIds: string[], campaignNames: string[], campaignStatus: BrandCampaignGetV30CampaignStatus, createStartTime: string, createEndTime: string, startTime: string, endTime: string): Promise<BrandCampaignGetV30Response> {
    const response = await this.openApiV30BrandCampaignGetGetWithHttpInfo(advertiserId, page, size, campaignIds, campaignNames, campaignStatus, createStartTime, createEndTime, startTime, endTime);
    return response.data;
  }

  async openApiV30BrandCampaignGetGetWithHttpInfo(advertiserId: number, page: number, size: number, campaignIds: string[], campaignNames: string[], campaignStatus: BrandCampaignGetV30CampaignStatus, createStartTime: string, createEndTime: string, startTime: string, endTime: string): Promise<ApiResponse<BrandCampaignGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30BrandCampaignGetGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApiV30BrandCampaignGetGet");
    }

    if (size == null) {
      throw new ApiException("Missing the required parameter 'size' when calling openApiV30BrandCampaignGetGet");
    }
    return this.apiClient.requestWithHttpInfo<BrandCampaignGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/campaign/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "campaign_status", value: campaignStatus },
        { name: "create_start_time", value: createStartTime },
        { name: "create_end_time", value: createEndTime },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "page", value: page },
        { name: "size", value: size },
        { name: "campaign_ids", value: campaignIds, collectionFormat: "csv" },
        { name: "campaign_names", value: campaignNames, collectionFormat: "csv" }
      ]
    });
  }
}


