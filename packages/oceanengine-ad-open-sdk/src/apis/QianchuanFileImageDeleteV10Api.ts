// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanFileImageDeleteV10Request, QianchuanFileImageDeleteV10Response } from "../models";


export class QianchuanFileImageDeleteV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanFileImageDeletePost(qianchuanFileImageDeleteV10Request: QianchuanFileImageDeleteV10Request): Promise<QianchuanFileImageDeleteV10Response> {
    const response = await this.openApiV10QianchuanFileImageDeletePostWithHttpInfo(qianchuanFileImageDeleteV10Request);
    return response.data;
  }

  async openApiV10QianchuanFileImageDeletePostWithHttpInfo(qianchuanFileImageDeleteV10Request: QianchuanFileImageDeleteV10Request): Promise<ApiResponse<QianchuanFileImageDeleteV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanFileImageDeleteV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/file/image/delete/",
      queryParams: [

      ],
      body: qianchuanFileImageDeleteV10Request
    });
  }
}


