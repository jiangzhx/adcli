// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanUniPromotionAdNameUpdateV10Request, QianchuanUniPromotionAdNameUpdateV10Response } from "../models";


export interface OpenApiV10QianchuanUniPromotionAdNameUpdatePostRequest {
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

  async openApiV10QianchuanUniPromotionAdNameUpdatePost(request: OpenApiV10QianchuanUniPromotionAdNameUpdatePostRequest): Promise<QianchuanUniPromotionAdNameUpdateV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdNameUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdNameUpdatePostWithHttpInfo(request: OpenApiV10QianchuanUniPromotionAdNameUpdatePostRequest): Promise<ApiResponse<QianchuanUniPromotionAdNameUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdNameUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/name/update/",
      queryParams: [

      ],
      body: request.qianchuanUniPromotionAdNameUpdateV10Request
    });
  }
}


