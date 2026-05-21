// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarGetCreateChallengeDataDictV2Response } from "../models";


export class StarGetCreateChallengeDataDictV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarGetCreateChallengeDataDictGet(starId: number): Promise<StarGetCreateChallengeDataDictV2Response> {
    const response = await this.openApi2StarGetCreateChallengeDataDictGetWithHttpInfo(starId);
    return response.data;
  }

  async openApi2StarGetCreateChallengeDataDictGetWithHttpInfo(starId: number): Promise<ApiResponse<StarGetCreateChallengeDataDictV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarGetCreateChallengeDataDictGet");
    }
    return this.apiClient.requestWithHttpInfo<StarGetCreateChallengeDataDictV2Response>({
      method: "GET",
      path: "/open_api/2/star/get_create_challenge_data_dict/",
      queryParams: [
        { name: "star_id", value: starId }
      ]
    });
  }
}


