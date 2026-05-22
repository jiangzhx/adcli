// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_material_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanMaterialGetV10CampaignScene, QianchuanMaterialGetV10Filtering, QianchuanMaterialGetV10MarketingGoal, QianchuanMaterialGetV10MarketingScene, QianchuanMaterialGetV10OrderType, QianchuanMaterialGetV10PageSize, QianchuanMaterialGetV10Response } from "../models/index";


export interface QianchuanMaterialGetV10ApiOpenApiV10QianchuanMaterialGetGetRequest {
  advertiserId: number | string;
  marketingGoal: QianchuanMaterialGetV10MarketingGoal;
  marketingScene: QianchuanMaterialGetV10MarketingScene;
  filtering: QianchuanMaterialGetV10Filtering;
  fields: string[];
  campaignScene?: QianchuanMaterialGetV10CampaignScene[];
  page?: number;
  pageSize?: QianchuanMaterialGetV10PageSize;
  orderType?: QianchuanMaterialGetV10OrderType;
  orderField?: string;
}

export class QianchuanMaterialGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanMaterialGetGet(request: QianchuanMaterialGetV10ApiOpenApiV10QianchuanMaterialGetGetRequest): Promise<QianchuanMaterialGetV10Response> {
    const response = await this.openApiV10QianchuanMaterialGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanMaterialGetGetWithHttpInfo(request: QianchuanMaterialGetV10ApiOpenApiV10QianchuanMaterialGetGetRequest): Promise<ApiResponse<QianchuanMaterialGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanMaterialGetGet");
    }

    if (request.marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling openApiV10QianchuanMaterialGetGet");
    }

    if (request.marketingScene == null) {
      throw new ApiException("Missing the required parameter 'marketingScene' when calling openApiV10QianchuanMaterialGetGet");
    }

    if (request.filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV10QianchuanMaterialGetGet");
    }

    if (request.fields == null) {
      throw new ApiException("Missing the required parameter 'fields' when calling openApiV10QianchuanMaterialGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanMaterialGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/material/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "marketing_goal", value: request.marketingGoal },
        { name: "campaign_scene", value: request.campaignScene },
        { name: "marketing_scene", value: request.marketingScene },
        { name: "filtering", value: request.filtering },
        { name: "fields", value: request.fields },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "order_type", value: request.orderType },
        { name: "order_field", value: request.orderField }
      ]
    });
  }
}


