// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanCampaignCreateV10Request, QianchuanCampaignCreateV10Response } from "../models";


export interface OpenApiV10QianchuanCampaignCreatePostRequest {
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

  async openApiV10QianchuanCampaignCreatePost(request: OpenApiV10QianchuanCampaignCreatePostRequest): Promise<QianchuanCampaignCreateV10Response> {
    const response = await this.openApiV10QianchuanCampaignCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanCampaignCreatePostWithHttpInfo(request: OpenApiV10QianchuanCampaignCreatePostRequest): Promise<ApiResponse<QianchuanCampaignCreateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanCampaignCreateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/campaign/create/",
      queryParams: [

      ],
      body: request.qianchuanCampaignCreateV10Request
    });
  }
}


