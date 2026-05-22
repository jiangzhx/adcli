// Generated from oceanengine/ad_open_sdk_go api/api_advertiser_delivery_pkg_delete_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdvertiserDeliveryPkgDeleteV30Request, AdvertiserDeliveryPkgDeleteV30Response } from "../models/index";


export interface AdvertiserDeliveryPkgDeleteV30ApiOpenApiV30AdvertiserDeliveryPkgDeletePostRequest {
  advertiserDeliveryPkgDeleteV30Request?: AdvertiserDeliveryPkgDeleteV30Request;
}

export class AdvertiserDeliveryPkgDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AdvertiserDeliveryPkgDeletePost(request: AdvertiserDeliveryPkgDeleteV30ApiOpenApiV30AdvertiserDeliveryPkgDeletePostRequest): Promise<AdvertiserDeliveryPkgDeleteV30Response> {
    const response = await this.openApiV30AdvertiserDeliveryPkgDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AdvertiserDeliveryPkgDeletePostWithHttpInfo(request: AdvertiserDeliveryPkgDeleteV30ApiOpenApiV30AdvertiserDeliveryPkgDeletePostRequest): Promise<ApiResponse<AdvertiserDeliveryPkgDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<AdvertiserDeliveryPkgDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/advertiser/delivery_pkg/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.advertiserDeliveryPkgDeleteV30Request
    });
  }
}


