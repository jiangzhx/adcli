// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanAwemeOrderCreateV10Request, QianchuanAwemeOrderCreateV10Response } from "../models";


export class QianchuanAwemeOrderCreateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeOrderCreatePost(qianchuanAwemeOrderCreateV10Request: QianchuanAwemeOrderCreateV10Request): Promise<QianchuanAwemeOrderCreateV10Response> {
    const response = await this.openApiV10QianchuanAwemeOrderCreatePostWithHttpInfo(qianchuanAwemeOrderCreateV10Request);
    return response.data;
  }

  async openApiV10QianchuanAwemeOrderCreatePostWithHttpInfo(qianchuanAwemeOrderCreateV10Request: QianchuanAwemeOrderCreateV10Request): Promise<ApiResponse<QianchuanAwemeOrderCreateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAwemeOrderCreateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/aweme/order/create/",
      queryParams: [

      ],
      body: qianchuanAwemeOrderCreateV10Request
    });
  }
}


