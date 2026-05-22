// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_uni_promotion_ad_roi2_goal_update_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanUniPromotionAdRoi2GoalUpdateV10Request, QianchuanUniPromotionAdRoi2GoalUpdateV10Response } from "../models/index";


export interface QianchuanUniPromotionAdRoi2GoalUpdateV10ApiOpenApiV10QianchuanUniPromotionAdRoi2GoalUpdatePostRequest {
  qianchuanUniPromotionAdRoi2GoalUpdateV10Request?: QianchuanUniPromotionAdRoi2GoalUpdateV10Request;
}

export class QianchuanUniPromotionAdRoi2GoalUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAdRoi2GoalUpdatePost(request: QianchuanUniPromotionAdRoi2GoalUpdateV10ApiOpenApiV10QianchuanUniPromotionAdRoi2GoalUpdatePostRequest): Promise<QianchuanUniPromotionAdRoi2GoalUpdateV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdRoi2GoalUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdRoi2GoalUpdatePostWithHttpInfo(request: QianchuanUniPromotionAdRoi2GoalUpdateV10ApiOpenApiV10QianchuanUniPromotionAdRoi2GoalUpdatePostRequest): Promise<ApiResponse<QianchuanUniPromotionAdRoi2GoalUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdRoi2GoalUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/roi2_goal/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanUniPromotionAdRoi2GoalUpdateV10Request
    });
  }
}


