// Generated from oceanengine/ad_open_sdk_go api/api_advertiser_transferable_fund_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdvertiserTransferableFundGetV2Response } from "../models/index";


export interface AdvertiserTransferableFundGetV2ApiOpenApi2AdvertiserTransferableFundGetGetRequest {
  advertiserId?: number | string;
}

export class AdvertiserTransferableFundGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdvertiserTransferableFundGetGet(request: AdvertiserTransferableFundGetV2ApiOpenApi2AdvertiserTransferableFundGetGetRequest): Promise<AdvertiserTransferableFundGetV2Response> {
    const response = await this.openApi2AdvertiserTransferableFundGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AdvertiserTransferableFundGetGetWithHttpInfo(request: AdvertiserTransferableFundGetV2ApiOpenApi2AdvertiserTransferableFundGetGetRequest): Promise<ApiResponse<AdvertiserTransferableFundGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<AdvertiserTransferableFundGetV2Response>({
      method: "GET",
      path: "/open_api/2/advertiser/transferable_fund/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


