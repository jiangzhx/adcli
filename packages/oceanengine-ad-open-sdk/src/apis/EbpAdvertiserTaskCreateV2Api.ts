// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { EbpAdvertiserTaskCreateV2Request, EbpAdvertiserTaskCreateV2Response } from "../models";


export class EbpAdvertiserTaskCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2EbpAdvertiserTaskCreatePost(ebpAdvertiserTaskCreateV2Request: EbpAdvertiserTaskCreateV2Request): Promise<EbpAdvertiserTaskCreateV2Response> {
    const response = await this.openApi2EbpAdvertiserTaskCreatePostWithHttpInfo(ebpAdvertiserTaskCreateV2Request);
    return response.data;
  }

  async openApi2EbpAdvertiserTaskCreatePostWithHttpInfo(ebpAdvertiserTaskCreateV2Request: EbpAdvertiserTaskCreateV2Request): Promise<ApiResponse<EbpAdvertiserTaskCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<EbpAdvertiserTaskCreateV2Response>({
      method: "POST",
      path: "/open_api/2/ebp/advertiser/task/create/",
      queryParams: [

      ],
      body: ebpAdvertiserTaskCreateV2Request
    });
  }
}


