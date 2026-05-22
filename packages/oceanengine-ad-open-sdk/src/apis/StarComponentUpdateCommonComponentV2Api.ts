// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarComponentUpdateCommonComponentV2Request, StarComponentUpdateCommonComponentV2Response } from "../models";


export class StarComponentUpdateCommonComponentV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarComponentUpdateCommonComponentPost(starComponentUpdateCommonComponentV2Request: StarComponentUpdateCommonComponentV2Request): Promise<StarComponentUpdateCommonComponentV2Response> {
    const response = await this.openApi2StarComponentUpdateCommonComponentPostWithHttpInfo(starComponentUpdateCommonComponentV2Request);
    return response.data;
  }

  async openApi2StarComponentUpdateCommonComponentPostWithHttpInfo(starComponentUpdateCommonComponentV2Request: StarComponentUpdateCommonComponentV2Request): Promise<ApiResponse<StarComponentUpdateCommonComponentV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarComponentUpdateCommonComponentV2Response>({
      method: "POST",
      path: "/open_api/2/star/component/update_common_component/",
      queryParams: [

      ],
      body: starComponentUpdateCommonComponentV2Request
    });
  }
}


