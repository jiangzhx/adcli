// Generated from oceanengine/ad_open_sdk_go api/api_campaign_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CampaignGetV2Filtering, CampaignGetV2Response } from "../models/index";


export interface CampaignGetV2ApiOpenApi2CampaignGetGetRequest {
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

  async openApi2CampaignGetGet(request: CampaignGetV2ApiOpenApi2CampaignGetGetRequest): Promise<CampaignGetV2Response> {
    const response = await this.openApi2CampaignGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2CampaignGetGetWithHttpInfo(request: CampaignGetV2ApiOpenApi2CampaignGetGetRequest): Promise<ApiResponse<CampaignGetV2Response>> {

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


