// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { BrandActionCategoryV30Response } from "../models";


export class BrandActionCategoryV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandActionCategoryGet(advertiserId: number): Promise<BrandActionCategoryV30Response> {
    const response = await this.openApiV30BrandActionCategoryGetWithHttpInfo(advertiserId);
    return response.data;
  }

  async openApiV30BrandActionCategoryGetWithHttpInfo(advertiserId: number): Promise<ApiResponse<BrandActionCategoryV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30BrandActionCategoryGet");
    }
    return this.apiClient.requestWithHttpInfo<BrandActionCategoryV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/action_category/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId }
      ]
    });
  }
}


