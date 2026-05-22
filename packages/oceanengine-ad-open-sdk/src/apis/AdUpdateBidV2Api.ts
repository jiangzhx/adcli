// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdUpdateBidV2Request, AdUpdateBidV2Response } from "../models";


export class AdUpdateBidV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdUpdateBidPost(adUpdateBidV2Request: AdUpdateBidV2Request): Promise<AdUpdateBidV2Response> {
    const response = await this.openApi2AdUpdateBidPostWithHttpInfo(adUpdateBidV2Request);
    return response.data;
  }

  async openApi2AdUpdateBidPostWithHttpInfo(adUpdateBidV2Request: AdUpdateBidV2Request): Promise<ApiResponse<AdUpdateBidV2Response>> {

    return this.apiClient.requestWithHttpInfo<AdUpdateBidV2Response>({
      method: "POST",
      path: "/open_api/2/ad/update/bid/",
      queryParams: [

      ],
      body: adUpdateBidV2Request
    });
  }
}


