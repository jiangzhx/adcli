// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanUniPromotionAdControlTaskSmartControlCreateV10Request, QianchuanUniPromotionAdControlTaskSmartControlCreateV10Response } from "../models";


export class QianchuanUniPromotionAdControlTaskSmartControlCreateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAdControlTaskSmartControlCreatePost(qianchuanUniPromotionAdControlTaskSmartControlCreateV10Request: QianchuanUniPromotionAdControlTaskSmartControlCreateV10Request): Promise<QianchuanUniPromotionAdControlTaskSmartControlCreateV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdControlTaskSmartControlCreatePostWithHttpInfo(qianchuanUniPromotionAdControlTaskSmartControlCreateV10Request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdControlTaskSmartControlCreatePostWithHttpInfo(qianchuanUniPromotionAdControlTaskSmartControlCreateV10Request: QianchuanUniPromotionAdControlTaskSmartControlCreateV10Request): Promise<ApiResponse<QianchuanUniPromotionAdControlTaskSmartControlCreateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdControlTaskSmartControlCreateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/control_task/smart_control/create/",
      queryParams: [

      ],
      body: qianchuanUniPromotionAdControlTaskSmartControlCreateV10Request
    });
  }
}


