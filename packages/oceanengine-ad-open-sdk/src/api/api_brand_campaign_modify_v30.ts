// Generated from oceanengine/ad_open_sdk_go api/api_brand_campaign_modify_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandCampaignModifyV30Request, BrandCampaignModifyV30Response } from "../models/index";


export interface BrandCampaignModifyV30ApiOpenApiV30BrandCampaignModifyPostRequest {
  brandCampaignModifyV30Request?: BrandCampaignModifyV30Request;
}

export class BrandCampaignModifyV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandCampaignModifyPost(request: BrandCampaignModifyV30ApiOpenApiV30BrandCampaignModifyPostRequest): Promise<BrandCampaignModifyV30Response> {
    const response = await this.openApiV30BrandCampaignModifyPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandCampaignModifyPostWithHttpInfo(request: BrandCampaignModifyV30ApiOpenApiV30BrandCampaignModifyPostRequest): Promise<ApiResponse<BrandCampaignModifyV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandCampaignModifyV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/campaign/modify/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.brandCampaignModifyV30Request
    });
  }
}


