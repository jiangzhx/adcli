// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_campaign_create_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanCampaignCreateV10Request, QianchuanCampaignCreateV10Response } from "../models/index";


export interface QianchuanCampaignCreateV10ApiOpenApiV10QianchuanCampaignCreatePostRequest {
  qianchuanCampaignCreateV10Request?: QianchuanCampaignCreateV10Request;
}

export class QianchuanCampaignCreateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanCampaignCreatePost(request: QianchuanCampaignCreateV10ApiOpenApiV10QianchuanCampaignCreatePostRequest): Promise<QianchuanCampaignCreateV10Response> {
    const response = await this.openApiV10QianchuanCampaignCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanCampaignCreatePostWithHttpInfo(request: QianchuanCampaignCreateV10ApiOpenApiV10QianchuanCampaignCreatePostRequest): Promise<ApiResponse<QianchuanCampaignCreateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanCampaignCreateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/campaign/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanCampaignCreateV10Request
    });
  }
}


