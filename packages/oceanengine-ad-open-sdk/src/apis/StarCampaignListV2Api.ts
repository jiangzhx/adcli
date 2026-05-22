// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarCampaignListV2Response } from "../models";


export class StarCampaignListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarCampaignListGet(starId: number, searchName: string, page: number, limit: number): Promise<StarCampaignListV2Response> {
    const response = await this.openApi2StarCampaignListGetWithHttpInfo(starId, searchName, page, limit);
    return response.data;
  }

  async openApi2StarCampaignListGetWithHttpInfo(starId: number, searchName: string, page: number, limit: number): Promise<ApiResponse<StarCampaignListV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarCampaignListGet");
    }
    return this.apiClient.requestWithHttpInfo<StarCampaignListV2Response>({
      method: "GET",
      path: "/open_api/2/star/campaign/list/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "search_name", value: searchName },
        { name: "page", value: page },
        { name: "limit", value: limit }
      ]
    });
  }
}


