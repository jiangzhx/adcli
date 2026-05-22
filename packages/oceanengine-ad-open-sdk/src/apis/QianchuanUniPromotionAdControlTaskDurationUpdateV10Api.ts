// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanUniPromotionAdControlTaskDurationUpdateV10Request, QianchuanUniPromotionAdControlTaskDurationUpdateV10Response } from "../models";


export class QianchuanUniPromotionAdControlTaskDurationUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAdControlTaskDurationUpdatePost(request: QianchuanUniPromotionAdControlTaskDurationUpdateV10Request): Promise<QianchuanUniPromotionAdControlTaskDurationUpdateV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdControlTaskDurationUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdControlTaskDurationUpdatePostWithHttpInfo(request: QianchuanUniPromotionAdControlTaskDurationUpdateV10Request): Promise<ApiResponse<QianchuanUniPromotionAdControlTaskDurationUpdateV10Response>> {
    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdControlTaskDurationUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/control_task/duration/update/",
      queryParams: [

      ],
      body: request
    });
  }
}


