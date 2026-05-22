// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarCopyrightGetV2Response } from "../models";


export interface OpenApi2StarCopyrightGetGetRequest {
  starId: number | string;
  page: number;
  limit: number;
}

export class StarCopyrightGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarCopyrightGetGet(request: OpenApi2StarCopyrightGetGetRequest): Promise<StarCopyrightGetV2Response> {
    const response = await this.openApi2StarCopyrightGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarCopyrightGetGetWithHttpInfo(request: OpenApi2StarCopyrightGetGetRequest): Promise<ApiResponse<StarCopyrightGetV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarCopyrightGetGet");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2StarCopyrightGetGet");
    }

    if (request.limit == null) {
      throw new ApiException("Missing the required parameter 'limit' when calling openApi2StarCopyrightGetGet");
    }
    return this.apiClient.requestWithHttpInfo<StarCopyrightGetV2Response>({
      method: "GET",
      path: "/open_api/2/star/copyright/get/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "page", value: request.page },
        { name: "limit", value: request.limit }
      ]
    });
  }
}


