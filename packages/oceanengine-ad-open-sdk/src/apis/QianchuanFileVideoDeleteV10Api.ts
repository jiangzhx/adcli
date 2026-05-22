// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanFileVideoDeleteV10Request, QianchuanFileVideoDeleteV10Response } from "../models";


export interface OpenApiV10QianchuanFileVideoDeletePostRequest {
  qianchuanFileVideoDeleteV10Request?: QianchuanFileVideoDeleteV10Request;
}

export class QianchuanFileVideoDeleteV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanFileVideoDeletePost(request: OpenApiV10QianchuanFileVideoDeletePostRequest): Promise<QianchuanFileVideoDeleteV10Response> {
    const response = await this.openApiV10QianchuanFileVideoDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanFileVideoDeletePostWithHttpInfo(request: OpenApiV10QianchuanFileVideoDeletePostRequest): Promise<ApiResponse<QianchuanFileVideoDeleteV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanFileVideoDeleteV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/file/video/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanFileVideoDeleteV10Request
    });
  }
}


