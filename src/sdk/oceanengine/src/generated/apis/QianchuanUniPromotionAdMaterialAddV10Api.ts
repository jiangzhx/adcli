// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanUniPromotionAdMaterialAddV10Request, QianchuanUniPromotionAdMaterialAddV10Response } from "../models";


export class QianchuanUniPromotionAdMaterialAddV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAdMaterialAddPost(qianchuanUniPromotionAdMaterialAddV10Request: QianchuanUniPromotionAdMaterialAddV10Request): Promise<QianchuanUniPromotionAdMaterialAddV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdMaterialAddPostWithHttpInfo(qianchuanUniPromotionAdMaterialAddV10Request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdMaterialAddPostWithHttpInfo(qianchuanUniPromotionAdMaterialAddV10Request: QianchuanUniPromotionAdMaterialAddV10Request): Promise<ApiResponse<QianchuanUniPromotionAdMaterialAddV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdMaterialAddV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/material/add/",
      queryParams: [

      ],
      body: qianchuanUniPromotionAdMaterialAddV10Request
    });
  }
}


