// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QueryProjectV2Filtering, QueryProjectV2Response } from "../models";


export class QueryProjectV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2QueryProjectGet(agentId: number, count: number, cursor: number, filtering: QueryProjectV2Filtering): Promise<QueryProjectV2Response> {
    const response = await this.openApi2QueryProjectGetWithHttpInfo(agentId, count, cursor, filtering);
    return response.data;
  }

  async openApi2QueryProjectGetWithHttpInfo(agentId: number, count: number, cursor: number, filtering: QueryProjectV2Filtering): Promise<ApiResponse<QueryProjectV2Response>> {
    if (agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2QueryProjectGet");
    }

    if (count == null) {
      throw new ApiException("Missing the required parameter 'count' when calling openApi2QueryProjectGet");
    }

    if (cursor == null) {
      throw new ApiException("Missing the required parameter 'cursor' when calling openApi2QueryProjectGet");
    }
    return this.apiClient.requestWithHttpInfo<QueryProjectV2Response>({
      method: "GET",
      path: "/open_api/2/query/project/",
      queryParams: [
        { name: "agent_id", value: agentId },
        { name: "filtering", value: filtering },
        { name: "count", value: count },
        { name: "cursor", value: cursor }
      ]
    });
  }
}


