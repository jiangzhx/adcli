// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanUniAwemeAdCreateV10Request, QianchuanUniAwemeAdCreateV10Response } from "../models";


export interface OpenApiV10QianchuanUniAwemeAdCreatePostRequest {
  qianchuanUniAwemeAdCreateV10Request?: QianchuanUniAwemeAdCreateV10Request;
}

export class QianchuanUniAwemeAdCreateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniAwemeAdCreatePost(request: OpenApiV10QianchuanUniAwemeAdCreatePostRequest): Promise<QianchuanUniAwemeAdCreateV10Response> {
    const response = await this.openApiV10QianchuanUniAwemeAdCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniAwemeAdCreatePostWithHttpInfo(request: OpenApiV10QianchuanUniAwemeAdCreatePostRequest): Promise<ApiResponse<QianchuanUniAwemeAdCreateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanUniAwemeAdCreateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_aweme/ad/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanUniAwemeAdCreateV10Request
    });
  }
}


