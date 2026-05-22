// Generated from oceanengine/ad_open_sdk_go api/api_agent_advertiser_unassign_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AgentAdvertiserUnassignV2Request, AgentAdvertiserUnassignV2Response } from "../models/index";


export interface AgentAdvertiserUnassignV2ApiOpenApi2AgentAdvertiserUnassignPostRequest {
  agentAdvertiserUnassignV2Request?: AgentAdvertiserUnassignV2Request;
}

export class AgentAdvertiserUnassignV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentAdvertiserUnassignPost(request: AgentAdvertiserUnassignV2ApiOpenApi2AgentAdvertiserUnassignPostRequest): Promise<AgentAdvertiserUnassignV2Response> {
    const response = await this.openApi2AgentAdvertiserUnassignPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AgentAdvertiserUnassignPostWithHttpInfo(request: AgentAdvertiserUnassignV2ApiOpenApi2AgentAdvertiserUnassignPostRequest): Promise<ApiResponse<AgentAdvertiserUnassignV2Response>> {

    return this.apiClient.requestWithHttpInfo<AgentAdvertiserUnassignV2Response>({
      method: "POST",
      path: "/open_api/2/agent/advertiser/unassign/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.agentAdvertiserUnassignV2Request
    });
  }
}


