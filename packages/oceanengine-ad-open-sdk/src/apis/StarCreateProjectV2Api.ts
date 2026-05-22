// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarCreateProjectV2Request, StarCreateProjectV2Response } from "../models";


export interface OpenApi2StarCreateProjectPostRequest {
  starCreateProjectV2Request?: StarCreateProjectV2Request;
}

export class StarCreateProjectV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarCreateProjectPost(request: OpenApi2StarCreateProjectPostRequest): Promise<StarCreateProjectV2Response> {
    const response = await this.openApi2StarCreateProjectPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarCreateProjectPostWithHttpInfo(request: OpenApi2StarCreateProjectPostRequest): Promise<ApiResponse<StarCreateProjectV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarCreateProjectV2Response>({
      method: "POST",
      path: "/open_api/2/star/create/project/",
      queryParams: [

      ],
      body: request.starCreateProjectV2Request
    });
  }
}


