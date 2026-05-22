// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarDemandGetEpisodeLimitV2Response } from "../models";


export class StarDemandGetEpisodeLimitV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemandGetEpisodeLimitGet(starId: number, albumId: number): Promise<StarDemandGetEpisodeLimitV2Response> {
    const response = await this.openApi2StarDemandGetEpisodeLimitGetWithHttpInfo(starId, albumId);
    return response.data;
  }

  async openApi2StarDemandGetEpisodeLimitGetWithHttpInfo(starId: number, albumId: number): Promise<ApiResponse<StarDemandGetEpisodeLimitV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarDemandGetEpisodeLimitGet");
    }

    if (albumId == null) {
      throw new ApiException("Missing the required parameter 'albumId' when calling openApi2StarDemandGetEpisodeLimitGet");
    }
    return this.apiClient.requestWithHttpInfo<StarDemandGetEpisodeLimitV2Response>({
      method: "GET",
      path: "/open_api/2/star/demand/get_episode_limit/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "album_id", value: albumId }
      ]
    });
  }
}


