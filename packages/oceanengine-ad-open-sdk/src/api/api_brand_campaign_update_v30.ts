// Generated from oceanengine/ad_open_sdk_go api/api_brand_campaign_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandCampaignUpdateV30Request, BrandCampaignUpdateV30Response } from "../models/index";


export interface BrandCampaignUpdateV30ApiOpenApiV30BrandCampaignUpdatePostRequest {
  brandCampaignUpdateV30Request?: BrandCampaignUpdateV30Request;
}

export class BrandCampaignUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandCampaignUpdatePost(request: BrandCampaignUpdateV30ApiOpenApiV30BrandCampaignUpdatePostRequest): Promise<BrandCampaignUpdateV30Response> {
    const response = await this.openApiV30BrandCampaignUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandCampaignUpdatePostWithHttpInfo(request: BrandCampaignUpdateV30ApiOpenApiV30BrandCampaignUpdatePostRequest): Promise<ApiResponse<BrandCampaignUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandCampaignUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/campaign/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.brandCampaignUpdateV30Request
    });
  }
}


