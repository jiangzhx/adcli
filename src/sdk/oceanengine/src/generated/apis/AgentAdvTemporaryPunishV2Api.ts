// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { AgentAdvTemporaryPunishV2Request, AgentAdvTemporaryPunishV2Response } from "../models";


export class AgentAdvTemporaryPunishV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentAdvTemporaryPunishPost(agentAdvTemporaryPunishV2Request: AgentAdvTemporaryPunishV2Request): Promise<AgentAdvTemporaryPunishV2Response> {
    const response = await this.openApi2AgentAdvTemporaryPunishPostWithHttpInfo(agentAdvTemporaryPunishV2Request);
    return response.data;
  }

  async openApi2AgentAdvTemporaryPunishPostWithHttpInfo(agentAdvTemporaryPunishV2Request: AgentAdvTemporaryPunishV2Request): Promise<ApiResponse<AgentAdvTemporaryPunishV2Response>> {

    return this.apiClient.requestWithHttpInfo<AgentAdvTemporaryPunishV2Response>({
      method: "POST",
      path: "/open_api/2/agent/adv/temporary/punish/",
      queryParams: [

      ],
      body: agentAdvTemporaryPunishV2Request
    });
  }
}


