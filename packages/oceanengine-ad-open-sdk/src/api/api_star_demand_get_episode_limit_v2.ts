// Generated from oceanengine/ad_open_sdk_go api/api_star_demand_get_episode_limit_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarDemandGetEpisodeLimitV2Response } from "../models/index";


export interface StarDemandGetEpisodeLimitV2ApiOpenApi2StarDemandGetEpisodeLimitGetRequest {
  starId: number | string;
  albumId: number | string;
}

export class StarDemandGetEpisodeLimitV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemandGetEpisodeLimitGet(request: StarDemandGetEpisodeLimitV2ApiOpenApi2StarDemandGetEpisodeLimitGetRequest): Promise<StarDemandGetEpisodeLimitV2Response> {
    const response = await this.openApi2StarDemandGetEpisodeLimitGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarDemandGetEpisodeLimitGetWithHttpInfo(request: StarDemandGetEpisodeLimitV2ApiOpenApi2StarDemandGetEpisodeLimitGetRequest): Promise<ApiResponse<StarDemandGetEpisodeLimitV2Response>> {
    if (request.starId == null) {
      throw new ApiException("starId is required and must be specified");
    }

    if (request.albumId == null) {
      throw new ApiException("albumId is required and must be specified");
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


