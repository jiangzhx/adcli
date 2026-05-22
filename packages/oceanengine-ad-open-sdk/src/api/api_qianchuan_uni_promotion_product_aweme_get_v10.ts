// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_uni_promotion_product_aweme_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanUniPromotionProductAwemeGetV10Filtering, QianchuanUniPromotionProductAwemeGetV10Platform, QianchuanUniPromotionProductAwemeGetV10Response } from "../models/index";


export interface QianchuanUniPromotionProductAwemeGetV10ApiOpenApiV10QianchuanUniPromotionProductAwemeGetGetRequest {
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

  async openApiV10QianchuanUniPromotionProductAwemeGetGet(request: QianchuanUniPromotionProductAwemeGetV10ApiOpenApiV10QianchuanUniPromotionProductAwemeGetGetRequest): Promise<QianchuanUniPromotionProductAwemeGetV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionProductAwemeGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionProductAwemeGetGetWithHttpInfo(request: QianchuanUniPromotionProductAwemeGetV10ApiOpenApiV10QianchuanUniPromotionProductAwemeGetGetRequest): Promise<ApiResponse<QianchuanUniPromotionProductAwemeGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.awemeId == null) {
      throw new ApiException("awemeId is required and must be specified");
    }

    if (request.awemeId != null && Number(request.awemeId) < 0) {
      throw new ApiException("awemeId must be greater than 0");
    }

    if (request.filtering == null) {
      throw new ApiException("filtering is required and must be specified");
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


