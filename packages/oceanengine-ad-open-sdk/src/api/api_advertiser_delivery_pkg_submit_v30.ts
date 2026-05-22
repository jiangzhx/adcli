// Generated from oceanengine/ad_open_sdk_go api/api_advertiser_delivery_pkg_submit_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdvertiserDeliveryPkgSubmitV30Request, AdvertiserDeliveryPkgSubmitV30Response } from "../models/index";


export interface AdvertiserDeliveryPkgSubmitV30ApiOpenApiV30AdvertiserDeliveryPkgSubmitPostRequest {
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

  async openApiV30AdvertiserDeliveryPkgSubmitPost(request: AdvertiserDeliveryPkgSubmitV30ApiOpenApiV30AdvertiserDeliveryPkgSubmitPostRequest): Promise<AdvertiserDeliveryPkgSubmitV30Response> {
    const response = await this.openApiV30AdvertiserDeliveryPkgSubmitPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AdvertiserDeliveryPkgSubmitPostWithHttpInfo(request: AdvertiserDeliveryPkgSubmitV30ApiOpenApiV30AdvertiserDeliveryPkgSubmitPostRequest): Promise<ApiResponse<AdvertiserDeliveryPkgSubmitV30Response>> {

    return this.apiClient.requestWithHttpInfo<AdvertiserDeliveryPkgSubmitV30Response>({
      method: "POST",
      path: "/open_api/v3.0/advertiser/delivery_pkg/submit/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.advertiserDeliveryPkgSubmitV30Request
    });
  }
}


