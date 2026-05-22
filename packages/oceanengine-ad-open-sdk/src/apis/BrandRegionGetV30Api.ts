// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandRegionGetV30Response } from "../models";


export interface OpenApiV30BrandRegionGetGetRequest {
  advertiserId: number;
}

export class BrandRegionGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandRegionGetGet(request: OpenApiV30BrandRegionGetGetRequest): Promise<BrandRegionGetV30Response> {
    const response = await this.openApiV30BrandRegionGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandRegionGetGetWithHttpInfo(request: OpenApiV30BrandRegionGetGetRequest): Promise<ApiResponse<BrandRegionGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30BrandRegionGetGet");
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


