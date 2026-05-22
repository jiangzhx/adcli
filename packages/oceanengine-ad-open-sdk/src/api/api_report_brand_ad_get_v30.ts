// Generated from oceanengine/ad_open_sdk_go api/api_report_brand_ad_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ReportBrandAdGetV30LandingType, ReportBrandAdGetV30PricingType, ReportBrandAdGetV30Response } from "../models/index";


export interface ReportBrandAdGetV30ApiOpenApiV30ReportBrandAdGetGetRequest {
  advertiserId: number | string;
  page: number;
  size: number;
  landingType?: ReportBrandAdGetV30LandingType;
  pricingType?: ReportBrandAdGetV30PricingType;
  adIds?: string[];
  startTime?: string;
  endTime?: string;
}

export class ReportBrandAdGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportBrandAdGetGet(request: ReportBrandAdGetV30ApiOpenApiV30ReportBrandAdGetGetRequest): Promise<ReportBrandAdGetV30Response> {
    const response = await this.openApiV30ReportBrandAdGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ReportBrandAdGetGetWithHttpInfo(request: ReportBrandAdGetV30ApiOpenApiV30ReportBrandAdGetGetRequest): Promise<ApiResponse<ReportBrandAdGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportBrandAdGetGet");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApiV30ReportBrandAdGetGet");
    }

    if (request.size == null) {
      throw new ApiException("Missing the required parameter 'size' when calling openApiV30ReportBrandAdGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportBrandAdGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/brand/ad/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "landing_type", value: request.landingType },
        { name: "pricing_type", value: request.pricingType },
        { name: "ad_ids", value: request.adIds, collectionFormat: "csv" },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "page", value: request.page },
        { name: "size", value: request.size }
      ]
    });
  }
}


