// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandCampaignEditV30Request, BrandCampaignEditV30Response } from "../models";


export interface OpenApiV30BrandCampaignEditPostRequest {
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

  async openApiV30BrandCampaignEditPost(request: OpenApiV30BrandCampaignEditPostRequest): Promise<BrandCampaignEditV30Response> {
    const response = await this.openApiV30BrandCampaignEditPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandCampaignEditPostWithHttpInfo(request: OpenApiV30BrandCampaignEditPostRequest): Promise<ApiResponse<BrandCampaignEditV30Response>> {

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


