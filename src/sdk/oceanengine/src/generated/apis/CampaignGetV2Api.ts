// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { CampaignGetV2Filtering, CampaignGetV2Response } from "../models";


export class CampaignGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CampaignGetGet(advertiserId: number, fields: string[], filtering: CampaignGetV2Filtering, page: number, pageSize: number): Promise<CampaignGetV2Response> {
    const response = await this.openApi2CampaignGetGetWithHttpInfo(advertiserId, fields, filtering, page, pageSize);
    return response.data;
  }

  async openApi2CampaignGetGetWithHttpInfo(advertiserId: number, fields: string[], filtering: CampaignGetV2Filtering, page: number, pageSize: number): Promise<ApiResponse<CampaignGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<CampaignGetV2Response>({
      method: "GET",
      path: "/open_api/2/campaign/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "fields", value: fields, collectionFormat: "multi" }
      ]
    });
  }
}


