// Generated from oceanengine/ad_open_sdk_go api/api_query_statement_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QueryStatementV2Response } from "../models/index";


export interface QueryStatementV2ApiOpenApi2QueryStatementGetRequest {
  agentId: number | string;
  projectIdList: number[];
}

export class QueryStatementV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2QueryStatementGet(request: QueryStatementV2ApiOpenApi2QueryStatementGetRequest): Promise<QueryStatementV2Response> {
    const response = await this.openApi2QueryStatementGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2QueryStatementGetWithHttpInfo(request: QueryStatementV2ApiOpenApi2QueryStatementGetRequest): Promise<ApiResponse<QueryStatementV2Response>> {
    if (request.agentId == null) {
      throw new ApiException("agentId is required and must be specified");
    }

    if (request.projectIdList == null) {
      throw new ApiException("projectIdList is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QueryStatementV2Response>({
      method: "GET",
      path: "/open_api/2/query/statement/",
      queryParams: [
        { name: "agent_id", value: request.agentId },
        { name: "project_id_list", value: request.projectIdList }
      ]
    });
  }
}


