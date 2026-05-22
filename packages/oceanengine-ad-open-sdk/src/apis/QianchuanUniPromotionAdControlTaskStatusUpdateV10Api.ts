// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanUniPromotionAdControlTaskStatusUpdateV10Request, QianchuanUniPromotionAdControlTaskStatusUpdateV10Response } from "../models";


export interface OpenApiV10QianchuanUniPromotionAdControlTaskStatusUpdatePostRequest {
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

  async openApiV10QianchuanUniPromotionAdControlTaskStatusUpdatePost(request: OpenApiV10QianchuanUniPromotionAdControlTaskStatusUpdatePostRequest): Promise<QianchuanUniPromotionAdControlTaskStatusUpdateV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdControlTaskStatusUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdControlTaskStatusUpdatePostWithHttpInfo(request: OpenApiV10QianchuanUniPromotionAdControlTaskStatusUpdatePostRequest): Promise<ApiResponse<QianchuanUniPromotionAdControlTaskStatusUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdControlTaskStatusUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/control_task/status/update/",
      queryParams: [

      ],
      body: request.qianchuanUniPromotionAdControlTaskStatusUpdateV10Request
    });
  }
}


