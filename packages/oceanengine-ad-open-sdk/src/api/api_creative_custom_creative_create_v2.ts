// Generated from oceanengine/ad_open_sdk_go api/api_creative_custom_creative_create_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CreativeCustomCreativeCreateV2Request, CreativeCustomCreativeCreateV2Response } from "../models/index";


export interface CreativeCustomCreativeCreateV2ApiOpenApi2CreativeCustomCreativeCreatePostRequest {
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

  async openApi2CreativeCustomCreativeCreatePost(request: CreativeCustomCreativeCreateV2ApiOpenApi2CreativeCustomCreativeCreatePostRequest): Promise<CreativeCustomCreativeCreateV2Response> {
    const response = await this.openApi2CreativeCustomCreativeCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2CreativeCustomCreativeCreatePostWithHttpInfo(request: CreativeCustomCreativeCreateV2ApiOpenApi2CreativeCustomCreativeCreatePostRequest): Promise<ApiResponse<CreativeCustomCreativeCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<CreativeCustomCreativeCreateV2Response>({
      method: "POST",
      path: "/open_api/2/creative/custom_creative/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.creativeCustomCreativeCreateV2Request
    });
  }
}


