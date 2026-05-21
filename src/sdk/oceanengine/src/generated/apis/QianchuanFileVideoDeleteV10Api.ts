// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanFileVideoDeleteV10Request, QianchuanFileVideoDeleteV10Response } from "../models";


export class QianchuanFileVideoDeleteV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanFileVideoDeletePost(qianchuanFileVideoDeleteV10Request: QianchuanFileVideoDeleteV10Request): Promise<QianchuanFileVideoDeleteV10Response> {
    const response = await this.openApiV10QianchuanFileVideoDeletePostWithHttpInfo(qianchuanFileVideoDeleteV10Request);
    return response.data;
  }

  async openApiV10QianchuanFileVideoDeletePostWithHttpInfo(qianchuanFileVideoDeleteV10Request: QianchuanFileVideoDeleteV10Request): Promise<ApiResponse<QianchuanFileVideoDeleteV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanFileVideoDeleteV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/file/video/delete/",
      queryParams: [

      ],
      body: qianchuanFileVideoDeleteV10Request
    });
  }
}


