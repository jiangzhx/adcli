// Generated from oceanengine/ad_open_sdk_go api/api_star_mcn_provider_handle_joined_author_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarMcnProviderHandleJoinedAuthorV2Request, StarMcnProviderHandleJoinedAuthorV2Response } from "../models/index";


export interface StarMcnProviderHandleJoinedAuthorV2ApiOpenApi2StarMcnProviderHandleJoinedAuthorPostRequest {
  starMcnProviderHandleJoinedAuthorV2Request?: StarMcnProviderHandleJoinedAuthorV2Request;
}

export class StarMcnProviderHandleJoinedAuthorV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnProviderHandleJoinedAuthorPost(request: StarMcnProviderHandleJoinedAuthorV2ApiOpenApi2StarMcnProviderHandleJoinedAuthorPostRequest): Promise<StarMcnProviderHandleJoinedAuthorV2Response> {
    const response = await this.openApi2StarMcnProviderHandleJoinedAuthorPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarMcnProviderHandleJoinedAuthorPostWithHttpInfo(request: StarMcnProviderHandleJoinedAuthorV2ApiOpenApi2StarMcnProviderHandleJoinedAuthorPostRequest): Promise<ApiResponse<StarMcnProviderHandleJoinedAuthorV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarMcnProviderHandleJoinedAuthorV2Response>({
      method: "POST",
      path: "/open_api/2/star/mcn/provider_handle_joined_author/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starMcnProviderHandleJoinedAuthorV2Request
    });
  }
}


