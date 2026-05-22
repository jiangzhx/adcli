// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandCampaignModifyV30Request, BrandCampaignModifyV30Response } from "../models";


export class BrandCampaignModifyV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandCampaignModifyPost(request: BrandCampaignModifyV30Request): Promise<BrandCampaignModifyV30Response> {
    const response = await this.openApiV30BrandCampaignModifyPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandCampaignModifyPostWithHttpInfo(request: BrandCampaignModifyV30Request): Promise<ApiResponse<BrandCampaignModifyV30Response>> {
    return this.apiClient.requestWithHttpInfo<BrandCampaignModifyV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/campaign/modify/",
      queryParams: [

      ],
      body: request
    });
  }
}


