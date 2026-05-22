// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_file_video_delete_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanFileVideoDeleteV10Request, QianchuanFileVideoDeleteV10Response } from "../models/index";


export interface QianchuanFileVideoDeleteV10ApiOpenApiV10QianchuanFileVideoDeletePostRequest {
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

  async openApiV10QianchuanFileVideoDeletePost(request: QianchuanFileVideoDeleteV10ApiOpenApiV10QianchuanFileVideoDeletePostRequest): Promise<QianchuanFileVideoDeleteV10Response> {
    const response = await this.openApiV10QianchuanFileVideoDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanFileVideoDeletePostWithHttpInfo(request: QianchuanFileVideoDeleteV10ApiOpenApiV10QianchuanFileVideoDeletePostRequest): Promise<ApiResponse<QianchuanFileVideoDeleteV10Response>> {

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


