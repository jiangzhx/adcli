// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdvertiserDeliveryPkgDeleteV30Request, AdvertiserDeliveryPkgDeleteV30Response } from "../models";


export class AdvertiserDeliveryPkgDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AdvertiserDeliveryPkgDeletePost(request: AdvertiserDeliveryPkgDeleteV30Request): Promise<AdvertiserDeliveryPkgDeleteV30Response> {
    const response = await this.openApiV30AdvertiserDeliveryPkgDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AdvertiserDeliveryPkgDeletePostWithHttpInfo(request: AdvertiserDeliveryPkgDeleteV30Request): Promise<ApiResponse<AdvertiserDeliveryPkgDeleteV30Response>> {
    return this.apiClient.requestWithHttpInfo<AdvertiserDeliveryPkgDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/advertiser/delivery_pkg/delete/",
      queryParams: [

      ],
      body: request
    });
  }
}


