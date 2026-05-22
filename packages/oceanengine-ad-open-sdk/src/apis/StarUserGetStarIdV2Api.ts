// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarUserGetStarIdV2Response } from "../models";


export interface OpenApi2StarUserGetStarIdGetRequest {
  starId: number | string;
  awemeAuthorId: number | string;
}

export class StarUserGetStarIdV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarUserGetStarIdGet(request: OpenApi2StarUserGetStarIdGetRequest): Promise<StarUserGetStarIdV2Response> {
    const response = await this.openApi2StarUserGetStarIdGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarUserGetStarIdGetWithHttpInfo(request: OpenApi2StarUserGetStarIdGetRequest): Promise<ApiResponse<StarUserGetStarIdV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarUserGetStarIdGet");
    }

    if (request.awemeAuthorId == null) {
      throw new ApiException("Missing the required parameter 'awemeAuthorId' when calling openApi2StarUserGetStarIdGet");
    }
    return this.apiClient.requestWithHttpInfo<StarUserGetStarIdV2Response>({
      method: "GET",
      path: "/open_api/2/star/user/get_star_id/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "aweme_author_id", value: request.awemeAuthorId }
      ]
    });
  }
}


