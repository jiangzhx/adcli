// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanUniPromotionAdControlTaskSmartControlCreateV10Request, QianchuanUniPromotionAdControlTaskSmartControlCreateV10Response } from "../models";


export interface OpenApiV10QianchuanUniPromotionAdControlTaskSmartControlCreatePostRequest {
  qianchuanUniPromotionAdControlTaskSmartControlCreateV10Request?: QianchuanUniPromotionAdControlTaskSmartControlCreateV10Request;
}

export class QianchuanUniPromotionAdControlTaskSmartControlCreateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAdControlTaskSmartControlCreatePost(request: OpenApiV10QianchuanUniPromotionAdControlTaskSmartControlCreatePostRequest): Promise<QianchuanUniPromotionAdControlTaskSmartControlCreateV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdControlTaskSmartControlCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdControlTaskSmartControlCreatePostWithHttpInfo(request: OpenApiV10QianchuanUniPromotionAdControlTaskSmartControlCreatePostRequest): Promise<ApiResponse<QianchuanUniPromotionAdControlTaskSmartControlCreateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdControlTaskSmartControlCreateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/control_task/smart_control/create/",
      queryParams: [

      ],
      body: request.qianchuanUniPromotionAdControlTaskSmartControlCreateV10Request
    });
  }
}


