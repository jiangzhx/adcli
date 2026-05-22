// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdUpdateBidV2Request, AdUpdateBidV2Response } from "../models";


export interface OpenApi2AdUpdateBidPostRequest {
  adUpdateBidV2Request?: AdUpdateBidV2Request;
}

export class AdUpdateBidV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdUpdateBidPost(request: OpenApi2AdUpdateBidPostRequest): Promise<AdUpdateBidV2Response> {
    const response = await this.openApi2AdUpdateBidPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AdUpdateBidPostWithHttpInfo(request: OpenApi2AdUpdateBidPostRequest): Promise<ApiResponse<AdUpdateBidV2Response>> {

    return this.apiClient.requestWithHttpInfo<AdUpdateBidV2Response>({
      method: "POST",
      path: "/open_api/2/ad/update/bid/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.adUpdateBidV2Request
    });
  }
}


