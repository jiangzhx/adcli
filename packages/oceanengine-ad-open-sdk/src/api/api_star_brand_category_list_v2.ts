// Generated from oceanengine/ad_open_sdk_go api/api_star_brand_category_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarBrandCategoryListV2Response } from "../models/index";


export interface StarBrandCategoryListV2ApiOpenApi2StarBrandCategoryListGetRequest {
  starId: number | string;
  brandId: number | string;
  industry: string[];
}

export class StarBrandCategoryListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarBrandCategoryListGet(request: StarBrandCategoryListV2ApiOpenApi2StarBrandCategoryListGetRequest): Promise<StarBrandCategoryListV2Response> {
    const response = await this.openApi2StarBrandCategoryListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarBrandCategoryListGetWithHttpInfo(request: StarBrandCategoryListV2ApiOpenApi2StarBrandCategoryListGetRequest): Promise<ApiResponse<StarBrandCategoryListV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarBrandCategoryListGet");
    }

    if (request.brandId == null) {
      throw new ApiException("Missing the required parameter 'brandId' when calling openApi2StarBrandCategoryListGet");
    }

    if (request.industry == null) {
      throw new ApiException("Missing the required parameter 'industry' when calling openApi2StarBrandCategoryListGet");
    }
    return this.apiClient.requestWithHttpInfo<StarBrandCategoryListV2Response>({
      method: "GET",
      path: "/open_api/2/star/brand_category/list/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "brand_id", value: request.brandId },
        { name: "industry", value: request.industry }
      ]
    });
  }
}


