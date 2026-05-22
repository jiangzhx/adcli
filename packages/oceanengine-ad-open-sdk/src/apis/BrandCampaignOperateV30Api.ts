// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandCampaignOperateV30Request, BrandCampaignOperateV30Response } from "../models";


export class BrandCampaignOperateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandCampaignOperatePost(request: BrandCampaignOperateV30Request): Promise<BrandCampaignOperateV30Response> {
    const response = await this.openApiV30BrandCampaignOperatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandCampaignOperatePostWithHttpInfo(request: BrandCampaignOperateV30Request): Promise<ApiResponse<BrandCampaignOperateV30Response>> {
    return this.apiClient.requestWithHttpInfo<BrandCampaignOperateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/campaign/operate/",
      queryParams: [

      ],
      body: request
    });
  }
}


