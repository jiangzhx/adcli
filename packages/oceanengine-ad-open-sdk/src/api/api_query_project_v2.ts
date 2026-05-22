// Generated from oceanengine/ad_open_sdk_go api/api_query_project_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QueryProjectV2Filtering, QueryProjectV2Response } from "../models/index";


export interface QueryProjectV2ApiOpenApi2QueryProjectGetRequest {
  agentId: number | string;
  count: number;
  cursor: number;
  filtering?: QueryProjectV2Filtering;
}

export class QueryProjectV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2QueryProjectGet(request: QueryProjectV2ApiOpenApi2QueryProjectGetRequest): Promise<QueryProjectV2Response> {
    const response = await this.openApi2QueryProjectGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2QueryProjectGetWithHttpInfo(request: QueryProjectV2ApiOpenApi2QueryProjectGetRequest): Promise<ApiResponse<QueryProjectV2Response>> {
    if (request.agentId == null) {
      throw new ApiException("agentId is required and must be specified");
    }

    if (request.count == null) {
      throw new ApiException("count is required and must be specified");
    }

    if (request.cursor == null) {
      throw new ApiException("cursor is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QueryProjectV2Response>({
      method: "GET",
      path: "/open_api/2/query/project/",
      queryParams: [
        { name: "agent_id", value: request.agentId },
        { name: "filtering", value: request.filtering },
        { name: "count", value: request.count },
        { name: "cursor", value: request.cursor }
      ]
    });
  }
}


