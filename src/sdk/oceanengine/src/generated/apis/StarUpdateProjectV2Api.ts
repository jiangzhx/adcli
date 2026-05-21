// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarUpdateProjectV2Request, StarUpdateProjectV2Response } from "../models";


export class StarUpdateProjectV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarUpdateProjectPost(starUpdateProjectV2Request: StarUpdateProjectV2Request): Promise<StarUpdateProjectV2Response> {
    const response = await this.openApi2StarUpdateProjectPostWithHttpInfo(starUpdateProjectV2Request);
    return response.data;
  }

  async openApi2StarUpdateProjectPostWithHttpInfo(starUpdateProjectV2Request: StarUpdateProjectV2Request): Promise<ApiResponse<StarUpdateProjectV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarUpdateProjectV2Response>({
      method: "POST",
      path: "/open_api/2/star/update/project/",
      queryParams: [

      ],
      body: starUpdateProjectV2Request
    });
  }
}


