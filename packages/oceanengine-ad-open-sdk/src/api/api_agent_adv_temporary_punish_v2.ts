// Generated from oceanengine/ad_open_sdk_go api/api_agent_adv_temporary_punish_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AgentAdvTemporaryPunishV2Request, AgentAdvTemporaryPunishV2Response } from "../models/index";


export interface AgentAdvTemporaryPunishV2ApiOpenApi2AgentAdvTemporaryPunishPostRequest {
  agentAdvTemporaryPunishV2Request?: AgentAdvTemporaryPunishV2Request;
}

export class AgentAdvTemporaryPunishV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentAdvTemporaryPunishPost(request: AgentAdvTemporaryPunishV2ApiOpenApi2AgentAdvTemporaryPunishPostRequest): Promise<AgentAdvTemporaryPunishV2Response> {
    const response = await this.openApi2AgentAdvTemporaryPunishPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AgentAdvTemporaryPunishPostWithHttpInfo(request: AgentAdvTemporaryPunishV2ApiOpenApi2AgentAdvTemporaryPunishPostRequest): Promise<ApiResponse<AgentAdvTemporaryPunishV2Response>> {

    return this.apiClient.requestWithHttpInfo<AgentAdvTemporaryPunishV2Response>({
      method: "POST",
      path: "/open_api/2/agent/adv/temporary/punish/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.agentAdvTemporaryPunishV2Request
    });
  }
}


