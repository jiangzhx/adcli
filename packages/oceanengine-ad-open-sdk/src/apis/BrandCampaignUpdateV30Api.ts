// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandCampaignUpdateV30Request, BrandCampaignUpdateV30Response } from "../models";


export class BrandCampaignUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandCampaignUpdatePost(brandCampaignUpdateV30Request: BrandCampaignUpdateV30Request): Promise<BrandCampaignUpdateV30Response> {
    const response = await this.openApiV30BrandCampaignUpdatePostWithHttpInfo(brandCampaignUpdateV30Request);
    return response.data;
  }

  async openApiV30BrandCampaignUpdatePostWithHttpInfo(brandCampaignUpdateV30Request: BrandCampaignUpdateV30Request): Promise<ApiResponse<BrandCampaignUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandCampaignUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/campaign/update/",
      queryParams: [

      ],
      body: brandCampaignUpdateV30Request
    });
  }
}


