// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { BrandCampaignRemoveV30Request, BrandCampaignRemoveV30Response } from "../models";


export class BrandCampaignRemoveV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandCampaignRemovePost(brandCampaignRemoveV30Request: BrandCampaignRemoveV30Request): Promise<BrandCampaignRemoveV30Response> {
    const response = await this.openApiV30BrandCampaignRemovePostWithHttpInfo(brandCampaignRemoveV30Request);
    return response.data;
  }

  async openApiV30BrandCampaignRemovePostWithHttpInfo(brandCampaignRemoveV30Request: BrandCampaignRemoveV30Request): Promise<ApiResponse<BrandCampaignRemoveV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandCampaignRemoveV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/campaign/remove/",
      queryParams: [

      ],
      body: brandCampaignRemoveV30Request
    });
  }
}


