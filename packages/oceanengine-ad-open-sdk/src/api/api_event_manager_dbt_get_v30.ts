// 由 oceanengine/ad_open_sdk_go api/api_event_manager_dbt_get_v30.go 生成
// 不要手动编辑。

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { EventManagerDbtGetV30AdType, EventManagerDbtGetV30DeepExternalAction, EventManagerDbtGetV30DeliveryMode, EventManagerDbtGetV30ExternalAction, EventManagerDbtGetV30LandingType, EventManagerDbtGetV30MarketingGoal, EventManagerDbtGetV30Response, EventManagerDbtGetV30ValueOptimizedType } from "../models/index";


export interface EventManagerDbtGetV30ApiOpenApiV30EventManagerDbtGetGetRequest {
  advertiserId: number | string;
  externalAction: EventManagerDbtGetV30ExternalAction;
  landingType?: EventManagerDbtGetV30LandingType;
  adType?: EventManagerDbtGetV30AdType;
  marketingGoal?: EventManagerDbtGetV30MarketingGoal;
  assetId?: number | string;
  deepExternalAction?: EventManagerDbtGetV30DeepExternalAction;
  valueOptimizedType?: EventManagerDbtGetV30ValueOptimizedType;
  deliveryMode?: EventManagerDbtGetV30DeliveryMode;
}

export class EventManagerDbtGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30EventManagerDbtGetGet(request: EventManagerDbtGetV30ApiOpenApiV30EventManagerDbtGetGetRequest): Promise<EventManagerDbtGetV30Response> {
    const response = await this.openApiV30EventManagerDbtGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30EventManagerDbtGetGetWithHttpInfo(request: EventManagerDbtGetV30ApiOpenApiV30EventManagerDbtGetGetRequest): Promise<ApiResponse<EventManagerDbtGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) < 1) {
      throw new ApiException("advertiserId must be greater than 1");
    }

    if (request.externalAction == null) {
      throw new ApiException("externalAction is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<EventManagerDbtGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/event_manager/dbt/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "landing_type", value: request.landingType },
        { name: "ad_type", value: request.adType },
        { name: "marketing_goal", value: request.marketingGoal },
        { name: "asset_id", value: request.assetId },
        { name: "external_action", value: request.externalAction },
        { name: "deep_external_action", value: request.deepExternalAction },
        { name: "value_optimized_type", value: request.valueOptimizedType },
        { name: "delivery_mode", value: request.deliveryMode }
      ]
    });
  }
}


