// Generated from oceanengine/ad_open_sdk_go api/api_agent_adv_perennially_punish_history_query_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AgentAdvPerenniallyPunishHistoryQueryV2Response } from "../models/index";


export interface AgentAdvPerenniallyPunishHistoryQueryV2ApiOpenApi2AgentAdvPerenniallyPunishHistoryQueryGetRequest {
  agentId: number | string;
  advertiserIds: (number | string)[];
}

export class AgentAdvPerenniallyPunishHistoryQueryV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentAdvPerenniallyPunishHistoryQueryGet(request: AgentAdvPerenniallyPunishHistoryQueryV2ApiOpenApi2AgentAdvPerenniallyPunishHistoryQueryGetRequest): Promise<AgentAdvPerenniallyPunishHistoryQueryV2Response> {
    const response = await this.openApi2AgentAdvPerenniallyPunishHistoryQueryGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AgentAdvPerenniallyPunishHistoryQueryGetWithHttpInfo(request: AgentAdvPerenniallyPunishHistoryQueryV2ApiOpenApi2AgentAdvPerenniallyPunishHistoryQueryGetRequest): Promise<ApiResponse<AgentAdvPerenniallyPunishHistoryQueryV2Response>> {
    if (request.agentId == null) {
      throw new ApiException("agentId is required and must be specified");
    }

    if (request.advertiserIds == null) {
      throw new ApiException("advertiserIds is required and must be specified");
    }

    if (request.advertiserIds != null && request.advertiserIds.length < 1) {
      throw new ApiException("advertiserIds must have at least 1 elements");
    }

    if (request.advertiserIds != null && request.advertiserIds.length > 100) {
      throw new ApiException("advertiserIds must have less than 100 elements");
    }
    return this.apiClient.requestWithHttpInfo<AgentAdvPerenniallyPunishHistoryQueryV2Response>({
      method: "GET",
      path: "/open_api/2/agent/adv/perennially/punish_history/query/",
      queryParams: [
        { name: "agent_id", value: request.agentId },
        { name: "advertiser_ids", value: request.advertiserIds }
      ]
    });
  }
}


