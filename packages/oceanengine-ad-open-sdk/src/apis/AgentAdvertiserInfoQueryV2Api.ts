// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AgentAdvertiserInfoQueryV2Response } from "../models";


export interface OpenApi2AgentAdvertiserInfoQueryGetRequest {
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

  async openApi2AgentAdvertiserInfoQueryGet(request: OpenApi2AgentAdvertiserInfoQueryGetRequest): Promise<AgentAdvertiserInfoQueryV2Response> {
    const response = await this.openApi2AgentAdvertiserInfoQueryGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AgentAdvertiserInfoQueryGetWithHttpInfo(request: OpenApi2AgentAdvertiserInfoQueryGetRequest): Promise<ApiResponse<AgentAdvertiserInfoQueryV2Response>> {
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


