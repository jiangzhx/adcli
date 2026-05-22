// Generated from oceanengine/ad_open_sdk_go api/api_brand_campaign_operate_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandCampaignOperateV30Request, BrandCampaignOperateV30Response } from "../models/index";


export interface BrandCampaignOperateV30ApiOpenApiV30BrandCampaignOperatePostRequest {
  brandCampaignOperateV30Request?: BrandCampaignOperateV30Request;
}

export class BrandCampaignOperateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandCampaignOperatePost(request: BrandCampaignOperateV30ApiOpenApiV30BrandCampaignOperatePostRequest): Promise<BrandCampaignOperateV30Response> {
    const response = await this.openApiV30BrandCampaignOperatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandCampaignOperatePostWithHttpInfo(request: BrandCampaignOperateV30ApiOpenApiV30BrandCampaignOperatePostRequest): Promise<ApiResponse<BrandCampaignOperateV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandCampaignOperateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/campaign/operate/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.brandCampaignOperateV30Request
    });
  }
}


