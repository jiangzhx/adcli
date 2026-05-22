// Generated from oceanengine/ad_open_sdk_go api/api_advertiser_delivery_pkg_config_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdvertiserDeliveryPkgConfigV30Response } from "../models/index";


export interface AdvertiserDeliveryPkgConfigV30ApiOpenApiV30AdvertiserDeliveryPkgConfigGetRequest {
  firstIndustryId: number | string;
  secondIndustryId: number | string;
  thirdIndustryId: number | string;
  advertiserId?: number | string;
}

export class AdvertiserDeliveryPkgConfigV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AdvertiserDeliveryPkgConfigGet(request: AdvertiserDeliveryPkgConfigV30ApiOpenApiV30AdvertiserDeliveryPkgConfigGetRequest): Promise<AdvertiserDeliveryPkgConfigV30Response> {
    const response = await this.openApiV30AdvertiserDeliveryPkgConfigGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AdvertiserDeliveryPkgConfigGetWithHttpInfo(request: AdvertiserDeliveryPkgConfigV30ApiOpenApiV30AdvertiserDeliveryPkgConfigGetRequest): Promise<ApiResponse<AdvertiserDeliveryPkgConfigV30Response>> {
    if (request.firstIndustryId == null) {
      throw new ApiException("firstIndustryId is required and must be specified");
    }

    if (request.secondIndustryId == null) {
      throw new ApiException("secondIndustryId is required and must be specified");
    }

    if (request.thirdIndustryId == null) {
      throw new ApiException("thirdIndustryId is required and must be specified");
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


