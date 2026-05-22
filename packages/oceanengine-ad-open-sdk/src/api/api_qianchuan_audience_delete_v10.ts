// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_audience_delete_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAudienceDeleteV10Request, QianchuanAudienceDeleteV10Response } from "../models/index";


export interface QianchuanAudienceDeleteV10ApiOpenApiV10QianchuanAudienceDeletePostRequest {
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

  async openApiV10QianchuanAudienceDeletePost(request: QianchuanAudienceDeleteV10ApiOpenApiV10QianchuanAudienceDeletePostRequest): Promise<QianchuanAudienceDeleteV10Response> {
    const response = await this.openApiV10QianchuanAudienceDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAudienceDeletePostWithHttpInfo(request: QianchuanAudienceDeleteV10ApiOpenApiV10QianchuanAudienceDeletePostRequest): Promise<ApiResponse<QianchuanAudienceDeleteV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAudienceDeleteV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/audience/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanAudienceDeleteV10Request
    });
  }
}


