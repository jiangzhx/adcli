// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAwemeOrderTerminateV10Request, QianchuanAwemeOrderTerminateV10Response } from "../models";


export interface OpenApiV10QianchuanAwemeOrderTerminatePostRequest {
  qianchuanAwemeOrderTerminateV10Request?: QianchuanAwemeOrderTerminateV10Request;
}

export class QianchuanAwemeOrderTerminateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeOrderTerminatePost(request: OpenApiV10QianchuanAwemeOrderTerminatePostRequest): Promise<QianchuanAwemeOrderTerminateV10Response> {
    const response = await this.openApiV10QianchuanAwemeOrderTerminatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeOrderTerminatePostWithHttpInfo(request: OpenApiV10QianchuanAwemeOrderTerminatePostRequest): Promise<ApiResponse<QianchuanAwemeOrderTerminateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAwemeOrderTerminateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/aweme/order/terminate/",
      queryParams: [

      ],
      body: request.qianchuanAwemeOrderTerminateV10Request
    });
  }
}


