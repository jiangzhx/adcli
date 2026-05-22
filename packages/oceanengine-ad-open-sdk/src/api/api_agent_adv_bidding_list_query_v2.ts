// Generated from oceanengine/ad_open_sdk_go api/api_agent_adv_bidding_list_query_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AgentAdvBiddingListQueryV2Filtering, AgentAdvBiddingListQueryV2Response } from "../models/index";


export interface AgentAdvBiddingListQueryV2ApiOpenApi2AgentAdvBiddingListQueryGetRequest {
  agentId: number | string;
  startDate: string;
  endDate: string;
  filtering: AgentAdvBiddingListQueryV2Filtering;
  cursor?: number;
  cursorSize?: number;
}

export class AgentAdvBiddingListQueryV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentAdvBiddingListQueryGet(request: AgentAdvBiddingListQueryV2ApiOpenApi2AgentAdvBiddingListQueryGetRequest): Promise<AgentAdvBiddingListQueryV2Response> {
    const response = await this.openApi2AgentAdvBiddingListQueryGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AgentAdvBiddingListQueryGetWithHttpInfo(request: AgentAdvBiddingListQueryV2ApiOpenApi2AgentAdvBiddingListQueryGetRequest): Promise<ApiResponse<AgentAdvBiddingListQueryV2Response>> {
    if (request.agentId == null) {
      throw new ApiException("agentId is required and must be specified");
    }

    if (request.startDate == null) {
      throw new ApiException("startDate is required and must be specified");
    }

    if (request.endDate == null) {
      throw new ApiException("endDate is required and must be specified");
    }

    if (request.filtering == null) {
      throw new ApiException("filtering is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<AgentAdvBiddingListQueryV2Response>({
      method: "GET",
      path: "/open_api/2/agent/adv/bidding/list/query/",
      queryParams: [
        { name: "agent_id", value: request.agentId },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "filtering", value: request.filtering },
        { name: "cursor", value: request.cursor },
        { name: "cursor_size", value: request.cursorSize }
      ]
    });
  }
}


