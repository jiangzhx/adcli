// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_material_ad_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanMaterialAdGetV10MarketingGoal, QianchuanMaterialAdGetV10MarketingScene, QianchuanMaterialAdGetV10MaterialType, QianchuanMaterialAdGetV10OrderType, QianchuanMaterialAdGetV10PageSize, QianchuanMaterialAdGetV10Response } from "../models/index";


export interface QianchuanMaterialAdGetV10ApiOpenApiV10QianchuanMaterialAdGetGetRequest {
  advertiserId: number | string;
  materialId: number | string;
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

  async openApiV10QianchuanMaterialAdGetGet(request: QianchuanMaterialAdGetV10ApiOpenApiV10QianchuanMaterialAdGetGetRequest): Promise<QianchuanMaterialAdGetV10Response> {
    const response = await this.openApiV10QianchuanMaterialAdGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanMaterialAdGetGetWithHttpInfo(request: QianchuanMaterialAdGetV10ApiOpenApiV10QianchuanMaterialAdGetGetRequest): Promise<ApiResponse<QianchuanMaterialAdGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.materialId == null) {
      throw new ApiException("materialId is required and must be specified");
    }

    if (request.materialType == null) {
      throw new ApiException("materialType is required and must be specified");
    }

    if (request.marketingScene == null) {
      throw new ApiException("marketingScene is required and must be specified");
    }

    if (request.marketingGoal == null) {
      throw new ApiException("marketingGoal is required and must be specified");
    }

    if (request.startTime == null) {
      throw new ApiException("startTime is required and must be specified");
    }

    if (request.endTime == null) {
      throw new ApiException("endTime is required and must be specified");
    }

    if (request.fields == null) {
      throw new ApiException("fields is required and must be specified");
    }

    if (request.fields != null && request.fields.length < 1) {
      throw new ApiException("fields must have at least 1 elements");
    }

    if (request.fields != null && request.fields.length > 20) {
      throw new ApiException("fields must have less than 20 elements");
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
        { name: "fields", value: request.fields },
        { name: "order_field", value: request.orderField },
        { name: "order_type", value: request.orderType },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


