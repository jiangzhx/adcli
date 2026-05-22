// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandCampaignDeleteV30Request, BrandCampaignDeleteV30Response } from "../models";


export class BrandCampaignDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandCampaignDeletePost(request: BrandCampaignDeleteV30Request): Promise<BrandCampaignDeleteV30Response> {
    const response = await this.openApiV30BrandCampaignDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandCampaignDeletePostWithHttpInfo(request: BrandCampaignDeleteV30Request): Promise<ApiResponse<BrandCampaignDeleteV30Response>> {
    return this.apiClient.requestWithHttpInfo<BrandCampaignDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/campaign/delete/",
      queryParams: [

      ],
      body: request
    });
  }
}


