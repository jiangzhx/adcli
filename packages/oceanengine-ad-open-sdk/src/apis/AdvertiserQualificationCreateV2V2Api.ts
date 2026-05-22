// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdvertiserQualificationCreateV2V2Request, AdvertiserQualificationCreateV2V2Response } from "../models";


export interface OpenApi2AdvertiserQualificationCreateV2PostRequest {
  advertiserQualificationCreateV2V2Request?: AdvertiserQualificationCreateV2V2Request;
}

export class AdvertiserQualificationCreateV2V2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdvertiserQualificationCreateV2Post(request: OpenApi2AdvertiserQualificationCreateV2PostRequest): Promise<AdvertiserQualificationCreateV2V2Response> {
    const response = await this.openApi2AdvertiserQualificationCreateV2PostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AdvertiserQualificationCreateV2PostWithHttpInfo(request: OpenApi2AdvertiserQualificationCreateV2PostRequest): Promise<ApiResponse<AdvertiserQualificationCreateV2V2Response>> {

    return this.apiClient.requestWithHttpInfo<AdvertiserQualificationCreateV2V2Response>({
      method: "POST",
      path: "/open_api/2/advertiser/qualification/create_v2/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.advertiserQualificationCreateV2V2Request
    });
  }
}


