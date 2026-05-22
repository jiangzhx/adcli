// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarUserGetAwemeAuthorIdV2Response } from "../models";


export interface OpenApi2StarUserGetAwemeAuthorIdGetRequest {
  starId: number | string;
  authorStarId: number | string;
}

export class StarUserGetAwemeAuthorIdV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarUserGetAwemeAuthorIdGet(request: OpenApi2StarUserGetAwemeAuthorIdGetRequest): Promise<StarUserGetAwemeAuthorIdV2Response> {
    const response = await this.openApi2StarUserGetAwemeAuthorIdGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarUserGetAwemeAuthorIdGetWithHttpInfo(request: OpenApi2StarUserGetAwemeAuthorIdGetRequest): Promise<ApiResponse<StarUserGetAwemeAuthorIdV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarUserGetAwemeAuthorIdGet");
    }

    if (request.authorStarId == null) {
      throw new ApiException("Missing the required parameter 'authorStarId' when calling openApi2StarUserGetAwemeAuthorIdGet");
    }
    return this.apiClient.requestWithHttpInfo<StarUserGetAwemeAuthorIdV2Response>({
      method: "GET",
      path: "/open_api/2/star/user/get_aweme_author_id/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "author_star_id", value: request.authorStarId }
      ]
    });
  }
}


