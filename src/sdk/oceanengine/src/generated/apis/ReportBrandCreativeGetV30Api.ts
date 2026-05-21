// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ReportBrandCreativeGetV30Response } from "../models";


export class ReportBrandCreativeGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportBrandCreativeGetGet(advertiserId: number, page: number, size: number, landingType: number, pricingType: number, creativeIds: string[], startTime: string, endTime: string): Promise<ReportBrandCreativeGetV30Response> {
    const response = await this.openApiV30ReportBrandCreativeGetGetWithHttpInfo(advertiserId, page, size, landingType, pricingType, creativeIds, startTime, endTime);
    return response.data;
  }

  async openApiV30ReportBrandCreativeGetGetWithHttpInfo(advertiserId: number, page: number, size: number, landingType: number, pricingType: number, creativeIds: string[], startTime: string, endTime: string): Promise<ApiResponse<ReportBrandCreativeGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportBrandCreativeGetGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApiV30ReportBrandCreativeGetGet");
    }

    if (size == null) {
      throw new ApiException("Missing the required parameter 'size' when calling openApiV30ReportBrandCreativeGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportBrandCreativeGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/brand/creative/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "landing_type", value: landingType },
        { name: "pricing_type", value: pricingType },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "page", value: page },
        { name: "size", value: size },
        { name: "creative_ids", value: creativeIds, collectionFormat: "csv" }
      ]
    });
  }
}


