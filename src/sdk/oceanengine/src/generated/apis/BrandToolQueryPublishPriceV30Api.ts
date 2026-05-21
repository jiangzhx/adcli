// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { BrandToolQueryPublishPriceV30AdForm, BrandToolQueryPublishPriceV30AppOrigin, BrandToolQueryPublishPriceV30AudienceInfo, BrandToolQueryPublishPriceV30Classify, BrandToolQueryPublishPriceV30DeliveryInfo, BrandToolQueryPublishPriceV30FrequencyInfo, BrandToolQueryPublishPriceV30GdSendType, BrandToolQueryPublishPriceV30PricingType, BrandToolQueryPublishPriceV30ProType, BrandToolQueryPublishPriceV30Response } from "../models";


export class BrandToolQueryPublishPriceV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandToolQueryPublishPriceGet(advertiserId: number, classify: BrandToolQueryPublishPriceV30Classify, proType: BrandToolQueryPublishPriceV30ProType, adForm: BrandToolQueryPublishPriceV30AdForm, appOrigin: BrandToolQueryPublishPriceV30AppOrigin, pricingType: BrandToolQueryPublishPriceV30PricingType, gdSendType: BrandToolQueryPublishPriceV30GdSendType, policyNo: string, deliveryInfo: BrandToolQueryPublishPriceV30DeliveryInfo, intentionNo: string, audienceInfo: BrandToolQueryPublishPriceV30AudienceInfo, frequencyInfo: BrandToolQueryPublishPriceV30FrequencyInfo): Promise<BrandToolQueryPublishPriceV30Response> {
    const response = await this.openApiV30BrandToolQueryPublishPriceGetWithHttpInfo(advertiserId, classify, proType, adForm, appOrigin, pricingType, gdSendType, policyNo, deliveryInfo, intentionNo, audienceInfo, frequencyInfo);
    return response.data;
  }

  async openApiV30BrandToolQueryPublishPriceGetWithHttpInfo(advertiserId: number, classify: BrandToolQueryPublishPriceV30Classify, proType: BrandToolQueryPublishPriceV30ProType, adForm: BrandToolQueryPublishPriceV30AdForm, appOrigin: BrandToolQueryPublishPriceV30AppOrigin, pricingType: BrandToolQueryPublishPriceV30PricingType, gdSendType: BrandToolQueryPublishPriceV30GdSendType, policyNo: string, deliveryInfo: BrandToolQueryPublishPriceV30DeliveryInfo, intentionNo: string, audienceInfo: BrandToolQueryPublishPriceV30AudienceInfo, frequencyInfo: BrandToolQueryPublishPriceV30FrequencyInfo): Promise<ApiResponse<BrandToolQueryPublishPriceV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30BrandToolQueryPublishPriceGet");
    }

    if (classify == null) {
      throw new ApiException("Missing the required parameter 'classify' when calling openApiV30BrandToolQueryPublishPriceGet");
    }

    if (proType == null) {
      throw new ApiException("Missing the required parameter 'proType' when calling openApiV30BrandToolQueryPublishPriceGet");
    }

    if (adForm == null) {
      throw new ApiException("Missing the required parameter 'adForm' when calling openApiV30BrandToolQueryPublishPriceGet");
    }

    if (appOrigin == null) {
      throw new ApiException("Missing the required parameter 'appOrigin' when calling openApiV30BrandToolQueryPublishPriceGet");
    }

    if (pricingType == null) {
      throw new ApiException("Missing the required parameter 'pricingType' when calling openApiV30BrandToolQueryPublishPriceGet");
    }

    if (gdSendType == null) {
      throw new ApiException("Missing the required parameter 'gdSendType' when calling openApiV30BrandToolQueryPublishPriceGet");
    }

    if (policyNo == null) {
      throw new ApiException("Missing the required parameter 'policyNo' when calling openApiV30BrandToolQueryPublishPriceGet");
    }

    if (deliveryInfo == null) {
      throw new ApiException("Missing the required parameter 'deliveryInfo' when calling openApiV30BrandToolQueryPublishPriceGet");
    }
    return this.apiClient.requestWithHttpInfo<BrandToolQueryPublishPriceV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/tool/query_publish_price/",
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


