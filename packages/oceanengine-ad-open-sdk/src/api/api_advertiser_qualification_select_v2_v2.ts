// Generated from oceanengine/ad_open_sdk_go api/api_advertiser_qualification_select_v2_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdvertiserQualificationSelectV2V2Response } from "../models/index";


export interface AdvertiserQualificationSelectV2V2ApiOpenApi2AdvertiserQualificationSelectV2GetRequest {
  advertiserId: number | string;
}

export class AdvertiserQualificationSelectV2V2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdvertiserQualificationSelectV2Get(request: AdvertiserQualificationSelectV2V2ApiOpenApi2AdvertiserQualificationSelectV2GetRequest): Promise<AdvertiserQualificationSelectV2V2Response> {
    const response = await this.openApi2AdvertiserQualificationSelectV2GetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AdvertiserQualificationSelectV2GetWithHttpInfo(request: AdvertiserQualificationSelectV2V2ApiOpenApi2AdvertiserQualificationSelectV2GetRequest): Promise<ApiResponse<AdvertiserQualificationSelectV2V2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2AdvertiserQualificationSelectV2Get");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserQualificationSelectV2V2Response>({
      method: "GET",
      path: "/open_api/2/advertiser/qualification/select_v2/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


