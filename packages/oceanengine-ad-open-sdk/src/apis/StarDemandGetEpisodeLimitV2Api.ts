// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarDemandGetEpisodeLimitV2Response } from "../models";


export interface OpenApi2StarDemandGetEpisodeLimitGetRequest {
  starId: number;
  albumId: number;
}

export class StarDemandGetEpisodeLimitV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemandGetEpisodeLimitGet(request: OpenApi2StarDemandGetEpisodeLimitGetRequest): Promise<StarDemandGetEpisodeLimitV2Response> {
    const response = await this.openApi2StarDemandGetEpisodeLimitGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarDemandGetEpisodeLimitGetWithHttpInfo(request: OpenApi2StarDemandGetEpisodeLimitGetRequest): Promise<ApiResponse<StarDemandGetEpisodeLimitV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarDemandGetEpisodeLimitGet");
    }

    if (request.albumId == null) {
      throw new ApiException("Missing the required parameter 'albumId' when calling openApi2StarDemandGetEpisodeLimitGet");
    }
    return this.apiClient.requestWithHttpInfo<StarDemandGetEpisodeLimitV2Response>({
      method: "GET",
      path: "/open_api/2/star/demand/get_episode_limit/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "album_id", value: request.albumId }
      ]
    });
  }
}


