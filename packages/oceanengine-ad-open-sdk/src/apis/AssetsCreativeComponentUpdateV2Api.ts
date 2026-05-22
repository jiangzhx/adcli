// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AssetsCreativeComponentUpdateV2Request, AssetsCreativeComponentUpdateV2Response } from "../models";


export interface OpenApi2AssetsCreativeComponentUpdatePostRequest {
  assetsCreativeComponentUpdateV2Request?: AssetsCreativeComponentUpdateV2Request;
}

export class AssetsCreativeComponentUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AssetsCreativeComponentUpdatePost(request: OpenApi2AssetsCreativeComponentUpdatePostRequest): Promise<AssetsCreativeComponentUpdateV2Response> {
    const response = await this.openApi2AssetsCreativeComponentUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AssetsCreativeComponentUpdatePostWithHttpInfo(request: OpenApi2AssetsCreativeComponentUpdatePostRequest): Promise<ApiResponse<AssetsCreativeComponentUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<AssetsCreativeComponentUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/assets/creative_component/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.assetsCreativeComponentUpdateV2Request
    });
  }
}


