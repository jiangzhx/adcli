// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CreativeProceduralCreativeCreateV2Request, CreativeProceduralCreativeCreateV2Response } from "../models";


export interface OpenApi2CreativeProceduralCreativeCreatePostRequest {
  creativeProceduralCreativeCreateV2Request?: CreativeProceduralCreativeCreateV2Request;
}

export class CreativeProceduralCreativeCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CreativeProceduralCreativeCreatePost(request: OpenApi2CreativeProceduralCreativeCreatePostRequest): Promise<CreativeProceduralCreativeCreateV2Response> {
    const response = await this.openApi2CreativeProceduralCreativeCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2CreativeProceduralCreativeCreatePostWithHttpInfo(request: OpenApi2CreativeProceduralCreativeCreatePostRequest): Promise<ApiResponse<CreativeProceduralCreativeCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<CreativeProceduralCreativeCreateV2Response>({
      method: "POST",
      path: "/open_api/2/creative/procedural_creative/create/",
      queryParams: [

      ],
      body: request.creativeProceduralCreativeCreateV2Request
    });
  }
}


