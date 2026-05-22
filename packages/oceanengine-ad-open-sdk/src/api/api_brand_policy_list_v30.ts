// Generated from oceanengine/ad_open_sdk_go api/api_brand_policy_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandPolicyListV30AdForm, BrandPolicyListV30AppOrigin, BrandPolicyListV30AudienceInfo, BrandPolicyListV30Classify, BrandPolicyListV30DeliveryInfo, BrandPolicyListV30FrequencyInfo, BrandPolicyListV30GdSendType, BrandPolicyListV30PricingType, BrandPolicyListV30ProType, BrandPolicyListV30Response } from "../models/index";


export interface BrandPolicyListV30ApiOpenApiV30BrandPolicyListGetRequest {
  advertiserId: number | string;
  classify: BrandPolicyListV30Classify;
  proType: BrandPolicyListV30ProType;
  adForm: BrandPolicyListV30AdForm;
  appOrigin: BrandPolicyListV30AppOrigin;
  pricingType: BrandPolicyListV30PricingType;
  gdSendType: BrandPolicyListV30GdSendType;
  deliveryInfo: BrandPolicyListV30DeliveryInfo;
  intentionNo?: string;
  audienceInfo?: BrandPolicyListV30AudienceInfo;
  frequencyInfo?: BrandPolicyListV30FrequencyInfo;
}

export class BrandPolicyListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandPolicyListGet(request: BrandPolicyListV30ApiOpenApiV30BrandPolicyListGetRequest): Promise<BrandPolicyListV30Response> {
    const response = await this.openApiV30BrandPolicyListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandPolicyListGetWithHttpInfo(request: BrandPolicyListV30ApiOpenApiV30BrandPolicyListGetRequest): Promise<ApiResponse<BrandPolicyListV30Response>> {
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

    if (request.deliveryInfo == null) {
      throw new ApiException("deliveryInfo is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<BrandPolicyListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/policy/list/",
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
        { name: "delivery_info", value: request.deliveryInfo }
      ]
    });
  }
}


