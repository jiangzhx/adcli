// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanUniPromotionAdControlTaskUpdateV10Request, QianchuanUniPromotionAdControlTaskUpdateV10Response } from "../models";


export class QianchuanUniPromotionAdControlTaskUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAdControlTaskUpdatePost(qianchuanUniPromotionAdControlTaskUpdateV10Request: QianchuanUniPromotionAdControlTaskUpdateV10Request): Promise<QianchuanUniPromotionAdControlTaskUpdateV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdControlTaskUpdatePostWithHttpInfo(qianchuanUniPromotionAdControlTaskUpdateV10Request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdControlTaskUpdatePostWithHttpInfo(qianchuanUniPromotionAdControlTaskUpdateV10Request: QianchuanUniPromotionAdControlTaskUpdateV10Request): Promise<ApiResponse<QianchuanUniPromotionAdControlTaskUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdControlTaskUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/control_task/update/",
      queryParams: [

      ],
      body: qianchuanUniPromotionAdControlTaskUpdateV10Request
    });
  }
}


