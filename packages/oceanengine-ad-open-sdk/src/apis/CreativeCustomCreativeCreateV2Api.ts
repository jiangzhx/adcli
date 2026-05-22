// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CreativeCustomCreativeCreateV2Request, CreativeCustomCreativeCreateV2Response } from "../models";


export interface OpenApi2CreativeCustomCreativeCreatePostRequest {
  creativeCustomCreativeCreateV2Request?: CreativeCustomCreativeCreateV2Request;
}

export class CreativeCustomCreativeCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CreativeCustomCreativeCreatePost(request: OpenApi2CreativeCustomCreativeCreatePostRequest): Promise<CreativeCustomCreativeCreateV2Response> {
    const response = await this.openApi2CreativeCustomCreativeCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2CreativeCustomCreativeCreatePostWithHttpInfo(request: OpenApi2CreativeCustomCreativeCreatePostRequest): Promise<ApiResponse<CreativeCustomCreativeCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<CreativeCustomCreativeCreateV2Response>({
      method: "POST",
      path: "/open_api/2/creative/custom_creative/create/",
      queryParams: [

      ],
      body: request.creativeCustomCreativeCreateV2Request
    });
  }
}


