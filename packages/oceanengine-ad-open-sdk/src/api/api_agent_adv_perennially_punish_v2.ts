// Generated from oceanengine/ad_open_sdk_go api/api_agent_adv_perennially_punish_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AgentAdvPerenniallyPunishV2Request, AgentAdvPerenniallyPunishV2Response } from "../models/index";


export interface AgentAdvPerenniallyPunishV2ApiOpenApi2AgentAdvPerenniallyPunishPostRequest {
  agentAdvPerenniallyPunishV2Request?: AgentAdvPerenniallyPunishV2Request;
}

export class AgentAdvPerenniallyPunishV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentAdvPerenniallyPunishPost(request: AgentAdvPerenniallyPunishV2ApiOpenApi2AgentAdvPerenniallyPunishPostRequest): Promise<AgentAdvPerenniallyPunishV2Response> {
    const response = await this.openApi2AgentAdvPerenniallyPunishPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AgentAdvPerenniallyPunishPostWithHttpInfo(request: AgentAdvPerenniallyPunishV2ApiOpenApi2AgentAdvPerenniallyPunishPostRequest): Promise<ApiResponse<AgentAdvPerenniallyPunishV2Response>> {

    return this.apiClient.requestWithHttpInfo<AgentAdvPerenniallyPunishV2Response>({
      method: "POST",
      path: "/open_api/2/agent/adv/perennially/punish/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.agentAdvPerenniallyPunishV2Request
    });
  }
}


