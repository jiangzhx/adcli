// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ReportBrandAdvertiserGetV30LandingType, ReportBrandAdvertiserGetV30PricingType, ReportBrandAdvertiserGetV30Response } from "../models";


export class ReportBrandAdvertiserGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportBrandAdvertiserGetGet(advertiserId: number, startTime: string, endTime: string, page: number, size: number, landingType: ReportBrandAdvertiserGetV30LandingType, pricingType: ReportBrandAdvertiserGetV30PricingType): Promise<ReportBrandAdvertiserGetV30Response> {
    const response = await this.openApiV30ReportBrandAdvertiserGetGetWithHttpInfo(advertiserId, startTime, endTime, page, size, landingType, pricingType);
    return response.data;
  }

  async openApiV30ReportBrandAdvertiserGetGetWithHttpInfo(advertiserId: number, startTime: string, endTime: string, page: number, size: number, landingType: ReportBrandAdvertiserGetV30LandingType, pricingType: ReportBrandAdvertiserGetV30PricingType): Promise<ApiResponse<ReportBrandAdvertiserGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportBrandAdvertiserGetGet");
    }

    if (startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV30ReportBrandAdvertiserGetGet");
    }

    if (endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV30ReportBrandAdvertiserGetGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApiV30ReportBrandAdvertiserGetGet");
    }

    if (size == null) {
      throw new ApiException("Missing the required parameter 'size' when calling openApiV30ReportBrandAdvertiserGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportBrandAdvertiserGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/brand/advertiser/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "landing_type", value: landingType },
        { name: "pricing_type", value: pricingType },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "page", value: page },
        { name: "size", value: size }
      ]
    });
  }
}


