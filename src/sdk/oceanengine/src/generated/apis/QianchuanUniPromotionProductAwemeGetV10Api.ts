// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanUniPromotionProductAwemeGetV10Filtering, QianchuanUniPromotionProductAwemeGetV10Platform, QianchuanUniPromotionProductAwemeGetV10Response } from "../models";


export class QianchuanUniPromotionProductAwemeGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionProductAwemeGetGet(advertiserId: number, awemeId: number, filtering: QianchuanUniPromotionProductAwemeGetV10Filtering, cursor: number, platform: QianchuanUniPromotionProductAwemeGetV10Platform): Promise<QianchuanUniPromotionProductAwemeGetV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionProductAwemeGetGetWithHttpInfo(advertiserId, awemeId, filtering, cursor, platform);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionProductAwemeGetGetWithHttpInfo(advertiserId: number, awemeId: number, filtering: QianchuanUniPromotionProductAwemeGetV10Filtering, cursor: number, platform: QianchuanUniPromotionProductAwemeGetV10Platform): Promise<ApiResponse<QianchuanUniPromotionProductAwemeGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanUniPromotionProductAwemeGetGet");
    }

    if (awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanUniPromotionProductAwemeGetGet");
    }

    if (filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV10QianchuanUniPromotionProductAwemeGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionProductAwemeGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/uni_promotion/product/aweme/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "aweme_id", value: awemeId },
        { name: "filtering", value: filtering },
        { name: "cursor", value: cursor },
        { name: "platform", value: platform }
      ]
    });
  }
}


