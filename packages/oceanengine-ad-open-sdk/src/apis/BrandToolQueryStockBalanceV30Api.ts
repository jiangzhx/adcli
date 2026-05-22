// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandToolQueryStockBalanceV30AdForm, BrandToolQueryStockBalanceV30AppOrigin, BrandToolQueryStockBalanceV30AudienceInfo, BrandToolQueryStockBalanceV30Classify, BrandToolQueryStockBalanceV30DeliveryInfo, BrandToolQueryStockBalanceV30FrequencyInfo, BrandToolQueryStockBalanceV30GdSendType, BrandToolQueryStockBalanceV30PricingType, BrandToolQueryStockBalanceV30ProType, BrandToolQueryStockBalanceV30Response } from "../models";


export class BrandToolQueryStockBalanceV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandToolQueryStockBalanceGet(advertiserId: number, classify: BrandToolQueryStockBalanceV30Classify, proType: BrandToolQueryStockBalanceV30ProType, adForm: BrandToolQueryStockBalanceV30AdForm, appOrigin: BrandToolQueryStockBalanceV30AppOrigin, pricingType: BrandToolQueryStockBalanceV30PricingType, gdSendType: BrandToolQueryStockBalanceV30GdSendType, policyNo: string, deliveryInfo: BrandToolQueryStockBalanceV30DeliveryInfo, intentionNo: string, audienceInfo: BrandToolQueryStockBalanceV30AudienceInfo, frequencyInfo: BrandToolQueryStockBalanceV30FrequencyInfo): Promise<BrandToolQueryStockBalanceV30Response> {
    const response = await this.openApiV30BrandToolQueryStockBalanceGetWithHttpInfo(advertiserId, classify, proType, adForm, appOrigin, pricingType, gdSendType, policyNo, deliveryInfo, intentionNo, audienceInfo, frequencyInfo);
    return response.data;
  }

  async openApiV30BrandToolQueryStockBalanceGetWithHttpInfo(advertiserId: number, classify: BrandToolQueryStockBalanceV30Classify, proType: BrandToolQueryStockBalanceV30ProType, adForm: BrandToolQueryStockBalanceV30AdForm, appOrigin: BrandToolQueryStockBalanceV30AppOrigin, pricingType: BrandToolQueryStockBalanceV30PricingType, gdSendType: BrandToolQueryStockBalanceV30GdSendType, policyNo: string, deliveryInfo: BrandToolQueryStockBalanceV30DeliveryInfo, intentionNo: string, audienceInfo: BrandToolQueryStockBalanceV30AudienceInfo, frequencyInfo: BrandToolQueryStockBalanceV30FrequencyInfo): Promise<ApiResponse<BrandToolQueryStockBalanceV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30BrandToolQueryStockBalanceGet");
    }

    if (classify == null) {
      throw new ApiException("Missing the required parameter 'classify' when calling openApiV30BrandToolQueryStockBalanceGet");
    }

    if (proType == null) {
      throw new ApiException("Missing the required parameter 'proType' when calling openApiV30BrandToolQueryStockBalanceGet");
    }

    if (adForm == null) {
      throw new ApiException("Missing the required parameter 'adForm' when calling openApiV30BrandToolQueryStockBalanceGet");
    }

    if (appOrigin == null) {
      throw new ApiException("Missing the required parameter 'appOrigin' when calling openApiV30BrandToolQueryStockBalanceGet");
    }

    if (pricingType == null) {
      throw new ApiException("Missing the required parameter 'pricingType' when calling openApiV30BrandToolQueryStockBalanceGet");
    }

    if (gdSendType == null) {
      throw new ApiException("Missing the required parameter 'gdSendType' when calling openApiV30BrandToolQueryStockBalanceGet");
    }

    if (policyNo == null) {
      throw new ApiException("Missing the required parameter 'policyNo' when calling openApiV30BrandToolQueryStockBalanceGet");
    }

    if (deliveryInfo == null) {
      throw new ApiException("Missing the required parameter 'deliveryInfo' when calling openApiV30BrandToolQueryStockBalanceGet");
    }
    return this.apiClient.requestWithHttpInfo<BrandToolQueryStockBalanceV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/tool/query_stock_balance/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "classify", value: classify },
        { name: "intention_no", value: intentionNo },
        { name: "pro_type", value: proType },
        { name: "ad_form", value: adForm },
        { name: "app_origin", value: appOrigin },
        { name: "pricing_type", value: pricingType },
        { name: "gd_send_type", value: gdSendType },
        { name: "audience_info", value: audienceInfo },
        { name: "frequency_info", value: frequencyInfo },
        { name: "policy_no", value: policyNo },
        { name: "delivery_info", value: deliveryInfo }
      ]
    });
  }
}


