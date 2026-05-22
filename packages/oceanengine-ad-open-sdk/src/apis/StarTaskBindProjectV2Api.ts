// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarTaskBindProjectV2Request, StarTaskBindProjectV2Response } from "../models";


export class StarTaskBindProjectV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarTaskBindProjectPost(request: StarTaskBindProjectV2Request): Promise<StarTaskBindProjectV2Response> {
    const response = await this.openApi2StarTaskBindProjectPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarTaskBindProjectPostWithHttpInfo(request: StarTaskBindProjectV2Request): Promise<ApiResponse<StarTaskBindProjectV2Response>> {
    return this.apiClient.requestWithHttpInfo<StarTaskBindProjectV2Response>({
      method: "POST",
      path: "/open_api/2/star/task/bind_project/",
      queryParams: [

      ],
      body: request
    });
  }
}


