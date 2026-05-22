// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAudienceDeleteV10Request, QianchuanAudienceDeleteV10Response } from "../models";


export class QianchuanAudienceDeleteV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAudienceDeletePost(qianchuanAudienceDeleteV10Request: QianchuanAudienceDeleteV10Request): Promise<QianchuanAudienceDeleteV10Response> {
    const response = await this.openApiV10QianchuanAudienceDeletePostWithHttpInfo(qianchuanAudienceDeleteV10Request);
    return response.data;
  }

  async openApiV10QianchuanAudienceDeletePostWithHttpInfo(qianchuanAudienceDeleteV10Request: QianchuanAudienceDeleteV10Request): Promise<ApiResponse<QianchuanAudienceDeleteV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAudienceDeleteV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/audience/delete/",
      queryParams: [

      ],
      body: qianchuanAudienceDeleteV10Request
    });
  }
}


