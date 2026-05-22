// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_uni_promotion_ad_control_task_update_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanUniPromotionAdControlTaskUpdateV10Request, QianchuanUniPromotionAdControlTaskUpdateV10Response } from "../models/index";


export interface QianchuanUniPromotionAdControlTaskUpdateV10ApiOpenApiV10QianchuanUniPromotionAdControlTaskUpdatePostRequest {
  qianchuanUniPromotionAdControlTaskUpdateV10Request?: QianchuanUniPromotionAdControlTaskUpdateV10Request;
}

export class QianchuanUniPromotionAdControlTaskUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAdControlTaskUpdatePost(request: QianchuanUniPromotionAdControlTaskUpdateV10ApiOpenApiV10QianchuanUniPromotionAdControlTaskUpdatePostRequest): Promise<QianchuanUniPromotionAdControlTaskUpdateV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdControlTaskUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdControlTaskUpdatePostWithHttpInfo(request: QianchuanUniPromotionAdControlTaskUpdateV10ApiOpenApiV10QianchuanUniPromotionAdControlTaskUpdatePostRequest): Promise<ApiResponse<QianchuanUniPromotionAdControlTaskUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdControlTaskUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/control_task/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanUniPromotionAdControlTaskUpdateV10Request
    });
  }
}


