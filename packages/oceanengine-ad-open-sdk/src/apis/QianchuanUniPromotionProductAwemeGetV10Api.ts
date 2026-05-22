// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanUniPromotionProductAwemeGetV10Filtering, QianchuanUniPromotionProductAwemeGetV10Platform, QianchuanUniPromotionProductAwemeGetV10Response } from "../models";


export interface OpenApiV10QianchuanUniPromotionProductAwemeGetGetRequest {
  advertiserId: number | string;
  awemeId: number | string;
  filtering: QianchuanUniPromotionProductAwemeGetV10Filtering;
  cursor?: number;
  platform?: QianchuanUniPromotionProductAwemeGetV10Platform;
}

export class QianchuanUniPromotionProductAwemeGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionProductAwemeGetGet(request: OpenApiV10QianchuanUniPromotionProductAwemeGetGetRequest): Promise<QianchuanUniPromotionProductAwemeGetV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionProductAwemeGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionProductAwemeGetGetWithHttpInfo(request: OpenApiV10QianchuanUniPromotionProductAwemeGetGetRequest): Promise<ApiResponse<QianchuanUniPromotionProductAwemeGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanUniPromotionProductAwemeGetGet");
    }

    if (request.awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanUniPromotionProductAwemeGetGet");
    }

    if (request.filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV10QianchuanUniPromotionProductAwemeGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionProductAwemeGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/uni_promotion/product/aweme/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "aweme_id", value: request.awemeId },
        { name: "filtering", value: request.filtering },
        { name: "cursor", value: request.cursor },
        { name: "platform", value: request.platform }
      ]
    });
  }
}


