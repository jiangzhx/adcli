// Generated from oceanengine/ad_open_sdk_go api/api_report_brand_advertiser_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ReportBrandAdvertiserGetV30LandingType, ReportBrandAdvertiserGetV30PricingType, ReportBrandAdvertiserGetV30Response } from "../models/index";


export interface ReportBrandAdvertiserGetV30ApiOpenApiV30ReportBrandAdvertiserGetGetRequest {
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

  async openApiV30ReportBrandAdvertiserGetGet(request: ReportBrandAdvertiserGetV30ApiOpenApiV30ReportBrandAdvertiserGetGetRequest): Promise<ReportBrandAdvertiserGetV30Response> {
    const response = await this.openApiV30ReportBrandAdvertiserGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ReportBrandAdvertiserGetGetWithHttpInfo(request: ReportBrandAdvertiserGetV30ApiOpenApiV30ReportBrandAdvertiserGetGetRequest): Promise<ApiResponse<ReportBrandAdvertiserGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.startTime == null) {
      throw new ApiException("startTime is required and must be specified");
    }

    if (request.endTime == null) {
      throw new ApiException("endTime is required and must be specified");
    }

    if (request.page == null) {
      throw new ApiException("page is required and must be specified");
    }

    if (request.page != null && Number(request.page) < 1) {
      throw new ApiException("page must be greater than 1");
    }

    if (request.size == null) {
      throw new ApiException("size is required and must be specified");
    }

    if (request.size != null && Number(request.size) > 100) {
      throw new ApiException("size must be less than 100");
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


