// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAwemeOrderCreateV10Request, QianchuanAwemeOrderCreateV10Response } from "../models";


export interface OpenApiV10QianchuanAwemeOrderCreatePostRequest {
  qianchuanAwemeOrderCreateV10Request?: QianchuanAwemeOrderCreateV10Request;
}

export class QianchuanAwemeOrderCreateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeOrderCreatePost(request: OpenApiV10QianchuanAwemeOrderCreatePostRequest): Promise<QianchuanAwemeOrderCreateV10Response> {
    const response = await this.openApiV10QianchuanAwemeOrderCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeOrderCreatePostWithHttpInfo(request: OpenApiV10QianchuanAwemeOrderCreatePostRequest): Promise<ApiResponse<QianchuanAwemeOrderCreateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAwemeOrderCreateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/aweme/order/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanAwemeOrderCreateV10Request
    });
  }
}


