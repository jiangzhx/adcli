// Generated from oceanengine/ad_open_sdk_go api/api_ad_ud_update_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdUdUpdateV2Request, AdUdUpdateV2Response } from "../models/index";


export interface AdUdUpdateV2ApiOpenApi2AdUdUpdatePostRequest {
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

  async openApi2AdUdUpdatePost(request: AdUdUpdateV2ApiOpenApi2AdUdUpdatePostRequest): Promise<AdUdUpdateV2Response> {
    const response = await this.openApi2AdUdUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AdUdUpdatePostWithHttpInfo(request: AdUdUpdateV2ApiOpenApi2AdUdUpdatePostRequest): Promise<ApiResponse<AdUdUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<AdUdUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/ad/ud/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.adUdUpdateV2Request
    });
  }
}


