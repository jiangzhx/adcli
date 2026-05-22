// Generated from oceanengine/ad_open_sdk_go api/api_advertiser_fund_detail_grant_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdvertiserFundDetailGrantV2Response } from "../models/index";


export interface AdvertiserFundDetailGrantV2ApiOpenApi2AdvertiserFundDetailGrantGetRequest {
  advertiserId: number | string;
  startDate?: string;
  endDate?: string;
  page?: number;
  pageSize?: number;
}

export class AdvertiserFundDetailGrantV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdvertiserFundDetailGrantGet(request: AdvertiserFundDetailGrantV2ApiOpenApi2AdvertiserFundDetailGrantGetRequest): Promise<AdvertiserFundDetailGrantV2Response> {
    const response = await this.openApi2AdvertiserFundDetailGrantGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AdvertiserFundDetailGrantGetWithHttpInfo(request: AdvertiserFundDetailGrantV2ApiOpenApi2AdvertiserFundDetailGrantGetRequest): Promise<ApiResponse<AdvertiserFundDetailGrantV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) > -9223372036854775616) {
      throw new ApiException("advertiserId must be less than -9223372036854775616");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserFundDetailGrantV2Response>({
      method: "GET",
      path: "/open_api/2/advertiser/fund/detail_grant/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


