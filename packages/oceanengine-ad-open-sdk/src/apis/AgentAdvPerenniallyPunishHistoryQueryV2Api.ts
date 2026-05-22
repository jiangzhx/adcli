// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AgentAdvPerenniallyPunishHistoryQueryV2Response } from "../models";


export class AgentAdvPerenniallyPunishHistoryQueryV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentAdvPerenniallyPunishHistoryQueryGet(agentId: number, advertiserIds: number[]): Promise<AgentAdvPerenniallyPunishHistoryQueryV2Response> {
    const response = await this.openApi2AgentAdvPerenniallyPunishHistoryQueryGetWithHttpInfo(agentId, advertiserIds);
    return response.data;
  }

  async openApi2AgentAdvPerenniallyPunishHistoryQueryGetWithHttpInfo(agentId: number, advertiserIds: number[]): Promise<ApiResponse<AgentAdvPerenniallyPunishHistoryQueryV2Response>> {
    if (agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2AgentAdvPerenniallyPunishHistoryQueryGet");
    }

    if (advertiserIds == null) {
      throw new ApiException("Missing the required parameter 'advertiserIds' when calling openApi2AgentAdvPerenniallyPunishHistoryQueryGet");
    }
    return this.apiClient.requestWithHttpInfo<AgentAdvPerenniallyPunishHistoryQueryV2Response>({
      method: "GET",
      path: "/open_api/2/agent/adv/perennially/punish_history/query/",
      queryParams: [
        { name: "agent_id", value: agentId },
        { name: "advertiser_ids", value: advertiserIds, collectionFormat: "csv" }
      ]
    });
  }
}


