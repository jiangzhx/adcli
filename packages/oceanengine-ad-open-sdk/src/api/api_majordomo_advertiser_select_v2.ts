// Generated from oceanengine/ad_open_sdk_go api/api_majordomo_advertiser_select_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { MajordomoAdvertiserSelectV2Response } from "../models/index";


export interface MajordomoAdvertiserSelectV2ApiOpenApi2MajordomoAdvertiserSelectGetRequest {
  advertiserId: number | string;
}

export class MajordomoAdvertiserSelectV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2MajordomoAdvertiserSelectGet(request: MajordomoAdvertiserSelectV2ApiOpenApi2MajordomoAdvertiserSelectGetRequest): Promise<MajordomoAdvertiserSelectV2Response> {
    const response = await this.openApi2MajordomoAdvertiserSelectGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2MajordomoAdvertiserSelectGetWithHttpInfo(request: MajordomoAdvertiserSelectV2ApiOpenApi2MajordomoAdvertiserSelectGetRequest): Promise<ApiResponse<MajordomoAdvertiserSelectV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) < 1) {
      throw new ApiException("advertiserId must be greater than 1");
    }
    return this.apiClient.requestWithHttpInfo<MajordomoAdvertiserSelectV2Response>({
      method: "GET",
      path: "/open_api/2/majordomo/advertiser/select/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


