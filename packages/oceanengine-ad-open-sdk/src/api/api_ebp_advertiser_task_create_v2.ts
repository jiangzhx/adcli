// Generated from oceanengine/ad_open_sdk_go api/api_ebp_advertiser_task_create_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { EbpAdvertiserTaskCreateV2Request, EbpAdvertiserTaskCreateV2Response } from "../models/index";


export interface EbpAdvertiserTaskCreateV2ApiOpenApi2EbpAdvertiserTaskCreatePostRequest {
  ebpAdvertiserTaskCreateV2Request?: EbpAdvertiserTaskCreateV2Request;
}

export class EbpAdvertiserTaskCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2EbpAdvertiserTaskCreatePost(request: EbpAdvertiserTaskCreateV2ApiOpenApi2EbpAdvertiserTaskCreatePostRequest): Promise<EbpAdvertiserTaskCreateV2Response> {
    const response = await this.openApi2EbpAdvertiserTaskCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2EbpAdvertiserTaskCreatePostWithHttpInfo(request: EbpAdvertiserTaskCreateV2ApiOpenApi2EbpAdvertiserTaskCreatePostRequest): Promise<ApiResponse<EbpAdvertiserTaskCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<EbpAdvertiserTaskCreateV2Response>({
      method: "POST",
      path: "/open_api/2/ebp/advertiser/task/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.ebpAdvertiserTaskCreateV2Request
    });
  }
}


