// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanFileImageDeleteV10Request, QianchuanFileImageDeleteV10Response } from "../models";


export interface OpenApiV10QianchuanFileImageDeletePostRequest {
  qianchuanFileImageDeleteV10Request?: QianchuanFileImageDeleteV10Request;
}

export class QianchuanFileImageDeleteV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanFileImageDeletePost(request: OpenApiV10QianchuanFileImageDeletePostRequest): Promise<QianchuanFileImageDeleteV10Response> {
    const response = await this.openApiV10QianchuanFileImageDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanFileImageDeletePostWithHttpInfo(request: OpenApiV10QianchuanFileImageDeletePostRequest): Promise<ApiResponse<QianchuanFileImageDeleteV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanFileImageDeleteV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/file/image/delete/",
      queryParams: [

      ],
      body: request.qianchuanFileImageDeleteV10Request
    });
  }
}


