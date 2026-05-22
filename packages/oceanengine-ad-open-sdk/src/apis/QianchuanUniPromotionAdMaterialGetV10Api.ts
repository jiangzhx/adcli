// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanUniPromotionAdMaterialGetV10Filtering, QianchuanUniPromotionAdMaterialGetV10OrderType, QianchuanUniPromotionAdMaterialGetV10PageSize, QianchuanUniPromotionAdMaterialGetV10Response } from "../models";


export interface OpenApiV10QianchuanUniPromotionAdMaterialGetGetRequest {
  advertiserId: number;
  adId: number;
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

  async openApiV10QianchuanUniPromotionAdMaterialGetGet(request: OpenApiV10QianchuanUniPromotionAdMaterialGetGetRequest): Promise<QianchuanUniPromotionAdMaterialGetV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdMaterialGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdMaterialGetGetWithHttpInfo(request: OpenApiV10QianchuanUniPromotionAdMaterialGetGetRequest): Promise<ApiResponse<QianchuanUniPromotionAdMaterialGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanUniPromotionAdMaterialGetGet");
    }

    if (request.adId == null) {
      throw new ApiException("Missing the required parameter 'adId' when calling openApiV10QianchuanUniPromotionAdMaterialGetGet");
    }

    if (request.filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV10QianchuanUniPromotionAdMaterialGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdMaterialGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/material/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "ad_id", value: request.adId },
        { name: "filtering", value: request.filtering },
        { name: "fields", value: request.fields, collectionFormat: "csv" },
        { name: "order_type", value: request.orderType },
        { name: "order_field", value: request.orderField },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


