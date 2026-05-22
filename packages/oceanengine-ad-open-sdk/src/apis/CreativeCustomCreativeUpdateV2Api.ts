// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CreativeCustomCreativeUpdateV2Request, CreativeCustomCreativeUpdateV2Response } from "../models";


export class CreativeCustomCreativeUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CreativeCustomCreativeUpdatePost(creativeCustomCreativeUpdateV2Request: CreativeCustomCreativeUpdateV2Request): Promise<CreativeCustomCreativeUpdateV2Response> {
    const response = await this.openApi2CreativeCustomCreativeUpdatePostWithHttpInfo(creativeCustomCreativeUpdateV2Request);
    return response.data;
  }

  async openApi2CreativeCustomCreativeUpdatePostWithHttpInfo(creativeCustomCreativeUpdateV2Request: CreativeCustomCreativeUpdateV2Request): Promise<ApiResponse<CreativeCustomCreativeUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<CreativeCustomCreativeUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/creative/custom_creative/update/",
      queryParams: [

      ],
      body: creativeCustomCreativeUpdateV2Request
    });
  }
}


