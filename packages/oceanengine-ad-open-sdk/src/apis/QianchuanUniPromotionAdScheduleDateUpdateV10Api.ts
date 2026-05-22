// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanUniPromotionAdScheduleDateUpdateV10Request, QianchuanUniPromotionAdScheduleDateUpdateV10Response } from "../models";


export class QianchuanUniPromotionAdScheduleDateUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAdScheduleDateUpdatePost(request: QianchuanUniPromotionAdScheduleDateUpdateV10Request): Promise<QianchuanUniPromotionAdScheduleDateUpdateV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdScheduleDateUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdScheduleDateUpdatePostWithHttpInfo(request: QianchuanUniPromotionAdScheduleDateUpdateV10Request): Promise<ApiResponse<QianchuanUniPromotionAdScheduleDateUpdateV10Response>> {
    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdScheduleDateUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/schedule_date/update/",
      queryParams: [

      ],
      body: request
    });
  }
}


