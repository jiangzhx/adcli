// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAdBidUpdateV10Request, QianchuanAdBidUpdateV10Response } from "../models";


export interface OpenApiV10QianchuanAdBidUpdatePostRequest {
  qianchuanAdBidUpdateV10Request?: QianchuanAdBidUpdateV10Request;
}

export class QianchuanAdBidUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdBidUpdatePost(request: OpenApiV10QianchuanAdBidUpdatePostRequest): Promise<QianchuanAdBidUpdateV10Response> {
    const response = await this.openApiV10QianchuanAdBidUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAdBidUpdatePostWithHttpInfo(request: OpenApiV10QianchuanAdBidUpdatePostRequest): Promise<ApiResponse<QianchuanAdBidUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAdBidUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/ad/bid/update/",
      queryParams: [

      ],
      body: request.qianchuanAdBidUpdateV10Request
    });
  }
}


