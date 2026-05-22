// Generated from oceanengine/ad_open_sdk_go api/api_brand_campaign_submit_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandCampaignSubmitV30Request, BrandCampaignSubmitV30Response } from "../models/index";


export interface BrandCampaignSubmitV30ApiOpenApiV30BrandCampaignSubmitPostRequest {
  brandCampaignSubmitV30Request?: BrandCampaignSubmitV30Request;
}

export class BrandCampaignSubmitV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandCampaignSubmitPost(request: BrandCampaignSubmitV30ApiOpenApiV30BrandCampaignSubmitPostRequest): Promise<BrandCampaignSubmitV30Response> {
    const response = await this.openApiV30BrandCampaignSubmitPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandCampaignSubmitPostWithHttpInfo(request: BrandCampaignSubmitV30ApiOpenApiV30BrandCampaignSubmitPostRequest): Promise<ApiResponse<BrandCampaignSubmitV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandCampaignSubmitV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/campaign/submit/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.brandCampaignSubmitV30Request
    });
  }
}


