// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandCampaignDeleteV30Request, BrandCampaignDeleteV30Response } from "../models";


export interface OpenApiV30BrandCampaignDeletePostRequest {
  brandCampaignDeleteV30Request?: BrandCampaignDeleteV30Request;
}

export class BrandCampaignDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandCampaignDeletePost(request: OpenApiV30BrandCampaignDeletePostRequest): Promise<BrandCampaignDeleteV30Response> {
    const response = await this.openApiV30BrandCampaignDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandCampaignDeletePostWithHttpInfo(request: OpenApiV30BrandCampaignDeletePostRequest): Promise<ApiResponse<BrandCampaignDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandCampaignDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/campaign/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.brandCampaignDeleteV30Request
    });
  }
}


