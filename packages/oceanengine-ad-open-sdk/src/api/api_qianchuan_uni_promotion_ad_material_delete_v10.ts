// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_uni_promotion_ad_material_delete_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanUniPromotionAdMaterialDeleteV10Request, QianchuanUniPromotionAdMaterialDeleteV10Response } from "../models/index";


export interface QianchuanUniPromotionAdMaterialDeleteV10ApiOpenApiV10QianchuanUniPromotionAdMaterialDeletePostRequest {
  qianchuanUniPromotionAdMaterialDeleteV10Request?: QianchuanUniPromotionAdMaterialDeleteV10Request;
}

export class QianchuanUniPromotionAdMaterialDeleteV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAdMaterialDeletePost(request: QianchuanUniPromotionAdMaterialDeleteV10ApiOpenApiV10QianchuanUniPromotionAdMaterialDeletePostRequest): Promise<QianchuanUniPromotionAdMaterialDeleteV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdMaterialDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdMaterialDeletePostWithHttpInfo(request: QianchuanUniPromotionAdMaterialDeleteV10ApiOpenApiV10QianchuanUniPromotionAdMaterialDeletePostRequest): Promise<ApiResponse<QianchuanUniPromotionAdMaterialDeleteV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdMaterialDeleteV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/material/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanUniPromotionAdMaterialDeleteV10Request
    });
  }
}


