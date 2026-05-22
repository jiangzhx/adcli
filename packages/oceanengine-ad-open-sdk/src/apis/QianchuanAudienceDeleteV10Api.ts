// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAudienceDeleteV10Request, QianchuanAudienceDeleteV10Response } from "../models";


export interface OpenApiV10QianchuanAudienceDeletePostRequest {
  qianchuanAudienceDeleteV10Request?: QianchuanAudienceDeleteV10Request;
}

export class QianchuanAudienceDeleteV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAudienceDeletePost(request: OpenApiV10QianchuanAudienceDeletePostRequest): Promise<QianchuanAudienceDeleteV10Response> {
    const response = await this.openApiV10QianchuanAudienceDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAudienceDeletePostWithHttpInfo(request: OpenApiV10QianchuanAudienceDeletePostRequest): Promise<ApiResponse<QianchuanAudienceDeleteV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAudienceDeleteV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/audience/delete/",
      queryParams: [

      ],
      body: request.qianchuanAudienceDeleteV10Request
    });
  }
}


