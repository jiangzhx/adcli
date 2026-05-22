// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanUniAwemeAdUpdateV10Request, QianchuanUniAwemeAdUpdateV10Response } from "../models";


export interface OpenApiV10QianchuanUniAwemeAdUpdatePostRequest {
  qianchuanUniAwemeAdUpdateV10Request?: QianchuanUniAwemeAdUpdateV10Request;
}

export class QianchuanUniAwemeAdUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniAwemeAdUpdatePost(request: OpenApiV10QianchuanUniAwemeAdUpdatePostRequest): Promise<QianchuanUniAwemeAdUpdateV10Response> {
    const response = await this.openApiV10QianchuanUniAwemeAdUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniAwemeAdUpdatePostWithHttpInfo(request: OpenApiV10QianchuanUniAwemeAdUpdatePostRequest): Promise<ApiResponse<QianchuanUniAwemeAdUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanUniAwemeAdUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_aweme/ad/update/",
      queryParams: [

      ],
      body: request.qianchuanUniAwemeAdUpdateV10Request
    });
  }
}


