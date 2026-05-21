// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { AdvertiserDeliveryQualificationDeleteV30Request, AdvertiserDeliveryQualificationDeleteV30Response } from "../models";


export class AdvertiserDeliveryQualificationDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AdvertiserDeliveryQualificationDeletePost(advertiserDeliveryQualificationDeleteV30Request: AdvertiserDeliveryQualificationDeleteV30Request): Promise<AdvertiserDeliveryQualificationDeleteV30Response> {
    const response = await this.openApiV30AdvertiserDeliveryQualificationDeletePostWithHttpInfo(advertiserDeliveryQualificationDeleteV30Request);
    return response.data;
  }

  async openApiV30AdvertiserDeliveryQualificationDeletePostWithHttpInfo(advertiserDeliveryQualificationDeleteV30Request: AdvertiserDeliveryQualificationDeleteV30Request): Promise<ApiResponse<AdvertiserDeliveryQualificationDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<AdvertiserDeliveryQualificationDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/advertiser/delivery_qualification/delete/",
      queryParams: [

      ],
      body: advertiserDeliveryQualificationDeleteV30Request
    });
  }
}


