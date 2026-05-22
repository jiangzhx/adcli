// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_uni_promotion_ad_material_add_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanUniPromotionAdMaterialAddV10Request, QianchuanUniPromotionAdMaterialAddV10Response } from "../models/index";


export interface QianchuanUniPromotionAdMaterialAddV10ApiOpenApiV10QianchuanUniPromotionAdMaterialAddPostRequest {
  qianchuanUniPromotionAdMaterialAddV10Request?: QianchuanUniPromotionAdMaterialAddV10Request;
}

export class QianchuanUniPromotionAdMaterialAddV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAdMaterialAddPost(request: QianchuanUniPromotionAdMaterialAddV10ApiOpenApiV10QianchuanUniPromotionAdMaterialAddPostRequest): Promise<QianchuanUniPromotionAdMaterialAddV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdMaterialAddPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdMaterialAddPostWithHttpInfo(request: QianchuanUniPromotionAdMaterialAddV10ApiOpenApiV10QianchuanUniPromotionAdMaterialAddPostRequest): Promise<ApiResponse<QianchuanUniPromotionAdMaterialAddV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdMaterialAddV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/material/add/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanUniPromotionAdMaterialAddV10Request
    });
  }
}


