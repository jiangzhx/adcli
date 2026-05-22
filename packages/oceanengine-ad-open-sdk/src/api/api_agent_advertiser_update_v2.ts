// Generated from oceanengine/ad_open_sdk_go api/api_agent_advertiser_update_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AgentAdvertiserUpdateV2Request, AgentAdvertiserUpdateV2Response } from "../models/index";


export interface AgentAdvertiserUpdateV2ApiOpenApi2AgentAdvertiserUpdatePostRequest {
  agentAdvertiserUpdateV2Request?: AgentAdvertiserUpdateV2Request;
}

export class AgentAdvertiserUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentAdvertiserUpdatePost(request: AgentAdvertiserUpdateV2ApiOpenApi2AgentAdvertiserUpdatePostRequest): Promise<AgentAdvertiserUpdateV2Response> {
    const response = await this.openApi2AgentAdvertiserUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AgentAdvertiserUpdatePostWithHttpInfo(request: AgentAdvertiserUpdateV2ApiOpenApi2AgentAdvertiserUpdatePostRequest): Promise<ApiResponse<AgentAdvertiserUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<AgentAdvertiserUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/agent/advertiser/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.agentAdvertiserUpdateV2Request
    });
  }
}


