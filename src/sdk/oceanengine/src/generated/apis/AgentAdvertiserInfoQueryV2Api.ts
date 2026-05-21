// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { AgentAdvertiserInfoQueryV2Response } from "../models";


export class AgentAdvertiserInfoQueryV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentAdvertiserInfoQueryGet(accountIds: number[]): Promise<AgentAdvertiserInfoQueryV2Response> {
    const response = await this.openApi2AgentAdvertiserInfoQueryGetWithHttpInfo(accountIds);
    return response.data;
  }

  async openApi2AgentAdvertiserInfoQueryGetWithHttpInfo(accountIds: number[]): Promise<ApiResponse<AgentAdvertiserInfoQueryV2Response>> {
    if (accountIds == null) {
      throw new ApiException("Missing the required parameter 'accountIds' when calling openApi2AgentAdvertiserInfoQueryGet");
    }
    return this.apiClient.requestWithHttpInfo<AgentAdvertiserInfoQueryV2Response>({
      method: "GET",
      path: "/open_api/2/agent/advertiser_info/query/",
      queryParams: [
        { name: "account_ids", value: accountIds, collectionFormat: "csv" }
      ]
    });
  }
}


