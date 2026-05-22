// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanUniPromotionAdMaterialDeleteV10Request, QianchuanUniPromotionAdMaterialDeleteV10Response } from "../models";


export class QianchuanUniPromotionAdMaterialDeleteV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAdMaterialDeletePost(qianchuanUniPromotionAdMaterialDeleteV10Request: QianchuanUniPromotionAdMaterialDeleteV10Request): Promise<QianchuanUniPromotionAdMaterialDeleteV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdMaterialDeletePostWithHttpInfo(qianchuanUniPromotionAdMaterialDeleteV10Request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdMaterialDeletePostWithHttpInfo(qianchuanUniPromotionAdMaterialDeleteV10Request: QianchuanUniPromotionAdMaterialDeleteV10Request): Promise<ApiResponse<QianchuanUniPromotionAdMaterialDeleteV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdMaterialDeleteV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/material/delete/",
      queryParams: [

      ],
      body: qianchuanUniPromotionAdMaterialDeleteV10Request
    });
  }
}


