// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_ad_update_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAdUpdateV10Request, QianchuanAdUpdateV10Response } from "../models/index";


export interface QianchuanAdUpdateV10ApiOpenApiV10QianchuanAdUpdatePostRequest {
  qianchuanAdUpdateV10Request?: QianchuanAdUpdateV10Request;
}

export class QianchuanAdUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdUpdatePost(request: QianchuanAdUpdateV10ApiOpenApiV10QianchuanAdUpdatePostRequest): Promise<QianchuanAdUpdateV10Response> {
    const response = await this.openApiV10QianchuanAdUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAdUpdatePostWithHttpInfo(request: QianchuanAdUpdateV10ApiOpenApiV10QianchuanAdUpdatePostRequest): Promise<ApiResponse<QianchuanAdUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAdUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/ad/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanAdUpdateV10Request
    });
  }
}


