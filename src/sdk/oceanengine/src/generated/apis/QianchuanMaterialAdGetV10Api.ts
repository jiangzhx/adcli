// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanMaterialAdGetV10MarketingGoal, QianchuanMaterialAdGetV10MarketingScene, QianchuanMaterialAdGetV10MaterialType, QianchuanMaterialAdGetV10OrderType, QianchuanMaterialAdGetV10PageSize, QianchuanMaterialAdGetV10Response } from "../models";


export class QianchuanMaterialAdGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanMaterialAdGetGet(advertiserId: number, materialId: number, materialType: QianchuanMaterialAdGetV10MaterialType, marketingScene: QianchuanMaterialAdGetV10MarketingScene, marketingGoal: QianchuanMaterialAdGetV10MarketingGoal, startTime: string, endTime: string, fields: string[], orderField: string, orderType: QianchuanMaterialAdGetV10OrderType, page: number, pageSize: QianchuanMaterialAdGetV10PageSize): Promise<QianchuanMaterialAdGetV10Response> {
    const response = await this.openApiV10QianchuanMaterialAdGetGetWithHttpInfo(advertiserId, materialId, materialType, marketingScene, marketingGoal, startTime, endTime, fields, orderField, orderType, page, pageSize);
    return response.data;
  }

  async openApiV10QianchuanMaterialAdGetGetWithHttpInfo(advertiserId: number, materialId: number, materialType: QianchuanMaterialAdGetV10MaterialType, marketingScene: QianchuanMaterialAdGetV10MarketingScene, marketingGoal: QianchuanMaterialAdGetV10MarketingGoal, startTime: string, endTime: string, fields: string[], orderField: string, orderType: QianchuanMaterialAdGetV10OrderType, page: number, pageSize: QianchuanMaterialAdGetV10PageSize): Promise<ApiResponse<QianchuanMaterialAdGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanMaterialAdGetGet");
    }

    if (materialId == null) {
      throw new ApiException("Missing the required parameter 'materialId' when calling openApiV10QianchuanMaterialAdGetGet");
    }

    if (materialType == null) {
      throw new ApiException("Missing the required parameter 'materialType' when calling openApiV10QianchuanMaterialAdGetGet");
    }

    if (marketingScene == null) {
      throw new ApiException("Missing the required parameter 'marketingScene' when calling openApiV10QianchuanMaterialAdGetGet");
    }

    if (marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling openApiV10QianchuanMaterialAdGetGet");
    }

    if (startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV10QianchuanMaterialAdGetGet");
    }

    if (endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV10QianchuanMaterialAdGetGet");
    }

    if (fields == null) {
      throw new ApiException("Missing the required parameter 'fields' when calling openApiV10QianchuanMaterialAdGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanMaterialAdGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/material/ad/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "material_id", value: materialId },
        { name: "material_type", value: materialType },
        { name: "marketing_scene", value: marketingScene },
        { name: "marketing_goal", value: marketingGoal },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "order_field", value: orderField },
        { name: "order_type", value: orderType },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "fields", value: fields, collectionFormat: "csv" }
      ]
    });
  }
}


