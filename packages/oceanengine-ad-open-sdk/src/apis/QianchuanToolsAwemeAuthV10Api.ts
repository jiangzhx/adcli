// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanToolsAwemeAuthV10Request, QianchuanToolsAwemeAuthV10Response } from "../models";


export class QianchuanToolsAwemeAuthV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanToolsAwemeAuthPost(qianchuanToolsAwemeAuthV10Request: QianchuanToolsAwemeAuthV10Request): Promise<QianchuanToolsAwemeAuthV10Response> {
    const response = await this.openApiV10QianchuanToolsAwemeAuthPostWithHttpInfo(qianchuanToolsAwemeAuthV10Request);
    return response.data;
  }

  async openApiV10QianchuanToolsAwemeAuthPostWithHttpInfo(qianchuanToolsAwemeAuthV10Request: QianchuanToolsAwemeAuthV10Request): Promise<ApiResponse<QianchuanToolsAwemeAuthV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanToolsAwemeAuthV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/tools/aweme_auth/",
      queryParams: [

      ],
      body: qianchuanToolsAwemeAuthV10Request
    });
  }
}


