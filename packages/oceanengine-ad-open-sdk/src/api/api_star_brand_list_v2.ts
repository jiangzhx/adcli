// Generated from oceanengine/ad_open_sdk_go api/api_star_brand_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarBrandListV2Response } from "../models/index";


export interface StarBrandListV2ApiOpenApi2StarBrandListGetRequest {
  starId: number | string;
}

export class StarBrandListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarBrandListGet(request: StarBrandListV2ApiOpenApi2StarBrandListGetRequest): Promise<StarBrandListV2Response> {
    const response = await this.openApi2StarBrandListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarBrandListGetWithHttpInfo(request: StarBrandListV2ApiOpenApi2StarBrandListGetRequest): Promise<ApiResponse<StarBrandListV2Response>> {
    if (request.starId == null) {
      throw new ApiException("starId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<StarBrandListV2Response>({
      method: "GET",
      path: "/open_api/2/star/brand/list/",
      queryParams: [
        { name: "star_id", value: request.starId }
      ]
    });
  }
}


