// Generated from oceanengine/ad_open_sdk_go api/api_brand_campaign_revoke_modify_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandCampaignRevokeModifyV30Request, BrandCampaignRevokeModifyV30Response } from "../models/index";


export interface BrandCampaignRevokeModifyV30ApiOpenApiV30BrandCampaignRevokeModifyPostRequest {
  brandCampaignRevokeModifyV30Request?: BrandCampaignRevokeModifyV30Request;
}

export class BrandCampaignRevokeModifyV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandCampaignRevokeModifyPost(request: BrandCampaignRevokeModifyV30ApiOpenApiV30BrandCampaignRevokeModifyPostRequest): Promise<BrandCampaignRevokeModifyV30Response> {
    const response = await this.openApiV30BrandCampaignRevokeModifyPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandCampaignRevokeModifyPostWithHttpInfo(request: BrandCampaignRevokeModifyV30ApiOpenApiV30BrandCampaignRevokeModifyPostRequest): Promise<ApiResponse<BrandCampaignRevokeModifyV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandCampaignRevokeModifyV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/campaign/revoke_modify/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.brandCampaignRevokeModifyV30Request
    });
  }
}


