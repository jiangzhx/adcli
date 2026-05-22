// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdvertiserDeliveryPkgConfigV30Response } from "../models";


export interface OpenApiV30AdvertiserDeliveryPkgConfigGetRequest {
  firstIndustryId: number;
  secondIndustryId: number;
  thirdIndustryId: number;
  advertiserId?: number;
}

export class AdvertiserDeliveryPkgConfigV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AdvertiserDeliveryPkgConfigGet(request: OpenApiV30AdvertiserDeliveryPkgConfigGetRequest): Promise<AdvertiserDeliveryPkgConfigV30Response> {
    const response = await this.openApiV30AdvertiserDeliveryPkgConfigGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AdvertiserDeliveryPkgConfigGetWithHttpInfo(request: OpenApiV30AdvertiserDeliveryPkgConfigGetRequest): Promise<ApiResponse<AdvertiserDeliveryPkgConfigV30Response>> {
    if (request.firstIndustryId == null) {
      throw new ApiException("Missing the required parameter 'firstIndustryId' when calling openApiV30AdvertiserDeliveryPkgConfigGet");
    }

    if (request.secondIndustryId == null) {
      throw new ApiException("Missing the required parameter 'secondIndustryId' when calling openApiV30AdvertiserDeliveryPkgConfigGet");
    }

    if (request.thirdIndustryId == null) {
      throw new ApiException("Missing the required parameter 'thirdIndustryId' when calling openApiV30AdvertiserDeliveryPkgConfigGet");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserDeliveryPkgConfigV30Response>({
      method: "GET",
      path: "/open_api/v3.0/advertiser/delivery_pkg_config/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "first_industry_id", value: request.firstIndustryId },
        { name: "second_industry_id", value: request.secondIndustryId },
        { name: "third_industry_id", value: request.thirdIndustryId }
      ]
    });
  }
}


