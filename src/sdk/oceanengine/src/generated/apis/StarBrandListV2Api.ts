// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarBrandListV2Response } from "../models";


export class StarBrandListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarBrandListGet(starId: number): Promise<StarBrandListV2Response> {
    const response = await this.openApi2StarBrandListGetWithHttpInfo(starId);
    return response.data;
  }

  async openApi2StarBrandListGetWithHttpInfo(starId: number): Promise<ApiResponse<StarBrandListV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarBrandListGet");
    }
    return this.apiClient.requestWithHttpInfo<StarBrandListV2Response>({
      method: "GET",
      path: "/open_api/2/star/brand/list/",
      queryParams: [
        { name: "star_id", value: starId }
      ]
    });
  }
}


