// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanMaterialAdGetV10MarketingGoal, QianchuanMaterialAdGetV10MarketingScene, QianchuanMaterialAdGetV10MaterialType, QianchuanMaterialAdGetV10OrderType, QianchuanMaterialAdGetV10PageSize, QianchuanMaterialAdGetV10Response } from "../models";


export interface OpenApiV10QianchuanMaterialAdGetGetRequest {
  advertiserId: number;
  materialId: number;
  materialType: QianchuanMaterialAdGetV10MaterialType;
  marketingScene: QianchuanMaterialAdGetV10MarketingScene;
  marketingGoal: QianchuanMaterialAdGetV10MarketingGoal;
  startTime: string;
  endTime: string;
  fields: string[];
  orderField?: string;
  orderType?: QianchuanMaterialAdGetV10OrderType;
  page?: number;
  pageSize?: QianchuanMaterialAdGetV10PageSize;
}

export class QianchuanMaterialAdGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanMaterialAdGetGet(request: OpenApiV10QianchuanMaterialAdGetGetRequest): Promise<QianchuanMaterialAdGetV10Response> {
    const response = await this.openApiV10QianchuanMaterialAdGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanMaterialAdGetGetWithHttpInfo(request: OpenApiV10QianchuanMaterialAdGetGetRequest): Promise<ApiResponse<QianchuanMaterialAdGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanMaterialAdGetGet");
    }

    if (request.materialId == null) {
      throw new ApiException("Missing the required parameter 'materialId' when calling openApiV10QianchuanMaterialAdGetGet");
    }

    if (request.materialType == null) {
      throw new ApiException("Missing the required parameter 'materialType' when calling openApiV10QianchuanMaterialAdGetGet");
    }

    if (request.marketingScene == null) {
      throw new ApiException("Missing the required parameter 'marketingScene' when calling openApiV10QianchuanMaterialAdGetGet");
    }

    if (request.marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling openApiV10QianchuanMaterialAdGetGet");
    }

    if (request.startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV10QianchuanMaterialAdGetGet");
    }

    if (request.endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV10QianchuanMaterialAdGetGet");
    }

    if (request.fields == null) {
      throw new ApiException("Missing the required parameter 'fields' when calling openApiV10QianchuanMaterialAdGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanMaterialAdGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/material/ad/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "material_id", value: request.materialId },
        { name: "material_type", value: request.materialType },
        { name: "marketing_scene", value: request.marketingScene },
        { name: "marketing_goal", value: request.marketingGoal },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "fields", value: request.fields, collectionFormat: "csv" },
        { name: "order_field", value: request.orderField },
        { name: "order_type", value: request.orderType },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


