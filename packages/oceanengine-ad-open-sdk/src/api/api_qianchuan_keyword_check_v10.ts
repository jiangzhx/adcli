// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_keyword_check_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanKeywordCheckV10Request, QianchuanKeywordCheckV10Response } from "../models/index";


export interface QianchuanKeywordCheckV10ApiOpenApiV10QianchuanKeywordCheckPostRequest {
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

  async openApiV10QianchuanKeywordCheckPost(request: QianchuanKeywordCheckV10ApiOpenApiV10QianchuanKeywordCheckPostRequest): Promise<QianchuanKeywordCheckV10Response> {
    const response = await this.openApiV10QianchuanKeywordCheckPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanKeywordCheckPostWithHttpInfo(request: QianchuanKeywordCheckV10ApiOpenApiV10QianchuanKeywordCheckPostRequest): Promise<ApiResponse<QianchuanKeywordCheckV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanKeywordCheckV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/keyword/check/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanKeywordCheckV10Request
    });
  }
}


