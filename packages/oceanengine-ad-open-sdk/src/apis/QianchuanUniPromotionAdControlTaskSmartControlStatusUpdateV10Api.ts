// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanUniPromotionAdControlTaskSmartControlStatusUpdateV10Request, QianchuanUniPromotionAdControlTaskSmartControlStatusUpdateV10Response } from "../models";


export interface OpenApiV10QianchuanUniPromotionAdControlTaskSmartControlStatusUpdatePostRequest {
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

  async openApiV10QianchuanUniPromotionAdControlTaskSmartControlStatusUpdatePost(request: OpenApiV10QianchuanUniPromotionAdControlTaskSmartControlStatusUpdatePostRequest): Promise<QianchuanUniPromotionAdControlTaskSmartControlStatusUpdateV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdControlTaskSmartControlStatusUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdControlTaskSmartControlStatusUpdatePostWithHttpInfo(request: OpenApiV10QianchuanUniPromotionAdControlTaskSmartControlStatusUpdatePostRequest): Promise<ApiResponse<QianchuanUniPromotionAdControlTaskSmartControlStatusUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdControlTaskSmartControlStatusUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/control_task/smart_control/status/update/",
      queryParams: [

      ],
      body: request.qianchuanUniPromotionAdControlTaskSmartControlStatusUpdateV10Request
    });
  }
}


