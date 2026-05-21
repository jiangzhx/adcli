// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanKeywordCheckV10Request, QianchuanKeywordCheckV10Response } from "../models";


export class QianchuanKeywordCheckV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanKeywordCheckPost(qianchuanKeywordCheckV10Request: QianchuanKeywordCheckV10Request): Promise<QianchuanKeywordCheckV10Response> {
    const response = await this.openApiV10QianchuanKeywordCheckPostWithHttpInfo(qianchuanKeywordCheckV10Request);
    return response.data;
  }

  async openApiV10QianchuanKeywordCheckPostWithHttpInfo(qianchuanKeywordCheckV10Request: QianchuanKeywordCheckV10Request): Promise<ApiResponse<QianchuanKeywordCheckV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanKeywordCheckV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/keyword/check/",
      queryParams: [

      ],
      body: qianchuanKeywordCheckV10Request
    });
  }
}


