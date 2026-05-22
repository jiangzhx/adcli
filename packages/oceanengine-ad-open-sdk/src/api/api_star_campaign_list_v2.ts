// Generated from oceanengine/ad_open_sdk_go api/api_star_campaign_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarCampaignListV2Response } from "../models/index";


export interface StarCampaignListV2ApiOpenApi2StarCampaignListGetRequest {
  starId: number | string;
  searchName?: string;
  page?: number;
  limit?: number;
}

export class StarCampaignListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarCampaignListGet(request: StarCampaignListV2ApiOpenApi2StarCampaignListGetRequest): Promise<StarCampaignListV2Response> {
    const response = await this.openApi2StarCampaignListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarCampaignListGetWithHttpInfo(request: StarCampaignListV2ApiOpenApi2StarCampaignListGetRequest): Promise<ApiResponse<StarCampaignListV2Response>> {
    if (request.starId == null) {
      throw new ApiException("starId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<StarCampaignListV2Response>({
      method: "GET",
      path: "/open_api/2/star/campaign/list/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "search_name", value: request.searchName },
        { name: "page", value: request.page },
        { name: "limit", value: request.limit }
      ]
    });
  }
}


