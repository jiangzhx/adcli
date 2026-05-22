// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdvertiserDeliveryPkgGetV30Response } from "../models";


export interface OpenApiV30AdvertiserDeliveryPkgGetGetRequest {
  advertiserId: number | string;
  pkgId: number | string;
}

export class AdvertiserDeliveryPkgGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AdvertiserDeliveryPkgGetGet(request: OpenApiV30AdvertiserDeliveryPkgGetGetRequest): Promise<AdvertiserDeliveryPkgGetV30Response> {
    const response = await this.openApiV30AdvertiserDeliveryPkgGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AdvertiserDeliveryPkgGetGetWithHttpInfo(request: OpenApiV30AdvertiserDeliveryPkgGetGetRequest): Promise<ApiResponse<AdvertiserDeliveryPkgGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30AdvertiserDeliveryPkgGetGet");
    }

    if (request.pkgId == null) {
      throw new ApiException("Missing the required parameter 'pkgId' when calling openApiV30AdvertiserDeliveryPkgGetGet");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserDeliveryPkgGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/advertiser/delivery_pkg/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "pkg_id", value: request.pkgId }
      ]
    });
  }
}


