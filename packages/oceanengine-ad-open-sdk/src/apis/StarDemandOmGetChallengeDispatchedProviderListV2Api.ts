// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarDemandOmGetChallengeDispatchedProviderListV2Response } from "../models";


export class StarDemandOmGetChallengeDispatchedProviderListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemandOmGetChallengeDispatchedProviderListGet(starId: number, challengeTaskId: number, page: number, limit: number): Promise<StarDemandOmGetChallengeDispatchedProviderListV2Response> {
    const response = await this.openApi2StarDemandOmGetChallengeDispatchedProviderListGetWithHttpInfo(starId, challengeTaskId, page, limit);
    return response.data;
  }

  async openApi2StarDemandOmGetChallengeDispatchedProviderListGetWithHttpInfo(starId: number, challengeTaskId: number, page: number, limit: number): Promise<ApiResponse<StarDemandOmGetChallengeDispatchedProviderListV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarDemandOmGetChallengeDispatchedProviderListGet");
    }

    if (challengeTaskId == null) {
      throw new ApiException("Missing the required parameter 'challengeTaskId' when calling openApi2StarDemandOmGetChallengeDispatchedProviderListGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2StarDemandOmGetChallengeDispatchedProviderListGet");
    }

    if (limit == null) {
      throw new ApiException("Missing the required parameter 'limit' when calling openApi2StarDemandOmGetChallengeDispatchedProviderListGet");
    }
    return this.apiClient.requestWithHttpInfo<StarDemandOmGetChallengeDispatchedProviderListV2Response>({
      method: "GET",
      path: "/open_api/2/star/demand/om_get_challenge_dispatched_provider_list/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "challenge_task_id", value: challengeTaskId },
        { name: "page", value: page },
        { name: "limit", value: limit }
      ]
    });
  }
}


