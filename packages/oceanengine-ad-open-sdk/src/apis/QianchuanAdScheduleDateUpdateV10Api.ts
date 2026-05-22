// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAdScheduleDateUpdateV10Request, QianchuanAdScheduleDateUpdateV10Response } from "../models";


export interface OpenApiV10QianchuanAdScheduleDateUpdatePostRequest {
  qianchuanAdScheduleDateUpdateV10Request?: QianchuanAdScheduleDateUpdateV10Request;
}

export class QianchuanAdScheduleDateUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdScheduleDateUpdatePost(request: OpenApiV10QianchuanAdScheduleDateUpdatePostRequest): Promise<QianchuanAdScheduleDateUpdateV10Response> {
    const response = await this.openApiV10QianchuanAdScheduleDateUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAdScheduleDateUpdatePostWithHttpInfo(request: OpenApiV10QianchuanAdScheduleDateUpdatePostRequest): Promise<ApiResponse<QianchuanAdScheduleDateUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAdScheduleDateUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/ad/schedule_date/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanAdScheduleDateUpdateV10Request
    });
  }
}


