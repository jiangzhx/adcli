// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAdMaterialGetV10Filtering, QianchuanAdMaterialGetV10OrderType, QianchuanAdMaterialGetV10PageSize, QianchuanAdMaterialGetV10Response } from "../models";


export class QianchuanAdMaterialGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdMaterialGetGet(advertiserId: number, adId: number, filtering: QianchuanAdMaterialGetV10Filtering, page: number, pageSize: QianchuanAdMaterialGetV10PageSize, orderType: QianchuanAdMaterialGetV10OrderType, orderField: string): Promise<QianchuanAdMaterialGetV10Response> {
    const response = await this.openApiV10QianchuanAdMaterialGetGetWithHttpInfo(advertiserId, adId, filtering, page, pageSize, orderType, orderField);
    return response.data;
  }

  async openApiV10QianchuanAdMaterialGetGetWithHttpInfo(advertiserId: number, adId: number, filtering: QianchuanAdMaterialGetV10Filtering, page: number, pageSize: QianchuanAdMaterialGetV10PageSize, orderType: QianchuanAdMaterialGetV10OrderType, orderField: string): Promise<ApiResponse<QianchuanAdMaterialGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAdMaterialGetGet");
    }

    if (adId == null) {
      throw new ApiException("Missing the required parameter 'adId' when calling openApiV10QianchuanAdMaterialGetGet");
    }

    if (filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV10QianchuanAdMaterialGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAdMaterialGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/ad/material/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "ad_id", value: adId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "order_type", value: orderType },
        { name: "order_field", value: orderField }
      ]
    });
  }
}


