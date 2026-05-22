// Generated from oceanengine/ad_open_sdk_go api/api_brand_campaign_remove_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandCampaignRemoveV30Request, BrandCampaignRemoveV30Response } from "../models/index";


export interface BrandCampaignRemoveV30ApiOpenApiV30BrandCampaignRemovePostRequest {
  brandCampaignRemoveV30Request?: BrandCampaignRemoveV30Request;
}

export class BrandCampaignRemoveV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandCampaignRemovePost(request: BrandCampaignRemoveV30ApiOpenApiV30BrandCampaignRemovePostRequest): Promise<BrandCampaignRemoveV30Response> {
    const response = await this.openApiV30BrandCampaignRemovePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandCampaignRemovePostWithHttpInfo(request: BrandCampaignRemoveV30ApiOpenApiV30BrandCampaignRemovePostRequest): Promise<ApiResponse<BrandCampaignRemoveV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandCampaignRemoveV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/campaign/remove/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.brandCampaignRemoveV30Request
    });
  }
}


