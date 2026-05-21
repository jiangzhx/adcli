// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QueryStatementV2Response } from "../models";


export class QueryStatementV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2QueryStatementGet(agentId: number, projectIdList: number[]): Promise<QueryStatementV2Response> {
    const response = await this.openApi2QueryStatementGetWithHttpInfo(agentId, projectIdList);
    return response.data;
  }

  async openApi2QueryStatementGetWithHttpInfo(agentId: number, projectIdList: number[]): Promise<ApiResponse<QueryStatementV2Response>> {
    if (agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2QueryStatementGet");
    }

    if (projectIdList == null) {
      throw new ApiException("Missing the required parameter 'projectIdList' when calling openApi2QueryStatementGet");
    }
    return this.apiClient.requestWithHttpInfo<QueryStatementV2Response>({
      method: "GET",
      path: "/open_api/2/query/statement/",
      queryParams: [
        { name: "agent_id", value: agentId },
        { name: "project_id_list", value: projectIdList, collectionFormat: "csv" }
      ]
    });
  }
}


