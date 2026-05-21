// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { BrandCampaignOperateV30Request, BrandCampaignOperateV30Response } from "../models";


export class BrandCampaignOperateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandCampaignOperatePost(brandCampaignOperateV30Request: BrandCampaignOperateV30Request): Promise<BrandCampaignOperateV30Response> {
    const response = await this.openApiV30BrandCampaignOperatePostWithHttpInfo(brandCampaignOperateV30Request);
    return response.data;
  }

  async openApiV30BrandCampaignOperatePostWithHttpInfo(brandCampaignOperateV30Request: BrandCampaignOperateV30Request): Promise<ApiResponse<BrandCampaignOperateV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandCampaignOperateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/campaign/operate/",
      queryParams: [

      ],
      body: brandCampaignOperateV30Request
    });
  }
}


