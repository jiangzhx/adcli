// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarCampaignListV2Response } from "../models";


export interface OpenApi2StarCampaignListGetRequest {
  starId: number;
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

  async openApi2StarCampaignListGet(request: OpenApi2StarCampaignListGetRequest): Promise<StarCampaignListV2Response> {
    const response = await this.openApi2StarCampaignListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarCampaignListGetWithHttpInfo(request: OpenApi2StarCampaignListGetRequest): Promise<ApiResponse<StarCampaignListV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarCampaignListGet");
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


