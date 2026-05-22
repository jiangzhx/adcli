// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAdCreateV10Request, QianchuanAdCreateV10Response } from "../models";


export interface OpenApiV10QianchuanAdCreatePostRequest {
  qianchuanAdCreateV10Request?: QianchuanAdCreateV10Request;
}

export class QianchuanAdCreateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdCreatePost(request: OpenApiV10QianchuanAdCreatePostRequest): Promise<QianchuanAdCreateV10Response> {
    const response = await this.openApiV10QianchuanAdCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAdCreatePostWithHttpInfo(request: OpenApiV10QianchuanAdCreatePostRequest): Promise<ApiResponse<QianchuanAdCreateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAdCreateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/ad/create/",
      queryParams: [

      ],
      body: request.qianchuanAdCreateV10Request
    });
  }
}


