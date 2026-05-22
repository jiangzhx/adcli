// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AgentAdvertiserSelectV2Filtering, AgentAdvertiserSelectV2Response } from "../models";


export class AgentAdvertiserSelectV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentAdvertiserSelectGet(advertiserId: number, companyIds: number[], count: number, cursor: number, filtering: AgentAdvertiserSelectV2Filtering, page: number, pageSize: number): Promise<AgentAdvertiserSelectV2Response> {
    const response = await this.openApi2AgentAdvertiserSelectGetWithHttpInfo(advertiserId, companyIds, count, cursor, filtering, page, pageSize);
    return response.data;
  }

  async openApi2AgentAdvertiserSelectGetWithHttpInfo(advertiserId: number, companyIds: number[], count: number, cursor: number, filtering: AgentAdvertiserSelectV2Filtering, page: number, pageSize: number): Promise<ApiResponse<AgentAdvertiserSelectV2Response>> {

    return this.apiClient.requestWithHttpInfo<AgentAdvertiserSelectV2Response>({
      method: "GET",
      path: "/open_api/2/agent/advertiser/select/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "count", value: count },
        { name: "cursor", value: cursor },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "company_ids", value: companyIds, collectionFormat: "multi" }
      ]
    });
  }
}


