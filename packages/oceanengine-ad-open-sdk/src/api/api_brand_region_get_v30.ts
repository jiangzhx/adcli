// Generated from oceanengine/ad_open_sdk_go api/api_brand_region_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandRegionGetV30Response } from "../models/index";


export interface BrandRegionGetV30ApiOpenApiV30BrandRegionGetGetRequest {
  advertiserId: number | string;
}

export class BrandRegionGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandRegionGetGet(request: BrandRegionGetV30ApiOpenApiV30BrandRegionGetGetRequest): Promise<BrandRegionGetV30Response> {
    const response = await this.openApiV30BrandRegionGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandRegionGetGetWithHttpInfo(request: BrandRegionGetV30ApiOpenApiV30BrandRegionGetGetRequest): Promise<ApiResponse<BrandRegionGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<BrandRegionGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/region/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


