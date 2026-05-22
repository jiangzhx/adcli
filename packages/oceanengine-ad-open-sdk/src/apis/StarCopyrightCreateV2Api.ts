// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarCopyrightCreateV2Request, StarCopyrightCreateV2Response } from "../models";


export class StarCopyrightCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarCopyrightCreatePost(request: StarCopyrightCreateV2Request): Promise<StarCopyrightCreateV2Response> {
    const response = await this.openApi2StarCopyrightCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarCopyrightCreatePostWithHttpInfo(request: StarCopyrightCreateV2Request): Promise<ApiResponse<StarCopyrightCreateV2Response>> {
    return this.apiClient.requestWithHttpInfo<StarCopyrightCreateV2Response>({
      method: "POST",
      path: "/open_api/2/star/copyright/create/",
      queryParams: [

      ],
      body: request
    });
  }
}


