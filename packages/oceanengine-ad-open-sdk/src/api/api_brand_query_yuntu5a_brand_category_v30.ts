// Generated from oceanengine/ad_open_sdk_go api/api_brand_query_yuntu5a_brand_category_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandQueryYuntu5aBrandCategoryV30Response } from "../models/index";


export interface BrandQueryYuntu5aBrandCategoryV30ApiOpenApiV30BrandQueryYuntu5aBrandCategoryGetRequest {
  advertiserId: number | string;
}

export class BrandQueryYuntu5aBrandCategoryV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandQueryYuntu5aBrandCategoryGet(request: BrandQueryYuntu5aBrandCategoryV30ApiOpenApiV30BrandQueryYuntu5aBrandCategoryGetRequest): Promise<BrandQueryYuntu5aBrandCategoryV30Response> {
    const response = await this.openApiV30BrandQueryYuntu5aBrandCategoryGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandQueryYuntu5aBrandCategoryGetWithHttpInfo(request: BrandQueryYuntu5aBrandCategoryV30ApiOpenApiV30BrandQueryYuntu5aBrandCategoryGetRequest): Promise<ApiResponse<BrandQueryYuntu5aBrandCategoryV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30BrandQueryYuntu5aBrandCategoryGet");
    }
    return this.apiClient.requestWithHttpInfo<BrandQueryYuntu5aBrandCategoryV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/query_yuntu_5a_brand_category/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


