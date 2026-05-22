// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_uni_promotion_ad_control_task_create_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanUniPromotionAdControlTaskCreateV10Request, QianchuanUniPromotionAdControlTaskCreateV10Response } from "../models/index";


export interface QianchuanUniPromotionAdControlTaskCreateV10ApiOpenApiV10QianchuanUniPromotionAdControlTaskCreatePostRequest {
  qianchuanUniPromotionAdControlTaskCreateV10Request?: QianchuanUniPromotionAdControlTaskCreateV10Request;
}

export class QianchuanUniPromotionAdControlTaskCreateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAdControlTaskCreatePost(request: QianchuanUniPromotionAdControlTaskCreateV10ApiOpenApiV10QianchuanUniPromotionAdControlTaskCreatePostRequest): Promise<QianchuanUniPromotionAdControlTaskCreateV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdControlTaskCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdControlTaskCreatePostWithHttpInfo(request: QianchuanUniPromotionAdControlTaskCreateV10ApiOpenApiV10QianchuanUniPromotionAdControlTaskCreatePostRequest): Promise<ApiResponse<QianchuanUniPromotionAdControlTaskCreateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdControlTaskCreateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/control_task/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanUniPromotionAdControlTaskCreateV10Request
    });
  }
}


