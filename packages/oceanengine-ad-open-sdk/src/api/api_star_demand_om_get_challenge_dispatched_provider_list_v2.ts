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
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarDemandOmGetChallengeDispatchedProviderListGet");
    }

    if (request.challengeTaskId == null) {
      throw new ApiException("Missing the required parameter 'challengeTaskId' when calling openApi2StarDemandOmGetChallengeDispatchedProviderListGet");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2StarDemandOmGetChallengeDispatchedProviderListGet");
    }

    if (request.limit == null) {
      throw new ApiException("Missing the required parameter 'limit' when calling openApi2StarDemandOmGetChallengeDispatchedProviderListGet");
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


