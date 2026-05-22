// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAdScheduleDateUpdateV10Request, QianchuanAdScheduleDateUpdateV10Response } from "../models";


export class QianchuanAdScheduleDateUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdScheduleDateUpdatePost(qianchuanAdScheduleDateUpdateV10Request: QianchuanAdScheduleDateUpdateV10Request): Promise<QianchuanAdScheduleDateUpdateV10Response> {
    const response = await this.openApiV10QianchuanAdScheduleDateUpdatePostWithHttpInfo(qianchuanAdScheduleDateUpdateV10Request);
    return response.data;
  }

  async openApiV10QianchuanAdScheduleDateUpdatePostWithHttpInfo(qianchuanAdScheduleDateUpdateV10Request: QianchuanAdScheduleDateUpdateV10Request): Promise<ApiResponse<QianchuanAdScheduleDateUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAdScheduleDateUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/ad/schedule_date/update/",
      queryParams: [

      ],
      body: qianchuanAdScheduleDateUpdateV10Request
    });
  }
}


