// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { AgentAdvBiddingListQueryV2Filtering, AgentAdvBiddingListQueryV2Response } from "../models";


export class AgentAdvBiddingListQueryV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentAdvBiddingListQueryGet(agentId: number, startDate: string, endDate: string, filtering: AgentAdvBiddingListQueryV2Filtering, cursor: number, cursorSize: number): Promise<AgentAdvBiddingListQueryV2Response> {
    const response = await this.openApi2AgentAdvBiddingListQueryGetWithHttpInfo(agentId, startDate, endDate, filtering, cursor, cursorSize);
    return response.data;
  }

  async openApi2AgentAdvBiddingListQueryGetWithHttpInfo(agentId: number, startDate: string, endDate: string, filtering: AgentAdvBiddingListQueryV2Filtering, cursor: number, cursorSize: number): Promise<ApiResponse<AgentAdvBiddingListQueryV2Response>> {
    if (agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2AgentAdvBiddingListQueryGet");
    }

    if (startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApi2AgentAdvBiddingListQueryGet");
    }

    if (endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApi2AgentAdvBiddingListQueryGet");
    }

    if (filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApi2AgentAdvBiddingListQueryGet");
    }
    return this.apiClient.requestWithHttpInfo<AgentAdvBiddingListQueryV2Response>({
      method: "GET",
      path: "/open_api/2/agent/adv/bidding/list/query/",
      queryParams: [
        { name: "agent_id", value: agentId },
        { name: "start_date", value: startDate },
        { name: "end_date", value: endDate },
        { name: "filtering", value: filtering },
        { name: "cursor", value: cursor },
        { name: "cursor_size", value: cursorSize }
      ]
    });
  }
}


