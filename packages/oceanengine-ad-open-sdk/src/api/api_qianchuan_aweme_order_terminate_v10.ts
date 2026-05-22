// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_aweme_order_terminate_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAwemeOrderTerminateV10Request, QianchuanAwemeOrderTerminateV10Response } from "../models/index";


export interface QianchuanAwemeOrderTerminateV10ApiOpenApiV10QianchuanAwemeOrderTerminatePostRequest {
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

  async openApiV10QianchuanAwemeOrderTerminatePost(request: QianchuanAwemeOrderTerminateV10ApiOpenApiV10QianchuanAwemeOrderTerminatePostRequest): Promise<QianchuanAwemeOrderTerminateV10Response> {
    const response = await this.openApiV10QianchuanAwemeOrderTerminatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeOrderTerminatePostWithHttpInfo(request: QianchuanAwemeOrderTerminateV10ApiOpenApiV10QianchuanAwemeOrderTerminatePostRequest): Promise<ApiResponse<QianchuanAwemeOrderTerminateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAwemeOrderTerminateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/aweme/order/terminate/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanAwemeOrderTerminateV10Request
    });
  }
}


