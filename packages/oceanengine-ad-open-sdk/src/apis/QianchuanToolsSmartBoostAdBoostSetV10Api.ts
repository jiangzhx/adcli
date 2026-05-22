// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanToolsSmartBoostAdBoostSetV10Request, QianchuanToolsSmartBoostAdBoostSetV10Response } from "../models";


export interface OpenApiV10QianchuanToolsSmartBoostAdBoostSetPostRequest {
  qianchuanToolsSmartBoostAdBoostSetV10Request?: QianchuanToolsSmartBoostAdBoostSetV10Request;
}

export class QianchuanToolsSmartBoostAdBoostSetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanToolsSmartBoostAdBoostSetPost(request: OpenApiV10QianchuanToolsSmartBoostAdBoostSetPostRequest): Promise<QianchuanToolsSmartBoostAdBoostSetV10Response> {
    const response = await this.openApiV10QianchuanToolsSmartBoostAdBoostSetPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanToolsSmartBoostAdBoostSetPostWithHttpInfo(request: OpenApiV10QianchuanToolsSmartBoostAdBoostSetPostRequest): Promise<ApiResponse<QianchuanToolsSmartBoostAdBoostSetV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanToolsSmartBoostAdBoostSetV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/tools/smart_boost/ad_boost/set/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanToolsSmartBoostAdBoostSetV10Request
    });
  }
}


