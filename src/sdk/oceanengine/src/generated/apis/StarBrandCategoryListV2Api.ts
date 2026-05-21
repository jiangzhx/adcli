// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarBrandCategoryListV2Response } from "../models";


export class StarBrandCategoryListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarBrandCategoryListGet(starId: number, brandId: number, industry: string[]): Promise<StarBrandCategoryListV2Response> {
    const response = await this.openApi2StarBrandCategoryListGetWithHttpInfo(starId, brandId, industry);
    return response.data;
  }

  async openApi2StarBrandCategoryListGetWithHttpInfo(starId: number, brandId: number, industry: string[]): Promise<ApiResponse<StarBrandCategoryListV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarBrandCategoryListGet");
    }

    if (brandId == null) {
      throw new ApiException("Missing the required parameter 'brandId' when calling openApi2StarBrandCategoryListGet");
    }

    if (industry == null) {
      throw new ApiException("Missing the required parameter 'industry' when calling openApi2StarBrandCategoryListGet");
    }
    return this.apiClient.requestWithHttpInfo<StarBrandCategoryListV2Response>({
      method: "GET",
      path: "/open_api/2/star/brand_category/list/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "brand_id", value: brandId },
        { name: "industry", value: industry, collectionFormat: "csv" }
      ]
    });
  }
}


