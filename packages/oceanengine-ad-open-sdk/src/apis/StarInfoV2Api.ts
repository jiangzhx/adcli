// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarInfoV2Response } from "../models";


export interface OpenApi2StarInfoGetRequest {
  starIds: number[];
}

export class StarInfoV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarInfoGet(request: OpenApi2StarInfoGetRequest): Promise<StarInfoV2Response> {
    const response = await this.openApi2StarInfoGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarInfoGetWithHttpInfo(request: OpenApi2StarInfoGetRequest): Promise<ApiResponse<StarInfoV2Response>> {
    if (request.starIds == null) {
      throw new ApiException("Missing the required parameter 'starIds' when calling openApi2StarInfoGet");
    }
    return this.apiClient.requestWithHttpInfo<StarInfoV2Response>({
      method: "GET",
      path: "/open_api/2/star/info/",
      queryParams: [
        { name: "star_ids", value: request.starIds, collectionFormat: "csv" }
      ]
    });
  }
}


