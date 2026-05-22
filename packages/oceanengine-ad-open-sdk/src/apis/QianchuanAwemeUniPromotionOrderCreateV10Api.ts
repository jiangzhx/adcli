// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAwemeUniPromotionOrderCreateV10Request, QianchuanAwemeUniPromotionOrderCreateV10Response } from "../models";


export class QianchuanAwemeUniPromotionOrderCreateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeUniPromotionOrderCreatePost(request: QianchuanAwemeUniPromotionOrderCreateV10Request): Promise<QianchuanAwemeUniPromotionOrderCreateV10Response> {
    const response = await this.openApiV10QianchuanAwemeUniPromotionOrderCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeUniPromotionOrderCreatePostWithHttpInfo(request: QianchuanAwemeUniPromotionOrderCreateV10Request): Promise<ApiResponse<QianchuanAwemeUniPromotionOrderCreateV10Response>> {
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeUniPromotionOrderCreateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/aweme/uni_promotion/order/create/",
      queryParams: [

      ],
      body: request
    });
  }
}


