// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanBatchCampaignStatusUpdateV10Request, QianchuanBatchCampaignStatusUpdateV10Response } from "../models";


export interface OpenApiV10QianchuanBatchCampaignStatusUpdatePostRequest {
  qianchuanBatchCampaignStatusUpdateV10Request?: QianchuanBatchCampaignStatusUpdateV10Request;
}

export class QianchuanBatchCampaignStatusUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanBatchCampaignStatusUpdatePost(request: OpenApiV10QianchuanBatchCampaignStatusUpdatePostRequest): Promise<QianchuanBatchCampaignStatusUpdateV10Response> {
    const response = await this.openApiV10QianchuanBatchCampaignStatusUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanBatchCampaignStatusUpdatePostWithHttpInfo(request: OpenApiV10QianchuanBatchCampaignStatusUpdatePostRequest): Promise<ApiResponse<QianchuanBatchCampaignStatusUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanBatchCampaignStatusUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/batch_campaign_status/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanBatchCampaignStatusUpdateV10Request
    });
  }
}


