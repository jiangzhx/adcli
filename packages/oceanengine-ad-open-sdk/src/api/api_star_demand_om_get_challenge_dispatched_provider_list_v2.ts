// Generated from oceanengine/ad_open_sdk_go api/api_star_demand_om_get_challenge_dispatched_provider_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarDemandOmGetChallengeDispatchedProviderListV2Response } from "../models/index";


export interface StarDemandOmGetChallengeDispatchedProviderListV2ApiOpenApi2StarDemandOmGetChallengeDispatchedProviderListGetRequest {
  starId: number | string;
  challengeTaskId: number | string;
  page: number;
  limit: number;
}

export class StarDemandOmGetChallengeDispatchedProviderListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemandOmGetChallengeDispatchedProviderListGet(request: StarDemandOmGetChallengeDispatchedProviderListV2ApiOpenApi2StarDemandOmGetChallengeDispatchedProviderListGetRequest): Promise<StarDemandOmGetChallengeDispatchedProviderListV2Response> {
    const response = await this.openApi2StarDemandOmGetChallengeDispatchedProviderListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarDemandOmGetChallengeDispatchedProviderListGetWithHttpInfo(request: StarDemandOmGetChallengeDispatchedProviderListV2ApiOpenApi2StarDemandOmGetChallengeDispatchedProviderListGetRequest): Promise<ApiResponse<StarDemandOmGetChallengeDispatchedProviderListV2Response>> {
    if (request.starId == null) {
      throw new ApiException("starId is required and must be specified");
    }

    if (request.challengeTaskId == null) {
      throw new ApiException("challengeTaskId is required and must be specified");
    }

    if (request.page == null) {
      throw new ApiException("page is required and must be specified");
    }

    if (request.limit == null) {
      throw new ApiException("limit is required and must be specified");
    }

    if (request.limit != null && Number(request.limit) > 200) {
      throw new ApiException("limit must be less than 200");
    }
    return this.apiClient.requestWithHttpInfo<StarDemandOmGetChallengeDispatchedProviderListV2Response>({
      method: "GET",
      path: "/open_api/2/star/demand/om_get_challenge_dispatched_provider_list/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "challenge_task_id", value: request.challengeTaskId },
        { name: "page", value: request.page },
        { name: "limit", value: request.limit }
      ]
    });
  }
}


