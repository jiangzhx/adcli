// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdvertiserDeliveryPkgSubmitV30Request, AdvertiserDeliveryPkgSubmitV30Response } from "../models";


export interface OpenApiV30AdvertiserDeliveryPkgSubmitPostRequest {
  advertiserDeliveryPkgSubmitV30Request?: AdvertiserDeliveryPkgSubmitV30Request;
}

export class AdvertiserDeliveryPkgSubmitV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AdvertiserDeliveryPkgSubmitPost(request: OpenApiV30AdvertiserDeliveryPkgSubmitPostRequest): Promise<AdvertiserDeliveryPkgSubmitV30Response> {
    const response = await this.openApiV30AdvertiserDeliveryPkgSubmitPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AdvertiserDeliveryPkgSubmitPostWithHttpInfo(request: OpenApiV30AdvertiserDeliveryPkgSubmitPostRequest): Promise<ApiResponse<AdvertiserDeliveryPkgSubmitV30Response>> {

    return this.apiClient.requestWithHttpInfo<AdvertiserDeliveryPkgSubmitV30Response>({
      method: "POST",
      path: "/open_api/v3.0/advertiser/delivery_pkg/submit/",
      queryParams: [

      ],
      body: request.advertiserDeliveryPkgSubmitV30Request
    });
  }
}


