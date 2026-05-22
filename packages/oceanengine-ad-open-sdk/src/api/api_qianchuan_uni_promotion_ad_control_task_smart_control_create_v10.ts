// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_uni_promotion_ad_control_task_smart_control_create_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanUniPromotionAdControlTaskSmartControlCreateV10Request, QianchuanUniPromotionAdControlTaskSmartControlCreateV10Response } from "../models/index";


export interface QianchuanUniPromotionAdControlTaskSmartControlCreateV10ApiOpenApiV10QianchuanUniPromotionAdControlTaskSmartControlCreatePostRequest {
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

  async openApiV10QianchuanUniPromotionAdControlTaskSmartControlCreatePost(request: QianchuanUniPromotionAdControlTaskSmartControlCreateV10ApiOpenApiV10QianchuanUniPromotionAdControlTaskSmartControlCreatePostRequest): Promise<QianchuanUniPromotionAdControlTaskSmartControlCreateV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdControlTaskSmartControlCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdControlTaskSmartControlCreatePostWithHttpInfo(request: QianchuanUniPromotionAdControlTaskSmartControlCreateV10ApiOpenApiV10QianchuanUniPromotionAdControlTaskSmartControlCreatePostRequest): Promise<ApiResponse<QianchuanUniPromotionAdControlTaskSmartControlCreateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdControlTaskSmartControlCreateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/control_task/smart_control/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanUniPromotionAdControlTaskSmartControlCreateV10Request
    });
  }
}


