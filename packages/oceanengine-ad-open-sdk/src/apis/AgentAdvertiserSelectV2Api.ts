// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AgentAdvertiserSelectV2Filtering, AgentAdvertiserSelectV2Response } from "../models";


export interface OpenApi2AgentAdvertiserSelectGetRequest {
  advertiserId?: number;
  companyIds?: number[];
  count?: number;
  cursor?: number;
  filtering?: AgentAdvertiserSelectV2Filtering;
  page?: number;
  pageSize?: number;
}

export class AgentAdvertiserSelectV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentAdvertiserSelectGet(request: OpenApi2AgentAdvertiserSelectGetRequest): Promise<AgentAdvertiserSelectV2Response> {
    const response = await this.openApi2AgentAdvertiserSelectGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AgentAdvertiserSelectGetWithHttpInfo(request: OpenApi2AgentAdvertiserSelectGetRequest): Promise<ApiResponse<AgentAdvertiserSelectV2Response>> {

    return this.apiClient.requestWithHttpInfo<AgentAdvertiserSelectV2Response>({
      method: "GET",
      path: "/open_api/2/agent/advertiser/select/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "company_ids", value: request.companyIds, collectionFormat: "csv" },
        { name: "count", value: request.count },
        { name: "cursor", value: request.cursor },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


