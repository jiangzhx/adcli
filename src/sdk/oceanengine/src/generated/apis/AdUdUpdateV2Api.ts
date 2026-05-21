// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { AdUdUpdateV2Request, AdUdUpdateV2Response } from "../models";


export class AdUdUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdUdUpdatePost(adUdUpdateV2Request: AdUdUpdateV2Request): Promise<AdUdUpdateV2Response> {
    const response = await this.openApi2AdUdUpdatePostWithHttpInfo(adUdUpdateV2Request);
    return response.data;
  }

  async openApi2AdUdUpdatePostWithHttpInfo(adUdUpdateV2Request: AdUdUpdateV2Request): Promise<ApiResponse<AdUdUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<AdUdUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/ad/ud/update/",
      queryParams: [

      ],
      body: adUdUpdateV2Request
    });
  }
}


