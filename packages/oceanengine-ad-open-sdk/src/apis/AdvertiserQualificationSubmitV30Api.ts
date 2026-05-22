// Generated from oceanengine/ad_open_sdk_go
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

  async openApiV30AdvertiserQualificationSubmitPost(request: AdvertiserQualificationSubmitV30Request): Promise<AdvertiserQualificationSubmitV30Response> {
    const response = await this.openApiV30AdvertiserQualificationSubmitPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AdvertiserQualificationSubmitPostWithHttpInfo(request: AdvertiserQualificationSubmitV30Request): Promise<ApiResponse<AdvertiserQualificationSubmitV30Response>> {
    return this.apiClient.requestWithHttpInfo<AdvertiserQualificationSubmitV30Response>({
      method: "POST",
      path: "/open_api/v3.0/advertiser/qualification/submit/",
      queryParams: [

      ],
      body: request
    });
  }
}


