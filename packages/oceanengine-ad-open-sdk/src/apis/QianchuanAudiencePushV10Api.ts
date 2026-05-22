// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAudiencePushV10Request, QianchuanAudiencePushV10Response } from "../models";


export class QianchuanAudiencePushV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAudiencePushPost(qianchuanAudiencePushV10Request: QianchuanAudiencePushV10Request): Promise<QianchuanAudiencePushV10Response> {
    const response = await this.openApiV10QianchuanAudiencePushPostWithHttpInfo(qianchuanAudiencePushV10Request);
    return response.data;
  }

  async openApiV10QianchuanAudiencePushPostWithHttpInfo(qianchuanAudiencePushV10Request: QianchuanAudiencePushV10Request): Promise<ApiResponse<QianchuanAudiencePushV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAudiencePushV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/audience/push/",
      queryParams: [

      ],
      body: qianchuanAudiencePushV10Request
    });
  }
}


