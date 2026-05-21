// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { BrandPolicyListV30AdForm, BrandPolicyListV30AppOrigin, BrandPolicyListV30AudienceInfo, BrandPolicyListV30Classify, BrandPolicyListV30DeliveryInfo, BrandPolicyListV30FrequencyInfo, BrandPolicyListV30GdSendType, BrandPolicyListV30PricingType, BrandPolicyListV30ProType, BrandPolicyListV30Response } from "../models";


export class BrandPolicyListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandPolicyListGet(advertiserId: number, classify: BrandPolicyListV30Classify, proType: BrandPolicyListV30ProType, adForm: BrandPolicyListV30AdForm, appOrigin: BrandPolicyListV30AppOrigin, pricingType: BrandPolicyListV30PricingType, gdSendType: BrandPolicyListV30GdSendType, deliveryInfo: BrandPolicyListV30DeliveryInfo, intentionNo: string, audienceInfo: BrandPolicyListV30AudienceInfo, frequencyInfo: BrandPolicyListV30FrequencyInfo): Promise<BrandPolicyListV30Response> {
    const response = await this.openApiV30BrandPolicyListGetWithHttpInfo(advertiserId, classify, proType, adForm, appOrigin, pricingType, gdSendType, deliveryInfo, intentionNo, audienceInfo, frequencyInfo);
    return response.data;
  }

  async openApiV30BrandPolicyListGetWithHttpInfo(advertiserId: number, classify: BrandPolicyListV30Classify, proType: BrandPolicyListV30ProType, adForm: BrandPolicyListV30AdForm, appOrigin: BrandPolicyListV30AppOrigin, pricingType: BrandPolicyListV30PricingType, gdSendType: BrandPolicyListV30GdSendType, deliveryInfo: BrandPolicyListV30DeliveryInfo, intentionNo: string, audienceInfo: BrandPolicyListV30AudienceInfo, frequencyInfo: BrandPolicyListV30FrequencyInfo): Promise<ApiResponse<BrandPolicyListV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30BrandPolicyListGet");
    }

    if (classify == null) {
      throw new ApiException("Missing the required parameter 'classify' when calling openApiV30BrandPolicyListGet");
    }

    if (proType == null) {
      throw new ApiException("Missing the required parameter 'proType' when calling openApiV30BrandPolicyListGet");
    }

    if (adForm == null) {
      throw new ApiException("Missing the required parameter 'adForm' when calling openApiV30BrandPolicyListGet");
    }

    if (appOrigin == null) {
      throw new ApiException("Missing the required parameter 'appOrigin' when calling openApiV30BrandPolicyListGet");
    }

    if (pricingType == null) {
      throw new ApiException("Missing the required parameter 'pricingType' when calling openApiV30BrandPolicyListGet");
    }

    if (gdSendType == null) {
      throw new ApiException("Missing the required parameter 'gdSendType' when calling openApiV30BrandPolicyListGet");
    }

    if (deliveryInfo == null) {
      throw new ApiException("Missing the required parameter 'deliveryInfo' when calling openApiV30BrandPolicyListGet");
    }
    return this.apiClient.requestWithHttpInfo<BrandPolicyListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/policy/list/",
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
        { name: "delivery_info", value: deliveryInfo }
      ]
    });
  }
}


