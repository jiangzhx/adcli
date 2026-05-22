// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarOrderListByCampaignV2Response } from "../models";


export interface OpenApi2StarOrderListByCampaignGetRequest {
  starId: number | string;
  campaignIds: number | string[];
  page?: number;
  limit?: number;
}

export class StarOrderListByCampaignV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarOrderListByCampaignGet(request: OpenApi2StarOrderListByCampaignGetRequest): Promise<StarOrderListByCampaignV2Response> {
    const response = await this.openApi2StarOrderListByCampaignGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarOrderListByCampaignGetWithHttpInfo(request: OpenApi2StarOrderListByCampaignGetRequest): Promise<ApiResponse<StarOrderListByCampaignV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarOrderListByCampaignGet");
    }

    if (request.campaignIds == null) {
      throw new ApiException("Missing the required parameter 'campaignIds' when calling openApi2StarOrderListByCampaignGet");
    }
    return this.apiClient.requestWithHttpInfo<StarOrderListByCampaignV2Response>({
      method: "GET",
      path: "/open_api/2/star/order/list_by_campaign/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "campaign_ids", value: request.campaignIds, collectionFormat: "csv" },
        { name: "page", value: request.page },
        { name: "limit", value: request.limit }
      ]
    });
  }
}


