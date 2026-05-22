// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AgentCompanyBiddingListQueryV2Filtering, AgentCompanyBiddingListQueryV2Response } from "../models";


export interface OpenApi2AgentCompanyBiddingListQueryGetRequest {
  agentId: number | string;
  startDate: string;
  endDate: string;
  filtering: AgentCompanyBiddingListQueryV2Filtering;
  cursor?: number;
  cursorSize?: number;
}

export class AgentCompanyBiddingListQueryV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentCompanyBiddingListQueryGet(request: OpenApi2AgentCompanyBiddingListQueryGetRequest): Promise<AgentCompanyBiddingListQueryV2Response> {
    const response = await this.openApi2AgentCompanyBiddingListQueryGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AgentCompanyBiddingListQueryGetWithHttpInfo(request: OpenApi2AgentCompanyBiddingListQueryGetRequest): Promise<ApiResponse<AgentCompanyBiddingListQueryV2Response>> {
    if (request.agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2AgentCompanyBiddingListQueryGet");
    }

    if (request.startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApi2AgentCompanyBiddingListQueryGet");
    }

    if (request.endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApi2AgentCompanyBiddingListQueryGet");
    }

    if (request.filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApi2AgentCompanyBiddingListQueryGet");
    }
    return this.apiClient.requestWithHttpInfo<AgentCompanyBiddingListQueryV2Response>({
      method: "GET",
      path: "/open_api/2/agent/company/bidding/list/query/",
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


