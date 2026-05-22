// Generated from oceanengine/ad_open_sdk_go api/api_star_get_create_challenge_data_dict_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarGetCreateChallengeDataDictV2Response } from "../models/index";


export interface StarGetCreateChallengeDataDictV2ApiOpenApi2StarGetCreateChallengeDataDictGetRequest {
  starId: number | string;
}

export class StarGetCreateChallengeDataDictV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarGetCreateChallengeDataDictGet(request: StarGetCreateChallengeDataDictV2ApiOpenApi2StarGetCreateChallengeDataDictGetRequest): Promise<StarGetCreateChallengeDataDictV2Response> {
    const response = await this.openApi2StarGetCreateChallengeDataDictGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarGetCreateChallengeDataDictGetWithHttpInfo(request: StarGetCreateChallengeDataDictV2ApiOpenApi2StarGetCreateChallengeDataDictGetRequest): Promise<ApiResponse<StarGetCreateChallengeDataDictV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarGetCreateChallengeDataDictGet");
    }
    return this.apiClient.requestWithHttpInfo<StarGetCreateChallengeDataDictV2Response>({
      method: "GET",
      path: "/open_api/2/star/get_create_challenge_data_dict/",
      queryParams: [
        { name: "star_id", value: request.starId }
      ]
    });
  }
}


