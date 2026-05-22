// Generated from oceanengine/ad_open_sdk_go api/api_advertiser_delivery_qualification_submit_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdvertiserDeliveryQualificationSubmitV30Request, AdvertiserDeliveryQualificationSubmitV30Response } from "../models/index";


export interface AdvertiserDeliveryQualificationSubmitV30ApiOpenApiV30AdvertiserDeliveryQualificationSubmitPostRequest {
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

  async openApiV30AdvertiserDeliveryQualificationSubmitPost(request: AdvertiserDeliveryQualificationSubmitV30ApiOpenApiV30AdvertiserDeliveryQualificationSubmitPostRequest): Promise<AdvertiserDeliveryQualificationSubmitV30Response> {
    const response = await this.openApiV30AdvertiserDeliveryQualificationSubmitPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AdvertiserDeliveryQualificationSubmitPostWithHttpInfo(request: AdvertiserDeliveryQualificationSubmitV30ApiOpenApiV30AdvertiserDeliveryQualificationSubmitPostRequest): Promise<ApiResponse<AdvertiserDeliveryQualificationSubmitV30Response>> {

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


