// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandCampaignAddV30Request, BrandCampaignAddV30Response } from "../models";


export interface OpenApiV30BrandCampaignAddPostRequest {
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

  async openApiV30BrandCampaignAddPost(request: OpenApiV30BrandCampaignAddPostRequest): Promise<BrandCampaignAddV30Response> {
    const response = await this.openApiV30BrandCampaignAddPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandCampaignAddPostWithHttpInfo(request: OpenApiV30BrandCampaignAddPostRequest): Promise<ApiResponse<BrandCampaignAddV30Response>> {

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


