// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAdStatusUpdateV10Request, QianchuanAdStatusUpdateV10Response } from "../models";


export interface OpenApiV10QianchuanAdStatusUpdatePostRequest {
  qianchuanAdStatusUpdateV10Request?: QianchuanAdStatusUpdateV10Request;
}

export class QianchuanAdStatusUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdStatusUpdatePost(request: OpenApiV10QianchuanAdStatusUpdatePostRequest): Promise<QianchuanAdStatusUpdateV10Response> {
    const response = await this.openApiV10QianchuanAdStatusUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAdStatusUpdatePostWithHttpInfo(request: OpenApiV10QianchuanAdStatusUpdatePostRequest): Promise<ApiResponse<QianchuanAdStatusUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAdStatusUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/ad/status/update/",
      queryParams: [

      ],
      body: request.qianchuanAdStatusUpdateV10Request
    });
  }
}


