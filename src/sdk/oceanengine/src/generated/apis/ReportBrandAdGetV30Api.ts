// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ReportBrandAdGetV30LandingType, ReportBrandAdGetV30PricingType, ReportBrandAdGetV30Response } from "../models";


export class ReportBrandAdGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportBrandAdGetGet(advertiserId: number, page: number, size: number, landingType: ReportBrandAdGetV30LandingType, pricingType: ReportBrandAdGetV30PricingType, adIds: string[], startTime: string, endTime: string): Promise<ReportBrandAdGetV30Response> {
    const response = await this.openApiV30ReportBrandAdGetGetWithHttpInfo(advertiserId, page, size, landingType, pricingType, adIds, startTime, endTime);
    return response.data;
  }

  async openApiV30ReportBrandAdGetGetWithHttpInfo(advertiserId: number, page: number, size: number, landingType: ReportBrandAdGetV30LandingType, pricingType: ReportBrandAdGetV30PricingType, adIds: string[], startTime: string, endTime: string): Promise<ApiResponse<ReportBrandAdGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportBrandAdGetGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApiV30ReportBrandAdGetGet");
    }

    if (size == null) {
      throw new ApiException("Missing the required parameter 'size' when calling openApiV30ReportBrandAdGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportBrandAdGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/brand/ad/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "landing_type", value: landingType },
        { name: "pricing_type", value: pricingType },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "page", value: page },
        { name: "size", value: size },
        { name: "ad_ids", value: adIds, collectionFormat: "csv" }
      ]
    });
  }
}


