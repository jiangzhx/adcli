// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QueryProjectV30Filtering, QueryProjectV30Response } from "../models";


export interface OpenApiV30QueryProjectGetRequest {
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

  async openApiV30QueryProjectGet(request: OpenApiV30QueryProjectGetRequest): Promise<QueryProjectV30Response> {
    const response = await this.openApiV30QueryProjectGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30QueryProjectGetWithHttpInfo(request: OpenApiV30QueryProjectGetRequest): Promise<ApiResponse<QueryProjectV30Response>> {
    if (request.agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApiV30QueryProjectGet");
    }

    if (request.count == null) {
      throw new ApiException("Missing the required parameter 'count' when calling openApiV30QueryProjectGet");
    }

    if (request.cursor == null) {
      throw new ApiException("Missing the required parameter 'cursor' when calling openApiV30QueryProjectGet");
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


