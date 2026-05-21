// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { AgentCompanyBiddingListQueryV2Filtering, AgentCompanyBiddingListQueryV2Response } from "../models";


export class AgentCompanyBiddingListQueryV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentCompanyBiddingListQueryGet(agentId: number, startDate: string, endDate: string, filtering: AgentCompanyBiddingListQueryV2Filtering, cursor: number, cursorSize: number): Promise<AgentCompanyBiddingListQueryV2Response> {
    const response = await this.openApi2AgentCompanyBiddingListQueryGetWithHttpInfo(agentId, startDate, endDate, filtering, cursor, cursorSize);
    return response.data;
  }

  async openApi2AgentCompanyBiddingListQueryGetWithHttpInfo(agentId: number, startDate: string, endDate: string, filtering: AgentCompanyBiddingListQueryV2Filtering, cursor: number, cursorSize: number): Promise<ApiResponse<AgentCompanyBiddingListQueryV2Response>> {
    if (agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2AgentCompanyBiddingListQueryGet");
    }

    if (startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApi2AgentCompanyBiddingListQueryGet");
    }

    if (endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApi2AgentCompanyBiddingListQueryGet");
    }

    if (filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApi2AgentCompanyBiddingListQueryGet");
    }
    return this.apiClient.requestWithHttpInfo<AgentCompanyBiddingListQueryV2Response>({
      method: "GET",
      path: "/open_api/2/agent/company/bidding/list/query/",
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


