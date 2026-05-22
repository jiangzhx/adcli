// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanUniPromotionAdRoi2GoalUpdateV10Request, QianchuanUniPromotionAdRoi2GoalUpdateV10Response } from "../models";


export class QianchuanUniPromotionAdRoi2GoalUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAdRoi2GoalUpdatePost(request: QianchuanUniPromotionAdRoi2GoalUpdateV10Request): Promise<QianchuanUniPromotionAdRoi2GoalUpdateV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdRoi2GoalUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdRoi2GoalUpdatePostWithHttpInfo(request: QianchuanUniPromotionAdRoi2GoalUpdateV10Request): Promise<ApiResponse<QianchuanUniPromotionAdRoi2GoalUpdateV10Response>> {
    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdRoi2GoalUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/roi2_goal/update/",
      queryParams: [

      ],
      body: request
    });
  }
}


