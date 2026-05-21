// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarComponentCreateCommonComponentV2Request, StarComponentCreateCommonComponentV2Response } from "../models";


export class StarComponentCreateCommonComponentV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarComponentCreateCommonComponentPost(starComponentCreateCommonComponentV2Request: StarComponentCreateCommonComponentV2Request): Promise<StarComponentCreateCommonComponentV2Response> {
    const response = await this.openApi2StarComponentCreateCommonComponentPostWithHttpInfo(starComponentCreateCommonComponentV2Request);
    return response.data;
  }

  async openApi2StarComponentCreateCommonComponentPostWithHttpInfo(starComponentCreateCommonComponentV2Request: StarComponentCreateCommonComponentV2Request): Promise<ApiResponse<StarComponentCreateCommonComponentV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarComponentCreateCommonComponentV2Response>({
      method: "POST",
      path: "/open_api/2/star/component/create_common_component/",
      queryParams: [

      ],
      body: starComponentCreateCommonComponentV2Request
    });
  }
}


