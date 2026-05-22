// Generated from oceanengine/ad_open_sdk_go api/api_brand_campaign_edit_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandCampaignEditV30Request, BrandCampaignEditV30Response } from "../models/index";


export interface BrandCampaignEditV30ApiOpenApiV30BrandCampaignEditPostRequest {
  brandCampaignEditV30Request?: BrandCampaignEditV30Request;
}

export class BrandCampaignEditV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandCampaignEditPost(request: BrandCampaignEditV30ApiOpenApiV30BrandCampaignEditPostRequest): Promise<BrandCampaignEditV30Response> {
    const response = await this.openApiV30BrandCampaignEditPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandCampaignEditPostWithHttpInfo(request: BrandCampaignEditV30ApiOpenApiV30BrandCampaignEditPostRequest): Promise<ApiResponse<BrandCampaignEditV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandCampaignEditV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/campaign/edit/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.brandCampaignEditV30Request
    });
  }
}


