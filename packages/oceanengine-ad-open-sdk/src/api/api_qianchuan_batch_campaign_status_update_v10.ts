// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_batch_campaign_status_update_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanBatchCampaignStatusUpdateV10Request, QianchuanBatchCampaignStatusUpdateV10Response } from "../models/index";


export interface QianchuanBatchCampaignStatusUpdateV10ApiOpenApiV10QianchuanBatchCampaignStatusUpdatePostRequest {
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

  async openApiV10QianchuanBatchCampaignStatusUpdatePost(request: QianchuanBatchCampaignStatusUpdateV10ApiOpenApiV10QianchuanBatchCampaignStatusUpdatePostRequest): Promise<QianchuanBatchCampaignStatusUpdateV10Response> {
    const response = await this.openApiV10QianchuanBatchCampaignStatusUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanBatchCampaignStatusUpdatePostWithHttpInfo(request: QianchuanBatchCampaignStatusUpdateV10ApiOpenApiV10QianchuanBatchCampaignStatusUpdatePostRequest): Promise<ApiResponse<QianchuanBatchCampaignStatusUpdateV10Response>> {

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


