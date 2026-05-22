// Generated from oceanengine/ad_open_sdk_go api/api_assets_creative_component_create_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AssetsCreativeComponentCreateV2Request, AssetsCreativeComponentCreateV2Response } from "../models/index";


export interface AssetsCreativeComponentCreateV2ApiOpenApi2AssetsCreativeComponentCreatePostRequest {
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

  async openApi2AssetsCreativeComponentCreatePost(request: AssetsCreativeComponentCreateV2ApiOpenApi2AssetsCreativeComponentCreatePostRequest): Promise<AssetsCreativeComponentCreateV2Response> {
    const response = await this.openApi2AssetsCreativeComponentCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AssetsCreativeComponentCreatePostWithHttpInfo(request: AssetsCreativeComponentCreateV2ApiOpenApi2AssetsCreativeComponentCreatePostRequest): Promise<ApiResponse<AssetsCreativeComponentCreateV2Response>> {

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


