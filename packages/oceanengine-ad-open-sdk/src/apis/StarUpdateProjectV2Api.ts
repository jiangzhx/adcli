// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarUpdateProjectV2Request, StarUpdateProjectV2Response } from "../models";


export interface OpenApi2StarUpdateProjectPostRequest {
  starUpdateProjectV2Request?: StarUpdateProjectV2Request;
}

export class StarUpdateProjectV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarUpdateProjectPost(request: OpenApi2StarUpdateProjectPostRequest): Promise<StarUpdateProjectV2Response> {
    const response = await this.openApi2StarUpdateProjectPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarUpdateProjectPostWithHttpInfo(request: OpenApi2StarUpdateProjectPostRequest): Promise<ApiResponse<StarUpdateProjectV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarUpdateProjectV2Response>({
      method: "POST",
      path: "/open_api/2/star/update/project/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starUpdateProjectV2Request
    });
  }
}


