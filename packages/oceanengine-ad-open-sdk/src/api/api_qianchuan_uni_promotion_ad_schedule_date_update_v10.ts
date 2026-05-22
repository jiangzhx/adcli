// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_uni_promotion_ad_schedule_date_update_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanUniPromotionAdScheduleDateUpdateV10Request, QianchuanUniPromotionAdScheduleDateUpdateV10Response } from "../models/index";


export interface QianchuanUniPromotionAdScheduleDateUpdateV10ApiOpenApiV10QianchuanUniPromotionAdScheduleDateUpdatePostRequest {
  qianchuanUniPromotionAdScheduleDateUpdateV10Request?: QianchuanUniPromotionAdScheduleDateUpdateV10Request;
}

export class QianchuanUniPromotionAdScheduleDateUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAdScheduleDateUpdatePost(request: QianchuanUniPromotionAdScheduleDateUpdateV10ApiOpenApiV10QianchuanUniPromotionAdScheduleDateUpdatePostRequest): Promise<QianchuanUniPromotionAdScheduleDateUpdateV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdScheduleDateUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdScheduleDateUpdatePostWithHttpInfo(request: QianchuanUniPromotionAdScheduleDateUpdateV10ApiOpenApiV10QianchuanUniPromotionAdScheduleDateUpdatePostRequest): Promise<ApiResponse<QianchuanUniPromotionAdScheduleDateUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdScheduleDateUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/schedule_date/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanUniPromotionAdScheduleDateUpdateV10Request
    });
  }
}


