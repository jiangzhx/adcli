// Generated from oceanengine/ad_open_sdk_go api/api_brand_action_category_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandActionCategoryV30Response } from "../models/index";


export interface BrandActionCategoryV30ApiOpenApiV30BrandActionCategoryGetRequest {
  advertiserId: number | string;
}

export class BrandActionCategoryV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandActionCategoryGet(request: BrandActionCategoryV30ApiOpenApiV30BrandActionCategoryGetRequest): Promise<BrandActionCategoryV30Response> {
    const response = await this.openApiV30BrandActionCategoryGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandActionCategoryGetWithHttpInfo(request: BrandActionCategoryV30ApiOpenApiV30BrandActionCategoryGetRequest): Promise<ApiResponse<BrandActionCategoryV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<BrandActionCategoryV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/action_category/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


