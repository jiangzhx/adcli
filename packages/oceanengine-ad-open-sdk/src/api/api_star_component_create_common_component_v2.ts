// Generated from oceanengine/ad_open_sdk_go api/api_star_component_create_common_component_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarComponentCreateCommonComponentV2Request, StarComponentCreateCommonComponentV2Response } from "../models/index";


export interface StarComponentCreateCommonComponentV2ApiOpenApi2StarComponentCreateCommonComponentPostRequest {
  starComponentCreateCommonComponentV2Request?: StarComponentCreateCommonComponentV2Request;
}

export class StarComponentCreateCommonComponentV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarComponentCreateCommonComponentPost(request: StarComponentCreateCommonComponentV2ApiOpenApi2StarComponentCreateCommonComponentPostRequest): Promise<StarComponentCreateCommonComponentV2Response> {
    const response = await this.openApi2StarComponentCreateCommonComponentPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarComponentCreateCommonComponentPostWithHttpInfo(request: StarComponentCreateCommonComponentV2ApiOpenApi2StarComponentCreateCommonComponentPostRequest): Promise<ApiResponse<StarComponentCreateCommonComponentV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarComponentCreateCommonComponentV2Response>({
      method: "POST",
      path: "/open_api/2/star/component/create_common_component/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starComponentCreateCommonComponentV2Request
    });
  }
}


