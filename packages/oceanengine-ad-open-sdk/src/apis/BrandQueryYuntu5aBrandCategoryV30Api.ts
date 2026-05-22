// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandQueryYuntu5aBrandCategoryV30Response } from "../models";


export class BrandQueryYuntu5aBrandCategoryV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandQueryYuntu5aBrandCategoryGet(advertiserId: number): Promise<BrandQueryYuntu5aBrandCategoryV30Response> {
    const response = await this.openApiV30BrandQueryYuntu5aBrandCategoryGetWithHttpInfo(advertiserId);
    return response.data;
  }

  async openApiV30BrandQueryYuntu5aBrandCategoryGetWithHttpInfo(advertiserId: number): Promise<ApiResponse<BrandQueryYuntu5aBrandCategoryV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30BrandQueryYuntu5aBrandCategoryGet");
    }
    return this.apiClient.requestWithHttpInfo<BrandQueryYuntu5aBrandCategoryV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/query_yuntu_5a_brand_category/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId }
      ]
    });
  }
}


