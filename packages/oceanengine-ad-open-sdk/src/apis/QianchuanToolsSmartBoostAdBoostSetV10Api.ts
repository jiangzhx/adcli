// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanToolsSmartBoostAdBoostSetV10Request, QianchuanToolsSmartBoostAdBoostSetV10Response } from "../models";


export class QianchuanToolsSmartBoostAdBoostSetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanToolsSmartBoostAdBoostSetPost(request: QianchuanToolsSmartBoostAdBoostSetV10Request): Promise<QianchuanToolsSmartBoostAdBoostSetV10Response> {
    const response = await this.openApiV10QianchuanToolsSmartBoostAdBoostSetPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanToolsSmartBoostAdBoostSetPostWithHttpInfo(request: QianchuanToolsSmartBoostAdBoostSetV10Request): Promise<ApiResponse<QianchuanToolsSmartBoostAdBoostSetV10Response>> {
    return this.apiClient.requestWithHttpInfo<QianchuanToolsSmartBoostAdBoostSetV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/tools/smart_boost/ad_boost/set/",
      queryParams: [

      ],
      body: request
    });
  }
}


