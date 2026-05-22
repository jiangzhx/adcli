// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QueryProjectV30Filtering, QueryProjectV30Response } from "../models";


export class QueryProjectV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30QueryProjectGet(agentId: number, count: number, cursor: number, filtering: QueryProjectV30Filtering): Promise<QueryProjectV30Response> {
    const response = await this.openApiV30QueryProjectGetWithHttpInfo(agentId, count, cursor, filtering);
    return response.data;
  }

  async openApiV30QueryProjectGetWithHttpInfo(agentId: number, count: number, cursor: number, filtering: QueryProjectV30Filtering): Promise<ApiResponse<QueryProjectV30Response>> {
    if (agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApiV30QueryProjectGet");
    }

    if (count == null) {
      throw new ApiException("Missing the required parameter 'count' when calling openApiV30QueryProjectGet");
    }

    if (cursor == null) {
      throw new ApiException("Missing the required parameter 'cursor' when calling openApiV30QueryProjectGet");
    }
    return this.apiClient.requestWithHttpInfo<QueryProjectV30Response>({
      method: "GET",
      path: "/open_api/v3.0/query/project/",
      queryParams: [
        { name: "agent_id", value: agentId },
        { name: "filtering", value: filtering },
        { name: "count", value: count },
        { name: "cursor", value: cursor }
      ]
    });
  }
}


