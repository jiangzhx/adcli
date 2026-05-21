// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { AdvertiserDeliveryPkgConfigV30Response } from "../models";


export class AdvertiserDeliveryPkgConfigV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AdvertiserDeliveryPkgConfigGet(firstIndustryId: number, secondIndustryId: number, thirdIndustryId: number, advertiserId: number): Promise<AdvertiserDeliveryPkgConfigV30Response> {
    const response = await this.openApiV30AdvertiserDeliveryPkgConfigGetWithHttpInfo(firstIndustryId, secondIndustryId, thirdIndustryId, advertiserId);
    return response.data;
  }

  async openApiV30AdvertiserDeliveryPkgConfigGetWithHttpInfo(firstIndustryId: number, secondIndustryId: number, thirdIndustryId: number, advertiserId: number): Promise<ApiResponse<AdvertiserDeliveryPkgConfigV30Response>> {
    if (firstIndustryId == null) {
      throw new ApiException("Missing the required parameter 'firstIndustryId' when calling openApiV30AdvertiserDeliveryPkgConfigGet");
    }

    if (secondIndustryId == null) {
      throw new ApiException("Missing the required parameter 'secondIndustryId' when calling openApiV30AdvertiserDeliveryPkgConfigGet");
    }

    if (thirdIndustryId == null) {
      throw new ApiException("Missing the required parameter 'thirdIndustryId' when calling openApiV30AdvertiserDeliveryPkgConfigGet");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserDeliveryPkgConfigV30Response>({
      method: "GET",
      path: "/open_api/v3.0/advertiser/delivery_pkg_config/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "first_industry_id", value: firstIndustryId },
        { name: "second_industry_id", value: secondIndustryId },
        { name: "third_industry_id", value: thirdIndustryId }
      ]
    });
  }
}


