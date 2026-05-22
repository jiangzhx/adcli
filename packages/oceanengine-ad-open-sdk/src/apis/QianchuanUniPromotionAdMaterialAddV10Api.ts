// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanUniPromotionAdMaterialAddV10Request, QianchuanUniPromotionAdMaterialAddV10Response } from "../models";


export interface OpenApiV10QianchuanUniPromotionAdMaterialAddPostRequest {
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

  async openApiV10QianchuanUniPromotionAdMaterialAddPost(request: OpenApiV10QianchuanUniPromotionAdMaterialAddPostRequest): Promise<QianchuanUniPromotionAdMaterialAddV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdMaterialAddPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdMaterialAddPostWithHttpInfo(request: OpenApiV10QianchuanUniPromotionAdMaterialAddPostRequest): Promise<ApiResponse<QianchuanUniPromotionAdMaterialAddV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdMaterialAddV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/material/add/",
      queryParams: [

      ],
      body: request.qianchuanUniPromotionAdMaterialAddV10Request
    });
  }
}


