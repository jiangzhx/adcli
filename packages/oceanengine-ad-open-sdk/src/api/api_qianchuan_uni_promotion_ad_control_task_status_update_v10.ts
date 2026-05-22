// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_uni_promotion_ad_control_task_status_update_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanUniPromotionAdControlTaskStatusUpdateV10Request, QianchuanUniPromotionAdControlTaskStatusUpdateV10Response } from "../models/index";


export interface QianchuanUniPromotionAdControlTaskStatusUpdateV10ApiOpenApiV10QianchuanUniPromotionAdControlTaskStatusUpdatePostRequest {
  qianchuanUniPromotionAdControlTaskStatusUpdateV10Request?: QianchuanUniPromotionAdControlTaskStatusUpdateV10Request;
}

export class QianchuanUniPromotionAdControlTaskStatusUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAdControlTaskStatusUpdatePost(request: QianchuanUniPromotionAdControlTaskStatusUpdateV10ApiOpenApiV10QianchuanUniPromotionAdControlTaskStatusUpdatePostRequest): Promise<QianchuanUniPromotionAdControlTaskStatusUpdateV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdControlTaskStatusUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdControlTaskStatusUpdatePostWithHttpInfo(request: QianchuanUniPromotionAdControlTaskStatusUpdateV10ApiOpenApiV10QianchuanUniPromotionAdControlTaskStatusUpdatePostRequest): Promise<ApiResponse<QianchuanUniPromotionAdControlTaskStatusUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdControlTaskStatusUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/control_task/status/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanUniPromotionAdControlTaskStatusUpdateV10Request
    });
  }
}


