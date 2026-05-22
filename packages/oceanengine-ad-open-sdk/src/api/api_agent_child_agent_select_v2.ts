// Generated from oceanengine/ad_open_sdk_go api/api_agent_child_agent_select_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AgentChildAgentSelectV2Response } from "../models/index";


export interface AgentChildAgentSelectV2ApiOpenApi2AgentChildAgentSelectGetRequest {
  advertiserId: number | string;
  page?: number;
  pageSize?: number;
}

export class AgentChildAgentSelectV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentChildAgentSelectGet(request: AgentChildAgentSelectV2ApiOpenApi2AgentChildAgentSelectGetRequest): Promise<AgentChildAgentSelectV2Response> {
    const response = await this.openApi2AgentChildAgentSelectGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AgentChildAgentSelectGetWithHttpInfo(request: AgentChildAgentSelectV2ApiOpenApi2AgentChildAgentSelectGetRequest): Promise<ApiResponse<AgentChildAgentSelectV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2AgentChildAgentSelectGet");
    }
    return this.apiClient.requestWithHttpInfo<AgentChildAgentSelectV2Response>({
      method: "GET",
      path: "/open_api/2/agent/child_agent/select/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


