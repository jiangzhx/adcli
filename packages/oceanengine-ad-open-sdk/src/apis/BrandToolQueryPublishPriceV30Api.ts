// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandToolQueryPublishPriceV30AdForm, BrandToolQueryPublishPriceV30AppOrigin, BrandToolQueryPublishPriceV30AudienceInfo, BrandToolQueryPublishPriceV30Classify, BrandToolQueryPublishPriceV30DeliveryInfo, BrandToolQueryPublishPriceV30FrequencyInfo, BrandToolQueryPublishPriceV30GdSendType, BrandToolQueryPublishPriceV30PricingType, BrandToolQueryPublishPriceV30ProType, BrandToolQueryPublishPriceV30Response } from "../models";


export interface OpenApiV30BrandToolQueryPublishPriceGetRequest {
  advertiserId: number | string;
  classify: BrandToolQueryPublishPriceV30Classify;
  proType: BrandToolQueryPublishPriceV30ProType;
  adForm: BrandToolQueryPublishPriceV30AdForm;
  appOrigin: BrandToolQueryPublishPriceV30AppOrigin;
  pricingType: BrandToolQueryPublishPriceV30PricingType;
  gdSendType: BrandToolQueryPublishPriceV30GdSendType;
  policyNo: string;
  deliveryInfo: BrandToolQueryPublishPriceV30DeliveryInfo;
  intentionNo?: string;
  audienceInfo?: BrandToolQueryPublishPriceV30AudienceInfo;
  frequencyInfo?: BrandToolQueryPublishPriceV30FrequencyInfo;
}

export class BrandToolQueryPublishPriceV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandToolQueryPublishPriceGet(request: OpenApiV30BrandToolQueryPublishPriceGetRequest): Promise<BrandToolQueryPublishPriceV30Response> {
    const response = await this.openApiV30BrandToolQueryPublishPriceGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandToolQueryPublishPriceGetWithHttpInfo(request: OpenApiV30BrandToolQueryPublishPriceGetRequest): Promise<ApiResponse<BrandToolQueryPublishPriceV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30BrandToolQueryPublishPriceGet");
    }

    if (request.classify == null) {
      throw new ApiException("Missing the required parameter 'classify' when calling openApiV30BrandToolQueryPublishPriceGet");
    }

    if (request.proType == null) {
      throw new ApiException("Missing the required parameter 'proType' when calling openApiV30BrandToolQueryPublishPriceGet");
    }

    if (request.adForm == null) {
      throw new ApiException("Missing the required parameter 'adForm' when calling openApiV30BrandToolQueryPublishPriceGet");
    }

    if (request.appOrigin == null) {
      throw new ApiException("Missing the required parameter 'appOrigin' when calling openApiV30BrandToolQueryPublishPriceGet");
    }

    if (request.pricingType == null) {
      throw new ApiException("Missing the required parameter 'pricingType' when calling openApiV30BrandToolQueryPublishPriceGet");
    }

    if (request.gdSendType == null) {
      throw new ApiException("Missing the required parameter 'gdSendType' when calling openApiV30BrandToolQueryPublishPriceGet");
    }

    if (request.policyNo == null) {
      throw new ApiException("Missing the required parameter 'policyNo' when calling openApiV30BrandToolQueryPublishPriceGet");
    }

    if (request.deliveryInfo == null) {
      throw new ApiException("Missing the required parameter 'deliveryInfo' when calling openApiV30BrandToolQueryPublishPriceGet");
    }
    return this.apiClient.requestWithHttpInfo<BrandToolQueryPublishPriceV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/tool/query_publish_price/",
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


