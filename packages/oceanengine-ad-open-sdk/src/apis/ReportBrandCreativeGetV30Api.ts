// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportBrandCreativeGetV30Response } from "../models";


export interface OpenApiV30ReportBrandCreativeGetGetRequest {
  advertiserId: number;
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

  async openApiV30ReportBrandCreativeGetGet(request: OpenApiV30ReportBrandCreativeGetGetRequest): Promise<ReportBrandCreativeGetV30Response> {
    const response = await this.openApiV30ReportBrandCreativeGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ReportBrandCreativeGetGetWithHttpInfo(request: OpenApiV30ReportBrandCreativeGetGetRequest): Promise<ApiResponse<ReportBrandCreativeGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportBrandCreativeGetGet");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApiV30ReportBrandCreativeGetGet");
    }

    if (request.size == null) {
      throw new ApiException("Missing the required parameter 'size' when calling openApiV30ReportBrandCreativeGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportBrandCreativeGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/brand/creative/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "landing_type", value: request.landingType },
        { name: "pricing_type", value: request.pricingType },
        { name: "creative_ids", value: request.creativeIds, collectionFormat: "csv" },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "page", value: request.page },
        { name: "size", value: request.size }
      ]
    });
  }
}


