// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { AgentAdvPerenniallyPunishV2Request, AgentAdvPerenniallyPunishV2Response } from "../models";


export class AgentAdvPerenniallyPunishV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentAdvPerenniallyPunishPost(agentAdvPerenniallyPunishV2Request: AgentAdvPerenniallyPunishV2Request): Promise<AgentAdvPerenniallyPunishV2Response> {
    const response = await this.openApi2AgentAdvPerenniallyPunishPostWithHttpInfo(agentAdvPerenniallyPunishV2Request);
    return response.data;
  }

  async openApi2AgentAdvPerenniallyPunishPostWithHttpInfo(agentAdvPerenniallyPunishV2Request: AgentAdvPerenniallyPunishV2Request): Promise<ApiResponse<AgentAdvPerenniallyPunishV2Response>> {

    return this.apiClient.requestWithHttpInfo<AgentAdvPerenniallyPunishV2Response>({
      method: "POST",
      path: "/open_api/2/agent/adv/perennially/punish/",
      queryParams: [

      ],
      body: agentAdvPerenniallyPunishV2Request
    });
  }
}


