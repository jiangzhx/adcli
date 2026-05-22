// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarComponentUpdateLinkV2Request, StarComponentUpdateLinkV2Response } from "../models";


export class StarComponentUpdateLinkV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarComponentUpdateLinkPost(request: StarComponentUpdateLinkV2Request): Promise<StarComponentUpdateLinkV2Response> {
    const response = await this.openApi2StarComponentUpdateLinkPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarComponentUpdateLinkPostWithHttpInfo(request: StarComponentUpdateLinkV2Request): Promise<ApiResponse<StarComponentUpdateLinkV2Response>> {
    return this.apiClient.requestWithHttpInfo<StarComponentUpdateLinkV2Response>({
      method: "POST",
      path: "/open_api/2/star/component/update_link/",
      queryParams: [

      ],
      body: request
    });
  }
}


