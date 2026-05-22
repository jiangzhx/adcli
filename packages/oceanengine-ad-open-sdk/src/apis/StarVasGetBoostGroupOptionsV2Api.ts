// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarVasGetBoostGroupOptionsV2Response } from "../models";


export interface OpenApi2StarVasGetBoostGroupOptionsGetRequest {
  starId: number | string;
}

export class StarVasGetBoostGroupOptionsV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarVasGetBoostGroupOptionsGet(request: OpenApi2StarVasGetBoostGroupOptionsGetRequest): Promise<StarVasGetBoostGroupOptionsV2Response> {
    const response = await this.openApi2StarVasGetBoostGroupOptionsGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarVasGetBoostGroupOptionsGetWithHttpInfo(request: OpenApi2StarVasGetBoostGroupOptionsGetRequest): Promise<ApiResponse<StarVasGetBoostGroupOptionsV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarVasGetBoostGroupOptionsGet");
    }
    return this.apiClient.requestWithHttpInfo<StarVasGetBoostGroupOptionsV2Response>({
      method: "GET",
      path: "/open_api/2/star/vas/get_boost_group_options/",
      queryParams: [
        { name: "star_id", value: request.starId }
      ]
    });
  }
}


