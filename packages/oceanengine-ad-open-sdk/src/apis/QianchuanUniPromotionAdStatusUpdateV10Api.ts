// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanUniPromotionAdStatusUpdateV10Request, QianchuanUniPromotionAdStatusUpdateV10Response } from "../models";


export class QianchuanUniPromotionAdStatusUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAdStatusUpdatePost(request: QianchuanUniPromotionAdStatusUpdateV10Request): Promise<QianchuanUniPromotionAdStatusUpdateV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdStatusUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdStatusUpdatePostWithHttpInfo(request: QianchuanUniPromotionAdStatusUpdateV10Request): Promise<ApiResponse<QianchuanUniPromotionAdStatusUpdateV10Response>> {
    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdStatusUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/status/update/",
      queryParams: [

      ],
      body: request
    });
  }
}


