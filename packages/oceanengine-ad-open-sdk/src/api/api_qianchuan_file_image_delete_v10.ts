// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_file_image_delete_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanFileImageDeleteV10Request, QianchuanFileImageDeleteV10Response } from "../models/index";


export interface QianchuanFileImageDeleteV10ApiOpenApiV10QianchuanFileImageDeletePostRequest {
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

  async openApiV10QianchuanFileImageDeletePost(request: QianchuanFileImageDeleteV10ApiOpenApiV10QianchuanFileImageDeletePostRequest): Promise<QianchuanFileImageDeleteV10Response> {
    const response = await this.openApiV10QianchuanFileImageDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanFileImageDeletePostWithHttpInfo(request: QianchuanFileImageDeleteV10ApiOpenApiV10QianchuanFileImageDeletePostRequest): Promise<ApiResponse<QianchuanFileImageDeleteV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanFileImageDeleteV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/file/image/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanFileImageDeleteV10Request
    });
  }
}


