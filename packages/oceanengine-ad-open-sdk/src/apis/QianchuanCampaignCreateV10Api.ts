// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanCampaignCreateV10Request, QianchuanCampaignCreateV10Response } from "../models";


export class QianchuanCampaignCreateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanCampaignCreatePost(qianchuanCampaignCreateV10Request: QianchuanCampaignCreateV10Request): Promise<QianchuanCampaignCreateV10Response> {
    const response = await this.openApiV10QianchuanCampaignCreatePostWithHttpInfo(qianchuanCampaignCreateV10Request);
    return response.data;
  }

  async openApiV10QianchuanCampaignCreatePostWithHttpInfo(qianchuanCampaignCreateV10Request: QianchuanCampaignCreateV10Request): Promise<ApiResponse<QianchuanCampaignCreateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanCampaignCreateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/campaign/create/",
      queryParams: [

      ],
      body: qianchuanCampaignCreateV10Request
    });
  }
}


