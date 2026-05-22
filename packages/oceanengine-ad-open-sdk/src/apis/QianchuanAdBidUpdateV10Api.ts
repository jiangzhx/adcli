// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAdBidUpdateV10Request, QianchuanAdBidUpdateV10Response } from "../models";


export class QianchuanAdBidUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdBidUpdatePost(qianchuanAdBidUpdateV10Request: QianchuanAdBidUpdateV10Request): Promise<QianchuanAdBidUpdateV10Response> {
    const response = await this.openApiV10QianchuanAdBidUpdatePostWithHttpInfo(qianchuanAdBidUpdateV10Request);
    return response.data;
  }

  async openApiV10QianchuanAdBidUpdatePostWithHttpInfo(qianchuanAdBidUpdateV10Request: QianchuanAdBidUpdateV10Request): Promise<ApiResponse<QianchuanAdBidUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAdBidUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/ad/bid/update/",
      queryParams: [

      ],
      body: qianchuanAdBidUpdateV10Request
    });
  }
}


