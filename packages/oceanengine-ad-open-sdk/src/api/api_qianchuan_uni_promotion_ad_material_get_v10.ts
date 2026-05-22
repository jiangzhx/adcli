// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_uni_promotion_ad_material_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanUniPromotionAdMaterialGetV10Filtering, QianchuanUniPromotionAdMaterialGetV10OrderType, QianchuanUniPromotionAdMaterialGetV10PageSize, QianchuanUniPromotionAdMaterialGetV10Response } from "../models/index";


export interface QianchuanUniPromotionAdMaterialGetV10ApiOpenApiV10QianchuanUniPromotionAdMaterialGetGetRequest {
  advertiserId: number | string;
  adId: number | string;
  filtering: QianchuanUniPromotionAdMaterialGetV10Filtering;
  fields?: string[];
  orderType?: QianchuanUniPromotionAdMaterialGetV10OrderType;
  orderField?: string;
  page?: number;
  pageSize?: QianchuanUniPromotionAdMaterialGetV10PageSize;
}

export class QianchuanUniPromotionAdMaterialGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAdMaterialGetGet(request: QianchuanUniPromotionAdMaterialGetV10ApiOpenApiV10QianchuanUniPromotionAdMaterialGetGetRequest): Promise<QianchuanUniPromotionAdMaterialGetV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdMaterialGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdMaterialGetGetWithHttpInfo(request: QianchuanUniPromotionAdMaterialGetV10ApiOpenApiV10QianchuanUniPromotionAdMaterialGetGetRequest): Promise<ApiResponse<QianchuanUniPromotionAdMaterialGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.adId == null) {
      throw new ApiException("adId is required and must be specified");
    }

    if (request.filtering == null) {
      throw new ApiException("filtering is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdMaterialGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/material/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "ad_id", value: request.adId },
        { name: "filtering", value: request.filtering },
        { name: "fields", value: request.fields },
        { name: "order_type", value: request.orderType },
        { name: "order_field", value: request.orderField },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


