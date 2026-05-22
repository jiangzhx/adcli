// Generated from oceanengine/ad_open_sdk_go api/api_agent_advertiser_select_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AgentAdvertiserSelectV2Filtering, AgentAdvertiserSelectV2Response } from "../models/index";


export interface AgentAdvertiserSelectV2ApiOpenApi2AgentAdvertiserSelectGetRequest {
  advertiserId?: number | string;
  companyIds?: (number | string)[];
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

  async openApi2AgentAdvertiserSelectGet(request: AgentAdvertiserSelectV2ApiOpenApi2AgentAdvertiserSelectGetRequest): Promise<AgentAdvertiserSelectV2Response> {
    const response = await this.openApi2AgentAdvertiserSelectGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AgentAdvertiserSelectGetWithHttpInfo(request: AgentAdvertiserSelectV2ApiOpenApi2AgentAdvertiserSelectGetRequest): Promise<ApiResponse<AgentAdvertiserSelectV2Response>> {

    return this.apiClient.requestWithHttpInfo<AgentAdvertiserSelectV2Response>({
      method: "GET",
      path: "/open_api/2/agent/advertiser/select/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "company_ids", value: request.companyIds },
        { name: "count", value: request.count },
        { name: "cursor", value: request.cursor },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


