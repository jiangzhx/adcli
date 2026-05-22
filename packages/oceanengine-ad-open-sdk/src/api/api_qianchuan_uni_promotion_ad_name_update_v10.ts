// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_uni_promotion_ad_name_update_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanUniPromotionAdNameUpdateV10Request, QianchuanUniPromotionAdNameUpdateV10Response } from "../models/index";


export interface QianchuanUniPromotionAdNameUpdateV10ApiOpenApiV10QianchuanUniPromotionAdNameUpdatePostRequest {
  qianchuanUniPromotionAdNameUpdateV10Request?: QianchuanUniPromotionAdNameUpdateV10Request;
}

export class QianchuanUniPromotionAdNameUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAdNameUpdatePost(request: QianchuanUniPromotionAdNameUpdateV10ApiOpenApiV10QianchuanUniPromotionAdNameUpdatePostRequest): Promise<QianchuanUniPromotionAdNameUpdateV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdNameUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdNameUpdatePostWithHttpInfo(request: QianchuanUniPromotionAdNameUpdateV10ApiOpenApiV10QianchuanUniPromotionAdNameUpdatePostRequest): Promise<ApiResponse<QianchuanUniPromotionAdNameUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdNameUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/name/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanUniPromotionAdNameUpdateV10Request
    });
  }
}


