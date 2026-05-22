// Generated from oceanengine/ad_open_sdk_go api/api_report_brand_creative_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ReportBrandCreativeGetV30Response } from "../models/index";


export interface ReportBrandCreativeGetV30ApiOpenApiV30ReportBrandCreativeGetGetRequest {
  advertiserId: number | string;
  page: number;
  size: number;
  landingType?: number;
  pricingType?: number;
  creativeIds?: string[];
  startTime?: string;
  endTime?: string;
}

export class ReportBrandCreativeGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportBrandCreativeGetGet(request: ReportBrandCreativeGetV30ApiOpenApiV30ReportBrandCreativeGetGetRequest): Promise<ReportBrandCreativeGetV30Response> {
    const response = await this.openApiV30ReportBrandCreativeGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ReportBrandCreativeGetGetWithHttpInfo(request: ReportBrandCreativeGetV30ApiOpenApiV30ReportBrandCreativeGetGetRequest): Promise<ApiResponse<ReportBrandCreativeGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
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
    return this.apiClient.requestWithHttpInfo<ReportBrandCreativeGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/brand/creative/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "landing_type", value: request.landingType },
        { name: "pricing_type", value: request.pricingType },
        { name: "creative_ids", value: request.creativeIds },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "page", value: request.page },
        { name: "size", value: request.size }
      ]
    });
  }
}


