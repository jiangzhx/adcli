// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_campaign_update_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanCampaignUpdateV10Request, QianchuanCampaignUpdateV10Response } from "../models/index";


export interface QianchuanCampaignUpdateV10ApiOpenApiV10QianchuanCampaignUpdatePostRequest {
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

  async openApiV10QianchuanCampaignUpdatePost(request: QianchuanCampaignUpdateV10ApiOpenApiV10QianchuanCampaignUpdatePostRequest): Promise<QianchuanCampaignUpdateV10Response> {
    const response = await this.openApiV10QianchuanCampaignUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanCampaignUpdatePostWithHttpInfo(request: QianchuanCampaignUpdateV10ApiOpenApiV10QianchuanCampaignUpdatePostRequest): Promise<ApiResponse<QianchuanCampaignUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanCampaignUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/campaign/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanCampaignUpdateV10Request
    });
  }
}


