// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_uni_promotion_ad_control_task_smart_control_status_update_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanUniPromotionAdControlTaskSmartControlStatusUpdateV10Request, QianchuanUniPromotionAdControlTaskSmartControlStatusUpdateV10Response } from "../models/index";


export interface QianchuanUniPromotionAdControlTaskSmartControlStatusUpdateV10ApiOpenApiV10QianchuanUniPromotionAdControlTaskSmartControlStatusUpdatePostRequest {
  qianchuanUniPromotionAdControlTaskSmartControlStatusUpdateV10Request?: QianchuanUniPromotionAdControlTaskSmartControlStatusUpdateV10Request;
}

export class QianchuanUniPromotionAdControlTaskSmartControlStatusUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAdControlTaskSmartControlStatusUpdatePost(request: QianchuanUniPromotionAdControlTaskSmartControlStatusUpdateV10ApiOpenApiV10QianchuanUniPromotionAdControlTaskSmartControlStatusUpdatePostRequest): Promise<QianchuanUniPromotionAdControlTaskSmartControlStatusUpdateV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdControlTaskSmartControlStatusUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdControlTaskSmartControlStatusUpdatePostWithHttpInfo(request: QianchuanUniPromotionAdControlTaskSmartControlStatusUpdateV10ApiOpenApiV10QianchuanUniPromotionAdControlTaskSmartControlStatusUpdatePostRequest): Promise<ApiResponse<QianchuanUniPromotionAdControlTaskSmartControlStatusUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdControlTaskSmartControlStatusUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/control_task/smart_control/status/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanUniPromotionAdControlTaskSmartControlStatusUpdateV10Request
    });
  }
}


