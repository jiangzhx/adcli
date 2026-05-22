// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarMcnProviderHandleJoinedAuthorV2Request, StarMcnProviderHandleJoinedAuthorV2Response } from "../models";


export class StarMcnProviderHandleJoinedAuthorV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnProviderHandleJoinedAuthorPost(starMcnProviderHandleJoinedAuthorV2Request: StarMcnProviderHandleJoinedAuthorV2Request): Promise<StarMcnProviderHandleJoinedAuthorV2Response> {
    const response = await this.openApi2StarMcnProviderHandleJoinedAuthorPostWithHttpInfo(starMcnProviderHandleJoinedAuthorV2Request);
    return response.data;
  }

  async openApi2StarMcnProviderHandleJoinedAuthorPostWithHttpInfo(starMcnProviderHandleJoinedAuthorV2Request: StarMcnProviderHandleJoinedAuthorV2Request): Promise<ApiResponse<StarMcnProviderHandleJoinedAuthorV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarMcnProviderHandleJoinedAuthorV2Response>({
      method: "POST",
      path: "/open_api/2/star/mcn/provider_handle_joined_author/",
      queryParams: [

      ],
      body: starMcnProviderHandleJoinedAuthorV2Request
    });
  }
}


