// Generated from oceanengine/ad_open_sdk_go api/api_advertiser_qualification_create_v2_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdvertiserQualificationCreateV2V2Request, AdvertiserQualificationCreateV2V2Response } from "../models/index";


export interface AdvertiserQualificationCreateV2V2ApiOpenApi2AdvertiserQualificationCreateV2PostRequest {
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

  async openApi2AdvertiserQualificationCreateV2Post(request: AdvertiserQualificationCreateV2V2ApiOpenApi2AdvertiserQualificationCreateV2PostRequest): Promise<AdvertiserQualificationCreateV2V2Response> {
    const response = await this.openApi2AdvertiserQualificationCreateV2PostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AdvertiserQualificationCreateV2PostWithHttpInfo(request: AdvertiserQualificationCreateV2V2ApiOpenApi2AdvertiserQualificationCreateV2PostRequest): Promise<ApiResponse<AdvertiserQualificationCreateV2V2Response>> {

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


