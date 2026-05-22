// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAdStatusUpdateV10Request, QianchuanAdStatusUpdateV10Response } from "../models";


export class QianchuanAdStatusUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdStatusUpdatePost(qianchuanAdStatusUpdateV10Request: QianchuanAdStatusUpdateV10Request): Promise<QianchuanAdStatusUpdateV10Response> {
    const response = await this.openApiV10QianchuanAdStatusUpdatePostWithHttpInfo(qianchuanAdStatusUpdateV10Request);
    return response.data;
  }

  async openApiV10QianchuanAdStatusUpdatePostWithHttpInfo(qianchuanAdStatusUpdateV10Request: QianchuanAdStatusUpdateV10Request): Promise<ApiResponse<QianchuanAdStatusUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAdStatusUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/ad/status/update/",
      queryParams: [

      ],
      body: qianchuanAdStatusUpdateV10Request
    });
  }
}


