// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_ad_material_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAdMaterialGetV10Filtering, QianchuanAdMaterialGetV10OrderType, QianchuanAdMaterialGetV10PageSize, QianchuanAdMaterialGetV10Response } from "../models/index";


export interface QianchuanAdMaterialGetV10ApiOpenApiV10QianchuanAdMaterialGetGetRequest {
  advertiserId: number | string;
  adId: number | string;
  filtering: QianchuanAdMaterialGetV10Filtering;
  page?: number;
  pageSize?: QianchuanAdMaterialGetV10PageSize;
  orderType?: QianchuanAdMaterialGetV10OrderType;
  orderField?: string;
}

export class QianchuanAdMaterialGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdMaterialGetGet(request: QianchuanAdMaterialGetV10ApiOpenApiV10QianchuanAdMaterialGetGetRequest): Promise<QianchuanAdMaterialGetV10Response> {
    const response = await this.openApiV10QianchuanAdMaterialGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAdMaterialGetGetWithHttpInfo(request: QianchuanAdMaterialGetV10ApiOpenApiV10QianchuanAdMaterialGetGetRequest): Promise<ApiResponse<QianchuanAdMaterialGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.adId == null) {
      throw new ApiException("adId is required and must be specified");
    }

    if (request.filtering == null) {
      throw new ApiException("filtering is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAdMaterialGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/ad/material/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "ad_id", value: request.adId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "order_type", value: request.orderType },
        { name: "order_field", value: request.orderField }
      ]
    });
  }
}


