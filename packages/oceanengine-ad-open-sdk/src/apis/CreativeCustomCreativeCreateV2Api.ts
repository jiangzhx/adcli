// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CreativeCustomCreativeCreateV2Request, CreativeCustomCreativeCreateV2Response } from "../models";


export class CreativeCustomCreativeCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CreativeCustomCreativeCreatePost(creativeCustomCreativeCreateV2Request: CreativeCustomCreativeCreateV2Request): Promise<CreativeCustomCreativeCreateV2Response> {
    const response = await this.openApi2CreativeCustomCreativeCreatePostWithHttpInfo(creativeCustomCreativeCreateV2Request);
    return response.data;
  }

  async openApi2CreativeCustomCreativeCreatePostWithHttpInfo(creativeCustomCreativeCreateV2Request: CreativeCustomCreativeCreateV2Request): Promise<ApiResponse<CreativeCustomCreativeCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<CreativeCustomCreativeCreateV2Response>({
      method: "POST",
      path: "/open_api/2/creative/custom_creative/create/",
      queryParams: [

      ],
      body: creativeCustomCreativeCreateV2Request
    });
  }
}


