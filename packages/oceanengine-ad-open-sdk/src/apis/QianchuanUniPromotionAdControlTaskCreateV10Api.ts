// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanUniPromotionAdControlTaskCreateV10Request, QianchuanUniPromotionAdControlTaskCreateV10Response } from "../models";


export interface OpenApiV10QianchuanUniPromotionAdControlTaskCreatePostRequest {
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

  async openApiV10QianchuanUniPromotionAdControlTaskCreatePost(request: OpenApiV10QianchuanUniPromotionAdControlTaskCreatePostRequest): Promise<QianchuanUniPromotionAdControlTaskCreateV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdControlTaskCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdControlTaskCreatePostWithHttpInfo(request: OpenApiV10QianchuanUniPromotionAdControlTaskCreatePostRequest): Promise<ApiResponse<QianchuanUniPromotionAdControlTaskCreateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdControlTaskCreateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/control_task/create/",
      queryParams: [

      ],
      body: request.qianchuanUniPromotionAdControlTaskCreateV10Request
    });
  }
}


