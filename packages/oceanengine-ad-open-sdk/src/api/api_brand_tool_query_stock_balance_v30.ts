// Generated from oceanengine/ad_open_sdk_go api/api_brand_tool_query_stock_balance_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandToolQueryStockBalanceV30AdForm, BrandToolQueryStockBalanceV30AppOrigin, BrandToolQueryStockBalanceV30AudienceInfo, BrandToolQueryStockBalanceV30Classify, BrandToolQueryStockBalanceV30DeliveryInfo, BrandToolQueryStockBalanceV30FrequencyInfo, BrandToolQueryStockBalanceV30GdSendType, BrandToolQueryStockBalanceV30PricingType, BrandToolQueryStockBalanceV30ProType, BrandToolQueryStockBalanceV30Response } from "../models/index";


export interface BrandToolQueryStockBalanceV30ApiOpenApiV30BrandToolQueryStockBalanceGetRequest {
  advertiserId: number | string;
  classify: BrandToolQueryStockBalanceV30Classify;
  proType: BrandToolQueryStockBalanceV30ProType;
  adForm: BrandToolQueryStockBalanceV30AdForm;
  appOrigin: BrandToolQueryStockBalanceV30AppOrigin;
  pricingType: BrandToolQueryStockBalanceV30PricingType;
  gdSendType: BrandToolQueryStockBalanceV30GdSendType;
  policyNo: string;
  deliveryInfo: BrandToolQueryStockBalanceV30DeliveryInfo;
  intentionNo?: string;
  audienceInfo?: BrandToolQueryStockBalanceV30AudienceInfo;
  frequencyInfo?: BrandToolQueryStockBalanceV30FrequencyInfo;
}

export class BrandToolQueryStockBalanceV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandToolQueryStockBalanceGet(request: BrandToolQueryStockBalanceV30ApiOpenApiV30BrandToolQueryStockBalanceGetRequest): Promise<BrandToolQueryStockBalanceV30Response> {
    const response = await this.openApiV30BrandToolQueryStockBalanceGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandToolQueryStockBalanceGetWithHttpInfo(request: BrandToolQueryStockBalanceV30ApiOpenApiV30BrandToolQueryStockBalanceGetRequest): Promise<ApiResponse<BrandToolQueryStockBalanceV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.classify == null) {
      throw new ApiException("classify is required and must be specified");
    }

    if (request.proType == null) {
      throw new ApiException("proType is required and must be specified");
    }

    if (request.adForm == null) {
      throw new ApiException("adForm is required and must be specified");
    }

    if (request.appOrigin == null) {
      throw new ApiException("appOrigin is required and must be specified");
    }

    if (request.pricingType == null) {
      throw new ApiException("pricingType is required and must be specified");
    }

    if (request.gdSendType == null) {
      throw new ApiException("gdSendType is required and must be specified");
    }

    if (request.policyNo == null) {
      throw new ApiException("policyNo is required and must be specified");
    }

    if (request.deliveryInfo == null) {
      throw new ApiException("deliveryInfo is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<BrandToolQueryStockBalanceV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/tool/query_stock_balance/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "classify", value: request.classify },
        { name: "intention_no", value: request.intentionNo },
        { name: "pro_type", value: request.proType },
        { name: "ad_form", value: request.adForm },
        { name: "app_origin", value: request.appOrigin },
        { name: "pricing_type", value: request.pricingType },
        { name: "gd_send_type", value: request.gdSendType },
        { name: "audience_info", value: request.audienceInfo },
        { name: "frequency_info", value: request.frequencyInfo },
        { name: "policy_no", value: request.policyNo },
        { name: "delivery_info", value: request.deliveryInfo }
      ]
    });
  }
}


