// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarComponentCreateLinkV2Request, StarComponentCreateLinkV2Response } from "../models";


export class StarComponentCreateLinkV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarComponentCreateLinkPost(request: StarComponentCreateLinkV2Request): Promise<StarComponentCreateLinkV2Response> {
    const response = await this.openApi2StarComponentCreateLinkPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarComponentCreateLinkPostWithHttpInfo(request: StarComponentCreateLinkV2Request): Promise<ApiResponse<StarComponentCreateLinkV2Response>> {
    return this.apiClient.requestWithHttpInfo<StarComponentCreateLinkV2Response>({
      method: "POST",
      path: "/open_api/2/star/component/create_link/",
      queryParams: [

      ],
      body: request
    });
  }
}


