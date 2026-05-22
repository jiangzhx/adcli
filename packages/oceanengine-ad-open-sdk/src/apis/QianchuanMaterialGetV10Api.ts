// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanMaterialGetV10CampaignScene, QianchuanMaterialGetV10Filtering, QianchuanMaterialGetV10MarketingGoal, QianchuanMaterialGetV10MarketingScene, QianchuanMaterialGetV10OrderType, QianchuanMaterialGetV10PageSize, QianchuanMaterialGetV10Response } from "../models";


export class QianchuanMaterialGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanMaterialGetGet(advertiserId: number, marketingGoal: QianchuanMaterialGetV10MarketingGoal, marketingScene: QianchuanMaterialGetV10MarketingScene, filtering: QianchuanMaterialGetV10Filtering, fields: string[], campaignScene: QianchuanMaterialGetV10CampaignScene[], page: number, pageSize: QianchuanMaterialGetV10PageSize, orderType: QianchuanMaterialGetV10OrderType, orderField: string): Promise<QianchuanMaterialGetV10Response> {
    const response = await this.openApiV10QianchuanMaterialGetGetWithHttpInfo(advertiserId, marketingGoal, marketingScene, filtering, fields, campaignScene, page, pageSize, orderType, orderField);
    return response.data;
  }

  async openApiV10QianchuanMaterialGetGetWithHttpInfo(advertiserId: number, marketingGoal: QianchuanMaterialGetV10MarketingGoal, marketingScene: QianchuanMaterialGetV10MarketingScene, filtering: QianchuanMaterialGetV10Filtering, fields: string[], campaignScene: QianchuanMaterialGetV10CampaignScene[], page: number, pageSize: QianchuanMaterialGetV10PageSize, orderType: QianchuanMaterialGetV10OrderType, orderField: string): Promise<ApiResponse<QianchuanMaterialGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanMaterialGetGet");
    }

    if (marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling openApiV10QianchuanMaterialGetGet");
    }

    if (marketingScene == null) {
      throw new ApiException("Missing the required parameter 'marketingScene' when calling openApiV10QianchuanMaterialGetGet");
    }

    if (filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV10QianchuanMaterialGetGet");
    }

    if (fields == null) {
      throw new ApiException("Missing the required parameter 'fields' when calling openApiV10QianchuanMaterialGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanMaterialGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/material/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "marketing_goal", value: marketingGoal },
        { name: "marketing_scene", value: marketingScene },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "order_type", value: orderType },
        { name: "order_field", value: orderField },
        { name: "campaign_scene", value: campaignScene, collectionFormat: "csv" },
        { name: "fields", value: fields, collectionFormat: "csv" }
      ]
    });
  }
}


