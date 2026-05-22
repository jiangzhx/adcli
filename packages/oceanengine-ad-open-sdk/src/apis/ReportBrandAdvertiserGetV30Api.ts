// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportBrandAdvertiserGetV30LandingType, ReportBrandAdvertiserGetV30PricingType, ReportBrandAdvertiserGetV30Response } from "../models";


export interface OpenApiV30ReportBrandAdvertiserGetGetRequest {
  advertiserId: number | string;
  startTime: string;
  endTime: string;
  page: number;
  size: number;
  landingType?: ReportBrandAdvertiserGetV30LandingType;
  pricingType?: ReportBrandAdvertiserGetV30PricingType;
}

export class ReportBrandAdvertiserGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportBrandAdvertiserGetGet(request: OpenApiV30ReportBrandAdvertiserGetGetRequest): Promise<ReportBrandAdvertiserGetV30Response> {
    const response = await this.openApiV30ReportBrandAdvertiserGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ReportBrandAdvertiserGetGetWithHttpInfo(request: OpenApiV30ReportBrandAdvertiserGetGetRequest): Promise<ApiResponse<ReportBrandAdvertiserGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportBrandAdvertiserGetGet");
    }

    if (request.startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV30ReportBrandAdvertiserGetGet");
    }

    if (request.endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV30ReportBrandAdvertiserGetGet");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApiV30ReportBrandAdvertiserGetGet");
    }

    if (request.size == null) {
      throw new ApiException("Missing the required parameter 'size' when calling openApiV30ReportBrandAdvertiserGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportBrandAdvertiserGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/brand/advertiser/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "landing_type", value: request.landingType },
        { name: "pricing_type", value: request.pricingType },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "page", value: request.page },
        { name: "size", value: request.size }
      ]
    });
  }
}


