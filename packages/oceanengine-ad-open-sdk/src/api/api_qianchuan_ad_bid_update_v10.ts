// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_ad_bid_update_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAdBidUpdateV10Request, QianchuanAdBidUpdateV10Response } from "../models/index";


export interface QianchuanAdBidUpdateV10ApiOpenApiV10QianchuanAdBidUpdatePostRequest {
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

  async openApiV10QianchuanAdBidUpdatePost(request: QianchuanAdBidUpdateV10ApiOpenApiV10QianchuanAdBidUpdatePostRequest): Promise<QianchuanAdBidUpdateV10Response> {
    const response = await this.openApiV10QianchuanAdBidUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAdBidUpdatePostWithHttpInfo(request: QianchuanAdBidUpdateV10ApiOpenApiV10QianchuanAdBidUpdatePostRequest): Promise<ApiResponse<QianchuanAdBidUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAdBidUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/ad/bid/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanAdBidUpdateV10Request
    });
  }
}


