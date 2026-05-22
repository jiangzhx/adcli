// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AssetsCreativeComponentCreateV2Request, AssetsCreativeComponentCreateV2Response } from "../models";


export interface OpenApi2AssetsCreativeComponentCreatePostRequest {
  assetsCreativeComponentCreateV2Request?: AssetsCreativeComponentCreateV2Request;
}

export class AssetsCreativeComponentCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AssetsCreativeComponentCreatePost(request: OpenApi2AssetsCreativeComponentCreatePostRequest): Promise<AssetsCreativeComponentCreateV2Response> {
    const response = await this.openApi2AssetsCreativeComponentCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AssetsCreativeComponentCreatePostWithHttpInfo(request: OpenApi2AssetsCreativeComponentCreatePostRequest): Promise<ApiResponse<AssetsCreativeComponentCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<AssetsCreativeComponentCreateV2Response>({
      method: "POST",
      path: "/open_api/2/assets/creative_component/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.assetsCreativeComponentCreateV2Request
    });
  }
}


