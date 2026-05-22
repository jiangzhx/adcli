// Generated from oceanengine/ad_open_sdk_go api/api_creative_procedural_creative_create_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CreativeProceduralCreativeCreateV2Request, CreativeProceduralCreativeCreateV2Response } from "../models/index";


export interface CreativeProceduralCreativeCreateV2ApiOpenApi2CreativeProceduralCreativeCreatePostRequest {
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

  async openApi2CreativeProceduralCreativeCreatePost(request: CreativeProceduralCreativeCreateV2ApiOpenApi2CreativeProceduralCreativeCreatePostRequest): Promise<CreativeProceduralCreativeCreateV2Response> {
    const response = await this.openApi2CreativeProceduralCreativeCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2CreativeProceduralCreativeCreatePostWithHttpInfo(request: CreativeProceduralCreativeCreateV2ApiOpenApi2CreativeProceduralCreativeCreatePostRequest): Promise<ApiResponse<CreativeProceduralCreativeCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<CreativeProceduralCreativeCreateV2Response>({
      method: "POST",
      path: "/open_api/2/creative/procedural_creative/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.creativeProceduralCreativeCreateV2Request
    });
  }
}


