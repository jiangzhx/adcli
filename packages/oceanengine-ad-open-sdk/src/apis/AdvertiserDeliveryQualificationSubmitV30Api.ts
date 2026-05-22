// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdvertiserDeliveryQualificationSubmitV30Request, AdvertiserDeliveryQualificationSubmitV30Response } from "../models";


export interface OpenApiV30AdvertiserDeliveryQualificationSubmitPostRequest {
  advertiserDeliveryQualificationSubmitV30Request?: AdvertiserDeliveryQualificationSubmitV30Request;
}

export class AdvertiserDeliveryQualificationSubmitV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AdvertiserDeliveryQualificationSubmitPost(request: OpenApiV30AdvertiserDeliveryQualificationSubmitPostRequest): Promise<AdvertiserDeliveryQualificationSubmitV30Response> {
    const response = await this.openApiV30AdvertiserDeliveryQualificationSubmitPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AdvertiserDeliveryQualificationSubmitPostWithHttpInfo(request: OpenApiV30AdvertiserDeliveryQualificationSubmitPostRequest): Promise<ApiResponse<AdvertiserDeliveryQualificationSubmitV30Response>> {

    return this.apiClient.requestWithHttpInfo<AdvertiserDeliveryQualificationSubmitV30Response>({
      method: "POST",
      path: "/open_api/v3.0/advertiser/delivery_qualification/submit/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.advertiserDeliveryQualificationSubmitV30Request
    });
  }
}


