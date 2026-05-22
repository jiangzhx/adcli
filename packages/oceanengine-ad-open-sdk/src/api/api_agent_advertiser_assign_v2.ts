// Generated from oceanengine/ad_open_sdk_go api/api_agent_advertiser_assign_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AgentAdvertiserAssignV2Request, AgentAdvertiserAssignV2Response } from "../models/index";


export interface AgentAdvertiserAssignV2ApiOpenApi2AgentAdvertiserAssignPostRequest {
  agentAdvertiserAssignV2Request?: AgentAdvertiserAssignV2Request;
}

export class AgentAdvertiserAssignV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentAdvertiserAssignPost(request: AgentAdvertiserAssignV2ApiOpenApi2AgentAdvertiserAssignPostRequest): Promise<AgentAdvertiserAssignV2Response> {
    const response = await this.openApi2AgentAdvertiserAssignPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AgentAdvertiserAssignPostWithHttpInfo(request: AgentAdvertiserAssignV2ApiOpenApi2AgentAdvertiserAssignPostRequest): Promise<ApiResponse<AgentAdvertiserAssignV2Response>> {

    return this.apiClient.requestWithHttpInfo<AgentAdvertiserAssignV2Response>({
      method: "POST",
      path: "/open_api/2/agent/advertiser/assign/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.agentAdvertiserAssignV2Request
    });
  }
}


