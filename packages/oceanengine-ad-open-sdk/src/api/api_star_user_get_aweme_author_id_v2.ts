// Generated from oceanengine/ad_open_sdk_go api/api_star_user_get_aweme_author_id_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarUserGetAwemeAuthorIdV2Response } from "../models/index";


export interface StarUserGetAwemeAuthorIdV2ApiOpenApi2StarUserGetAwemeAuthorIdGetRequest {
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

  async openApi2StarUserGetAwemeAuthorIdGet(request: StarUserGetAwemeAuthorIdV2ApiOpenApi2StarUserGetAwemeAuthorIdGetRequest): Promise<StarUserGetAwemeAuthorIdV2Response> {
    const response = await this.openApi2StarUserGetAwemeAuthorIdGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarUserGetAwemeAuthorIdGetWithHttpInfo(request: StarUserGetAwemeAuthorIdV2ApiOpenApi2StarUserGetAwemeAuthorIdGetRequest): Promise<ApiResponse<StarUserGetAwemeAuthorIdV2Response>> {
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


