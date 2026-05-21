// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarCreateProjectV2Request, StarCreateProjectV2Response } from "../models";


export class StarCreateProjectV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarCreateProjectPost(starCreateProjectV2Request: StarCreateProjectV2Request): Promise<StarCreateProjectV2Response> {
    const response = await this.openApi2StarCreateProjectPostWithHttpInfo(starCreateProjectV2Request);
    return response.data;
  }

  async openApi2StarCreateProjectPostWithHttpInfo(starCreateProjectV2Request: StarCreateProjectV2Request): Promise<ApiResponse<StarCreateProjectV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarCreateProjectV2Response>({
      method: "POST",
      path: "/open_api/2/star/create/project/",
      queryParams: [

      ],
      body: starCreateProjectV2Request
    });
  }
}


