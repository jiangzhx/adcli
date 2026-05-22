// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarBrandListV2Response } from "../models";


export interface OpenApi2StarBrandListGetRequest {
  starId: number;
}

export class StarBrandListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarBrandListGet(request: OpenApi2StarBrandListGetRequest): Promise<StarBrandListV2Response> {
    const response = await this.openApi2StarBrandListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarBrandListGetWithHttpInfo(request: OpenApi2StarBrandListGetRequest): Promise<ApiResponse<StarBrandListV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarBrandListGet");
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


