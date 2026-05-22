// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_ad_create_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAdCreateV10Request, QianchuanAdCreateV10Response } from "../models/index";


export interface QianchuanAdCreateV10ApiOpenApiV10QianchuanAdCreatePostRequest {
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

  async openApiV10QianchuanAdCreatePost(request: QianchuanAdCreateV10ApiOpenApiV10QianchuanAdCreatePostRequest): Promise<QianchuanAdCreateV10Response> {
    const response = await this.openApiV10QianchuanAdCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAdCreatePostWithHttpInfo(request: QianchuanAdCreateV10ApiOpenApiV10QianchuanAdCreatePostRequest): Promise<ApiResponse<QianchuanAdCreateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAdCreateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/ad/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanAdCreateV10Request
    });
  }
}


