// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdvertiserQualificationSubmitV30Request, AdvertiserQualificationSubmitV30Response } from "../models";


export class AdvertiserQualificationSubmitV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AdvertiserQualificationSubmitPost(advertiserQualificationSubmitV30Request: AdvertiserQualificationSubmitV30Request): Promise<AdvertiserQualificationSubmitV30Response> {
    const response = await this.openApiV30AdvertiserQualificationSubmitPostWithHttpInfo(advertiserQualificationSubmitV30Request);
    return response.data;
  }

  async openApiV30AdvertiserQualificationSubmitPostWithHttpInfo(advertiserQualificationSubmitV30Request: AdvertiserQualificationSubmitV30Request): Promise<ApiResponse<AdvertiserQualificationSubmitV30Response>> {

    return this.apiClient.requestWithHttpInfo<AdvertiserQualificationSubmitV30Response>({
      method: "POST",
      path: "/open_api/v3.0/advertiser/qualification/submit/",
      queryParams: [

      ],
      body: advertiserQualificationSubmitV30Request
    });
  }
}


