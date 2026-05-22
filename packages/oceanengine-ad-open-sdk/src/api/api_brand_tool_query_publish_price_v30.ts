// Generated from oceanengine/ad_open_sdk_go api/api_brand_tool_query_publish_price_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandToolQueryPublishPriceV30AdForm, BrandToolQueryPublishPriceV30AppOrigin, BrandToolQueryPublishPriceV30AudienceInfo, BrandToolQueryPublishPriceV30Classify, BrandToolQueryPublishPriceV30DeliveryInfo, BrandToolQueryPublishPriceV30FrequencyInfo, BrandToolQueryPublishPriceV30GdSendType, BrandToolQueryPublishPriceV30PricingType, BrandToolQueryPublishPriceV30ProType, BrandToolQueryPublishPriceV30Response } from "../models/index";


export interface BrandToolQueryPublishPriceV30ApiOpenApiV30BrandToolQueryPublishPriceGetRequest {
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

  async openApiV30BrandToolQueryPublishPriceGet(request: BrandToolQueryPublishPriceV30ApiOpenApiV30BrandToolQueryPublishPriceGetRequest): Promise<BrandToolQueryPublishPriceV30Response> {
    const response = await this.openApiV30BrandToolQueryPublishPriceGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandToolQueryPublishPriceGetWithHttpInfo(request: BrandToolQueryPublishPriceV30ApiOpenApiV30BrandToolQueryPublishPriceGetRequest): Promise<ApiResponse<BrandToolQueryPublishPriceV30Response>> {
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


