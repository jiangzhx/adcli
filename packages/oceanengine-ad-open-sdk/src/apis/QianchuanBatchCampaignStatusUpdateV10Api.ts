// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanBatchCampaignStatusUpdateV10Request, QianchuanBatchCampaignStatusUpdateV10Response } from "../models";


export class QianchuanBatchCampaignStatusUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanBatchCampaignStatusUpdatePost(qianchuanBatchCampaignStatusUpdateV10Request: QianchuanBatchCampaignStatusUpdateV10Request): Promise<QianchuanBatchCampaignStatusUpdateV10Response> {
    const response = await this.openApiV10QianchuanBatchCampaignStatusUpdatePostWithHttpInfo(qianchuanBatchCampaignStatusUpdateV10Request);
    return response.data;
  }

  async openApiV10QianchuanBatchCampaignStatusUpdatePostWithHttpInfo(qianchuanBatchCampaignStatusUpdateV10Request: QianchuanBatchCampaignStatusUpdateV10Request): Promise<ApiResponse<QianchuanBatchCampaignStatusUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanBatchCampaignStatusUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/batch_campaign_status/update/",
      queryParams: [

      ],
      body: qianchuanBatchCampaignStatusUpdateV10Request
    });
  }
}


