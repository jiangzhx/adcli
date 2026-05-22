// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandCampaignAddV30Request, BrandCampaignAddV30Response } from "../models";


export class BrandCampaignAddV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandCampaignAddPost(brandCampaignAddV30Request: BrandCampaignAddV30Request): Promise<BrandCampaignAddV30Response> {
    const response = await this.openApiV30BrandCampaignAddPostWithHttpInfo(brandCampaignAddV30Request);
    return response.data;
  }

  async openApiV30BrandCampaignAddPostWithHttpInfo(brandCampaignAddV30Request: BrandCampaignAddV30Request): Promise<ApiResponse<BrandCampaignAddV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandCampaignAddV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/campaign/add/",
      queryParams: [

      ],
      body: brandCampaignAddV30Request
    });
  }
}


