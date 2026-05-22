// Generated from oceanengine/ad_open_sdk_go api/api_advertiser_qualification_submit_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdvertiserQualificationSubmitV30Request, AdvertiserQualificationSubmitV30Response } from "../models/index";


export interface AdvertiserQualificationSubmitV30ApiOpenApiV30AdvertiserQualificationSubmitPostRequest {
  advertiserQualificationSubmitV30Request?: AdvertiserQualificationSubmitV30Request;
}

export class AdvertiserQualificationSubmitV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AdvertiserQualificationSubmitPost(request: AdvertiserQualificationSubmitV30ApiOpenApiV30AdvertiserQualificationSubmitPostRequest): Promise<AdvertiserQualificationSubmitV30Response> {
    const response = await this.openApiV30AdvertiserQualificationSubmitPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AdvertiserQualificationSubmitPostWithHttpInfo(request: AdvertiserQualificationSubmitV30ApiOpenApiV30AdvertiserQualificationSubmitPostRequest): Promise<ApiResponse<AdvertiserQualificationSubmitV30Response>> {

    return this.apiClient.requestWithHttpInfo<AdvertiserQualificationSubmitV30Response>({
      method: "POST",
      path: "/open_api/v3.0/advertiser/qualification/submit/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.advertiserQualificationSubmitV30Request
    });
  }
}


