// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarOrderListByCampaignV2Response } from "../models";


export class StarOrderListByCampaignV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarOrderListByCampaignGet(starId: number, campaignIds: number[], page: number, limit: number): Promise<StarOrderListByCampaignV2Response> {
    const response = await this.openApi2StarOrderListByCampaignGetWithHttpInfo(starId, campaignIds, page, limit);
    return response.data;
  }

  async openApi2StarOrderListByCampaignGetWithHttpInfo(starId: number, campaignIds: number[], page: number, limit: number): Promise<ApiResponse<StarOrderListByCampaignV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarOrderListByCampaignGet");
    }

    if (campaignIds == null) {
      throw new ApiException("Missing the required parameter 'campaignIds' when calling openApi2StarOrderListByCampaignGet");
    }
    return this.apiClient.requestWithHttpInfo<StarOrderListByCampaignV2Response>({
      method: "GET",
      path: "/open_api/2/star/order/list_by_campaign/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "page", value: page },
        { name: "limit", value: limit },
        { name: "campaign_ids", value: campaignIds, collectionFormat: "csv" }
      ]
    });
  }
}


