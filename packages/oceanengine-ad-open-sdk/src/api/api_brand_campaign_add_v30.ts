// Generated from oceanengine/ad_open_sdk_go api/api_brand_campaign_add_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandCampaignAddV30Request, BrandCampaignAddV30Response } from "../models/index";


export interface BrandCampaignAddV30ApiOpenApiV30BrandCampaignAddPostRequest {
  brandCampaignAddV30Request?: BrandCampaignAddV30Request;
}

export class BrandCampaignAddV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandCampaignAddPost(request: BrandCampaignAddV30ApiOpenApiV30BrandCampaignAddPostRequest): Promise<BrandCampaignAddV30Response> {
    const response = await this.openApiV30BrandCampaignAddPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandCampaignAddPostWithHttpInfo(request: BrandCampaignAddV30ApiOpenApiV30BrandCampaignAddPostRequest): Promise<ApiResponse<BrandCampaignAddV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandCampaignAddV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/campaign/add/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.brandCampaignAddV30Request
    });
  }
}


