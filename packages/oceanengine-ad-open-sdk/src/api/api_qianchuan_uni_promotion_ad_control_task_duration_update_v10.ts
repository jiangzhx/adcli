// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_uni_promotion_ad_control_task_duration_update_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanUniPromotionAdControlTaskDurationUpdateV10Request, QianchuanUniPromotionAdControlTaskDurationUpdateV10Response } from "../models/index";


export interface QianchuanUniPromotionAdControlTaskDurationUpdateV10ApiOpenApiV10QianchuanUniPromotionAdControlTaskDurationUpdatePostRequest {
  qianchuanUniPromotionAdControlTaskDurationUpdateV10Request?: QianchuanUniPromotionAdControlTaskDurationUpdateV10Request;
}

export class QianchuanUniPromotionAdControlTaskDurationUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAdControlTaskDurationUpdatePost(request: QianchuanUniPromotionAdControlTaskDurationUpdateV10ApiOpenApiV10QianchuanUniPromotionAdControlTaskDurationUpdatePostRequest): Promise<QianchuanUniPromotionAdControlTaskDurationUpdateV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdControlTaskDurationUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdControlTaskDurationUpdatePostWithHttpInfo(request: QianchuanUniPromotionAdControlTaskDurationUpdateV10ApiOpenApiV10QianchuanUniPromotionAdControlTaskDurationUpdatePostRequest): Promise<ApiResponse<QianchuanUniPromotionAdControlTaskDurationUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdControlTaskDurationUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/control_task/duration/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanUniPromotionAdControlTaskDurationUpdateV10Request
    });
  }
}


