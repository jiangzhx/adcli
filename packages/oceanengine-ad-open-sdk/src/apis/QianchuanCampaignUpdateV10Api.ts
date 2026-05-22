// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanCampaignUpdateV10Request, QianchuanCampaignUpdateV10Response } from "../models";


export interface OpenApiV10QianchuanCampaignUpdatePostRequest {
  qianchuanCampaignUpdateV10Request?: QianchuanCampaignUpdateV10Request;
}

export class QianchuanCampaignUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanCampaignUpdatePost(request: OpenApiV10QianchuanCampaignUpdatePostRequest): Promise<QianchuanCampaignUpdateV10Response> {
    const response = await this.openApiV10QianchuanCampaignUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanCampaignUpdatePostWithHttpInfo(request: OpenApiV10QianchuanCampaignUpdatePostRequest): Promise<ApiResponse<QianchuanCampaignUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanCampaignUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/campaign/update/",
      queryParams: [

      ],
      body: request.qianchuanCampaignUpdateV10Request
    });
  }
}


