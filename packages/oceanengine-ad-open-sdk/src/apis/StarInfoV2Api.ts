// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarInfoV2Response } from "../models";


export class StarInfoV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarInfoGet(starIds: number[]): Promise<StarInfoV2Response> {
    const response = await this.openApi2StarInfoGetWithHttpInfo(starIds);
    return response.data;
  }

  async openApi2StarInfoGetWithHttpInfo(starIds: number[]): Promise<ApiResponse<StarInfoV2Response>> {
    if (starIds == null) {
      throw new ApiException("Missing the required parameter 'starIds' when calling openApi2StarInfoGet");
    }
    return this.apiClient.requestWithHttpInfo<StarInfoV2Response>({
      method: "GET",
      path: "/open_api/2/star/info/",
      queryParams: [
        { name: "star_ids", value: starIds, collectionFormat: "csv" }
      ]
    });
  }
}


