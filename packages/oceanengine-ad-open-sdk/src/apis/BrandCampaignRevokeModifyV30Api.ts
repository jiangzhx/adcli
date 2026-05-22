// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandCampaignRevokeModifyV30Request, BrandCampaignRevokeModifyV30Response } from "../models";


export interface OpenApiV30BrandCampaignRevokeModifyPostRequest {
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

  async openApiV30BrandCampaignRevokeModifyPost(request: OpenApiV30BrandCampaignRevokeModifyPostRequest): Promise<BrandCampaignRevokeModifyV30Response> {
    const response = await this.openApiV30BrandCampaignRevokeModifyPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandCampaignRevokeModifyPostWithHttpInfo(request: OpenApiV30BrandCampaignRevokeModifyPostRequest): Promise<ApiResponse<BrandCampaignRevokeModifyV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandCampaignRevokeModifyV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/campaign/revoke_modify/",
      queryParams: [

      ],
      body: request.brandCampaignRevokeModifyV30Request
    });
  }
}


