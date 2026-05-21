// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanAwemeOrderTerminateV10Request, QianchuanAwemeOrderTerminateV10Response } from "../models";


export class QianchuanAwemeOrderTerminateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeOrderTerminatePost(qianchuanAwemeOrderTerminateV10Request: QianchuanAwemeOrderTerminateV10Request): Promise<QianchuanAwemeOrderTerminateV10Response> {
    const response = await this.openApiV10QianchuanAwemeOrderTerminatePostWithHttpInfo(qianchuanAwemeOrderTerminateV10Request);
    return response.data;
  }

  async openApiV10QianchuanAwemeOrderTerminatePostWithHttpInfo(qianchuanAwemeOrderTerminateV10Request: QianchuanAwemeOrderTerminateV10Request): Promise<ApiResponse<QianchuanAwemeOrderTerminateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAwemeOrderTerminateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/aweme/order/terminate/",
      queryParams: [

      ],
      body: qianchuanAwemeOrderTerminateV10Request
    });
  }
}


