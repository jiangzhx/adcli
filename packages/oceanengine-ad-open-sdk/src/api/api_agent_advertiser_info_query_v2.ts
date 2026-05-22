// Generated from oceanengine/ad_open_sdk_go api/api_agent_advertiser_info_query_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AgentAdvertiserInfoQueryV2Response } from "../models/index";


export interface AgentAdvertiserInfoQueryV2ApiOpenApi2AgentAdvertiserInfoQueryGetRequest {
  accountIds: number | string[];
}

export class AgentAdvertiserInfoQueryV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentAdvertiserInfoQueryGet(request: AgentAdvertiserInfoQueryV2ApiOpenApi2AgentAdvertiserInfoQueryGetRequest): Promise<AgentAdvertiserInfoQueryV2Response> {
    const response = await this.openApi2AgentAdvertiserInfoQueryGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AgentAdvertiserInfoQueryGetWithHttpInfo(request: AgentAdvertiserInfoQueryV2ApiOpenApi2AgentAdvertiserInfoQueryGetRequest): Promise<ApiResponse<AgentAdvertiserInfoQueryV2Response>> {
    if (request.accountIds == null) {
      throw new ApiException("Missing the required parameter 'accountIds' when calling openApi2AgentAdvertiserInfoQueryGet");
    }
    return this.apiClient.requestWithHttpInfo<AgentAdvertiserInfoQueryV2Response>({
      method: "GET",
      path: "/open_api/2/agent/advertiser_info/query/",
      queryParams: [
        { name: "account_ids", value: request.accountIds, collectionFormat: "csv" }
      ]
    });
  }
}


