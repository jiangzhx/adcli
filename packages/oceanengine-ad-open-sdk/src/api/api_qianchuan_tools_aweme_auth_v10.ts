// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_tools_aweme_auth_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanToolsAwemeAuthV10Request, QianchuanToolsAwemeAuthV10Response } from "../models/index";


export interface QianchuanToolsAwemeAuthV10ApiOpenApiV10QianchuanToolsAwemeAuthPostRequest {
  qianchuanToolsAwemeAuthV10Request?: QianchuanToolsAwemeAuthV10Request;
}

export class QianchuanToolsAwemeAuthV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanToolsAwemeAuthPost(request: QianchuanToolsAwemeAuthV10ApiOpenApiV10QianchuanToolsAwemeAuthPostRequest): Promise<QianchuanToolsAwemeAuthV10Response> {
    const response = await this.openApiV10QianchuanToolsAwemeAuthPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanToolsAwemeAuthPostWithHttpInfo(request: QianchuanToolsAwemeAuthV10ApiOpenApiV10QianchuanToolsAwemeAuthPostRequest): Promise<ApiResponse<QianchuanToolsAwemeAuthV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanToolsAwemeAuthV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/tools/aweme_auth/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanToolsAwemeAuthV10Request
    });
  }
}


