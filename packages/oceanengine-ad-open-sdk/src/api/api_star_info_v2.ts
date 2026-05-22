// Generated from oceanengine/ad_open_sdk_go api/api_star_info_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarInfoV2Response } from "../models/index";


export interface StarInfoV2ApiOpenApi2StarInfoGetRequest {
  starIds: (number | string)[];
}

export class StarInfoV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarInfoGet(request: StarInfoV2ApiOpenApi2StarInfoGetRequest): Promise<StarInfoV2Response> {
    const response = await this.openApi2StarInfoGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarInfoGetWithHttpInfo(request: StarInfoV2ApiOpenApi2StarInfoGetRequest): Promise<ApiResponse<StarInfoV2Response>> {
    if (request.starIds == null) {
      throw new ApiException("starIds is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<StarInfoV2Response>({
      method: "GET",
      path: "/open_api/2/star/info/",
      queryParams: [
        { name: "star_ids", value: request.starIds }
      ]
    });
  }
}


