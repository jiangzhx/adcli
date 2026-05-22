// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AssetsCreativeComponentUpdateV2Request, AssetsCreativeComponentUpdateV2Response } from "../models";


export class AssetsCreativeComponentUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AssetsCreativeComponentUpdatePost(assetsCreativeComponentUpdateV2Request: AssetsCreativeComponentUpdateV2Request): Promise<AssetsCreativeComponentUpdateV2Response> {
    const response = await this.openApi2AssetsCreativeComponentUpdatePostWithHttpInfo(assetsCreativeComponentUpdateV2Request);
    return response.data;
  }

  async openApi2AssetsCreativeComponentUpdatePostWithHttpInfo(assetsCreativeComponentUpdateV2Request: AssetsCreativeComponentUpdateV2Request): Promise<ApiResponse<AssetsCreativeComponentUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<AssetsCreativeComponentUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/assets/creative_component/update/",
      queryParams: [

      ],
      body: assetsCreativeComponentUpdateV2Request
    });
  }
}


