// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_ad_status_update_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAdStatusUpdateV10Request, QianchuanAdStatusUpdateV10Response } from "../models/index";


export interface QianchuanAdStatusUpdateV10ApiOpenApiV10QianchuanAdStatusUpdatePostRequest {
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

  async openApiV10QianchuanAdStatusUpdatePost(request: QianchuanAdStatusUpdateV10ApiOpenApiV10QianchuanAdStatusUpdatePostRequest): Promise<QianchuanAdStatusUpdateV10Response> {
    const response = await this.openApiV10QianchuanAdStatusUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAdStatusUpdatePostWithHttpInfo(request: QianchuanAdStatusUpdateV10ApiOpenApiV10QianchuanAdStatusUpdatePostRequest): Promise<ApiResponse<QianchuanAdStatusUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAdStatusUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/ad/status/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanAdStatusUpdateV10Request
    });
  }
}


