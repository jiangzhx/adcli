// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanKeywordCheckV10Request, QianchuanKeywordCheckV10Response } from "../models";


export interface OpenApiV10QianchuanKeywordCheckPostRequest {
  qianchuanKeywordCheckV10Request?: QianchuanKeywordCheckV10Request;
}

export class QianchuanKeywordCheckV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanKeywordCheckPost(request: OpenApiV10QianchuanKeywordCheckPostRequest): Promise<QianchuanKeywordCheckV10Response> {
    const response = await this.openApiV10QianchuanKeywordCheckPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanKeywordCheckPostWithHttpInfo(request: OpenApiV10QianchuanKeywordCheckPostRequest): Promise<ApiResponse<QianchuanKeywordCheckV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanKeywordCheckV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/keyword/check/",
      queryParams: [

      ],
      body: request.qianchuanKeywordCheckV10Request
    });
  }
}


