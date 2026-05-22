// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QueryProjectV2Filtering, QueryProjectV2Response } from "../models";


export interface OpenApi2QueryProjectGetRequest {
  agentId: number;
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

  async openApi2QueryProjectGet(request: OpenApi2QueryProjectGetRequest): Promise<QueryProjectV2Response> {
    const response = await this.openApi2QueryProjectGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2QueryProjectGetWithHttpInfo(request: OpenApi2QueryProjectGetRequest): Promise<ApiResponse<QueryProjectV2Response>> {
    if (request.agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2QueryProjectGet");
    }

    if (request.count == null) {
      throw new ApiException("Missing the required parameter 'count' when calling openApi2QueryProjectGet");
    }

    if (request.cursor == null) {
      throw new ApiException("Missing the required parameter 'cursor' when calling openApi2QueryProjectGet");
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


