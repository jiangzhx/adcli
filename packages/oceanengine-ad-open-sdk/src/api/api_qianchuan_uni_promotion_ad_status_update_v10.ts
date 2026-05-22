// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_uni_promotion_ad_status_update_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanUniPromotionAdStatusUpdateV10Request, QianchuanUniPromotionAdStatusUpdateV10Response } from "../models/index";


export interface QianchuanUniPromotionAdStatusUpdateV10ApiOpenApiV10QianchuanUniPromotionAdStatusUpdatePostRequest {
  qianchuanUniPromotionAdStatusUpdateV10Request?: QianchuanUniPromotionAdStatusUpdateV10Request;
}

export class QianchuanUniPromotionAdStatusUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAdStatusUpdatePost(request: QianchuanUniPromotionAdStatusUpdateV10ApiOpenApiV10QianchuanUniPromotionAdStatusUpdatePostRequest): Promise<QianchuanUniPromotionAdStatusUpdateV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdStatusUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdStatusUpdatePostWithHttpInfo(request: QianchuanUniPromotionAdStatusUpdateV10ApiOpenApiV10QianchuanUniPromotionAdStatusUpdatePostRequest): Promise<ApiResponse<QianchuanUniPromotionAdStatusUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdStatusUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/status/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanUniPromotionAdStatusUpdateV10Request
    });
  }
}


