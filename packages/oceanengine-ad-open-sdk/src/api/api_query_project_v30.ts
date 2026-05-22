// Generated from oceanengine/ad_open_sdk_go api/api_query_project_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QueryProjectV30Filtering, QueryProjectV30Response } from "../models/index";


export interface QueryProjectV30ApiOpenApiV30QueryProjectGetRequest {
  agentId: number | string;
  count: number;
  cursor: number;
  filtering?: QueryProjectV30Filtering;
}

export class QueryProjectV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30QueryProjectGet(request: QueryProjectV30ApiOpenApiV30QueryProjectGetRequest): Promise<QueryProjectV30Response> {
    const response = await this.openApiV30QueryProjectGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30QueryProjectGetWithHttpInfo(request: QueryProjectV30ApiOpenApiV30QueryProjectGetRequest): Promise<ApiResponse<QueryProjectV30Response>> {
    if (request.agentId == null) {
      throw new ApiException("agentId is required and must be specified");
    }

    if (request.count == null) {
      throw new ApiException("count is required and must be specified");
    }

    if (request.cursor == null) {
      throw new ApiException("cursor is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QueryProjectV30Response>({
      method: "GET",
      path: "/open_api/v3.0/query/project/",
      queryParams: [
        { name: "agent_id", value: request.agentId },
        { name: "filtering", value: request.filtering },
        { name: "count", value: request.count },
        { name: "cursor", value: request.cursor }
      ]
    });
  }
}


