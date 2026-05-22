// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarCopyrightGetV2Response } from "../models";


export class StarCopyrightGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarCopyrightGetGet(starId: number, page: number, limit: number): Promise<StarCopyrightGetV2Response> {
    const response = await this.openApi2StarCopyrightGetGetWithHttpInfo(starId, page, limit);
    return response.data;
  }

  async openApi2StarCopyrightGetGetWithHttpInfo(starId: number, page: number, limit: number): Promise<ApiResponse<StarCopyrightGetV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarCopyrightGetGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2StarCopyrightGetGet");
    }

    if (limit == null) {
      throw new ApiException("Missing the required parameter 'limit' when calling openApi2StarCopyrightGetGet");
    }
    return this.apiClient.requestWithHttpInfo<StarCopyrightGetV2Response>({
      method: "GET",
      path: "/open_api/2/star/copyright/get/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "page", value: page },
        { name: "limit", value: limit }
      ]
    });
  }
}


