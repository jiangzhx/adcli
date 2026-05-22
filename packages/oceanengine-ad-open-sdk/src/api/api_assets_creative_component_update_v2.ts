// Generated from oceanengine/ad_open_sdk_go api/api_assets_creative_component_update_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AssetsCreativeComponentUpdateV2Request, AssetsCreativeComponentUpdateV2Response } from "../models/index";


export interface AssetsCreativeComponentUpdateV2ApiOpenApi2AssetsCreativeComponentUpdatePostRequest {
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

  async openApi2AssetsCreativeComponentUpdatePost(request: AssetsCreativeComponentUpdateV2ApiOpenApi2AssetsCreativeComponentUpdatePostRequest): Promise<AssetsCreativeComponentUpdateV2Response> {
    const response = await this.openApi2AssetsCreativeComponentUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AssetsCreativeComponentUpdatePostWithHttpInfo(request: AssetsCreativeComponentUpdateV2ApiOpenApi2AssetsCreativeComponentUpdatePostRequest): Promise<ApiResponse<AssetsCreativeComponentUpdateV2Response>> {

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


