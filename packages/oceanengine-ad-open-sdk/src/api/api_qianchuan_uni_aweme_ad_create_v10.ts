// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_uni_aweme_ad_create_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanUniAwemeAdCreateV10Request, QianchuanUniAwemeAdCreateV10Response } from "../models/index";


export interface QianchuanUniAwemeAdCreateV10ApiOpenApiV10QianchuanUniAwemeAdCreatePostRequest {
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

  async openApiV10QianchuanUniAwemeAdCreatePost(request: QianchuanUniAwemeAdCreateV10ApiOpenApiV10QianchuanUniAwemeAdCreatePostRequest): Promise<QianchuanUniAwemeAdCreateV10Response> {
    const response = await this.openApiV10QianchuanUniAwemeAdCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniAwemeAdCreatePostWithHttpInfo(request: QianchuanUniAwemeAdCreateV10ApiOpenApiV10QianchuanUniAwemeAdCreatePostRequest): Promise<ApiResponse<QianchuanUniAwemeAdCreateV10Response>> {

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


