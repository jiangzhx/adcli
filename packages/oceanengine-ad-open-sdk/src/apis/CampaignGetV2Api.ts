// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CampaignGetV2Filtering, CampaignGetV2Response } from "../models";


export interface OpenApi2CampaignGetGetRequest {
  advertiserId?: number | string;
  fields?: string[];
  filtering?: CampaignGetV2Filtering;
  page?: number;
  pageSize?: number;
}

export class CampaignGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CampaignGetGet(request: OpenApi2CampaignGetGetRequest): Promise<CampaignGetV2Response> {
    const response = await this.openApi2CampaignGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2CampaignGetGetWithHttpInfo(request: OpenApi2CampaignGetGetRequest): Promise<ApiResponse<CampaignGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<CampaignGetV2Response>({
      method: "GET",
      path: "/open_api/2/campaign/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "fields", value: request.fields, collectionFormat: "csv" },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


