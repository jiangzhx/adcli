// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_audience_push_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAudiencePushV10Request, QianchuanAudiencePushV10Response } from "../models/index";


export interface QianchuanAudiencePushV10ApiOpenApiV10QianchuanAudiencePushPostRequest {
  qianchuanAudiencePushV10Request?: QianchuanAudiencePushV10Request;
}

export class QianchuanAudiencePushV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAudiencePushPost(request: QianchuanAudiencePushV10ApiOpenApiV10QianchuanAudiencePushPostRequest): Promise<QianchuanAudiencePushV10Response> {
    const response = await this.openApiV10QianchuanAudiencePushPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAudiencePushPostWithHttpInfo(request: QianchuanAudiencePushV10ApiOpenApiV10QianchuanAudiencePushPostRequest): Promise<ApiResponse<QianchuanAudiencePushV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAudiencePushV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/audience/push/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanAudiencePushV10Request
    });
  }
}


