// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdUdUpdateV2Request, AdUdUpdateV2Response } from "../models";


export interface OpenApi2AdUdUpdatePostRequest {
  adUdUpdateV2Request?: AdUdUpdateV2Request;
}

export class AdUdUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdUdUpdatePost(request: OpenApi2AdUdUpdatePostRequest): Promise<AdUdUpdateV2Response> {
    const response = await this.openApi2AdUdUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AdUdUpdatePostWithHttpInfo(request: OpenApi2AdUdUpdatePostRequest): Promise<ApiResponse<AdUdUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<AdUdUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/ad/ud/update/",
      queryParams: [

      ],
      body: request.adUdUpdateV2Request
    });
  }
}


