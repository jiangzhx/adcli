// Generated from oceanengine/ad_open_sdk_go api/api_star_user_get_star_id_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarUserGetStarIdV2Response } from "../models/index";


export interface StarUserGetStarIdV2ApiOpenApi2StarUserGetStarIdGetRequest {
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

  async openApi2StarUserGetStarIdGet(request: StarUserGetStarIdV2ApiOpenApi2StarUserGetStarIdGetRequest): Promise<StarUserGetStarIdV2Response> {
    const response = await this.openApi2StarUserGetStarIdGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarUserGetStarIdGetWithHttpInfo(request: StarUserGetStarIdV2ApiOpenApi2StarUserGetStarIdGetRequest): Promise<ApiResponse<StarUserGetStarIdV2Response>> {
    if (request.starId == null) {
      throw new ApiException("starId is required and must be specified");
    }

    if (request.awemeAuthorId == null) {
      throw new ApiException("awemeAuthorId is required and must be specified");
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


