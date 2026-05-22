// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandCampaignSubmitV30Request, BrandCampaignSubmitV30Response } from "../models";


export class BrandCampaignSubmitV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandCampaignSubmitPost(request: BrandCampaignSubmitV30Request): Promise<BrandCampaignSubmitV30Response> {
    const response = await this.openApiV30BrandCampaignSubmitPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandCampaignSubmitPostWithHttpInfo(request: BrandCampaignSubmitV30Request): Promise<ApiResponse<BrandCampaignSubmitV30Response>> {
    return this.apiClient.requestWithHttpInfo<BrandCampaignSubmitV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/campaign/submit/",
      queryParams: [

      ],
      body: request
    });
  }
}


