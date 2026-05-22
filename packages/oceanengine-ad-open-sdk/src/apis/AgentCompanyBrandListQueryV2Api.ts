// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AgentCompanyBrandListQueryV2Filtering, AgentCompanyBrandListQueryV2Response } from "../models";


export interface OpenApi2AgentCompanyBrandListQueryGetRequest {
  agentId: number | string;
  startDate: string;
  endDate: string;
  filtering: AgentCompanyBrandListQueryV2Filtering;
  cursor?: number;
  cursorSize?: number;
}

export class AgentCompanyBrandListQueryV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentCompanyBrandListQueryGet(request: OpenApi2AgentCompanyBrandListQueryGetRequest): Promise<AgentCompanyBrandListQueryV2Response> {
    const response = await this.openApi2AgentCompanyBrandListQueryGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AgentCompanyBrandListQueryGetWithHttpInfo(request: OpenApi2AgentCompanyBrandListQueryGetRequest): Promise<ApiResponse<AgentCompanyBrandListQueryV2Response>> {
    if (request.agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2AgentCompanyBrandListQueryGet");
    }

    if (request.startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApi2AgentCompanyBrandListQueryGet");
    }

    if (request.endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApi2AgentCompanyBrandListQueryGet");
    }

    if (request.filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApi2AgentCompanyBrandListQueryGet");
    }
    return this.apiClient.requestWithHttpInfo<AgentCompanyBrandListQueryV2Response>({
      method: "GET",
      path: "/open_api/2/agent/company/brand/list/query/",
      queryParams: [
        { name: "agent_id", value: request.agentId },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "filtering", value: request.filtering },
        { name: "cursor", value: request.cursor },
        { name: "cursor_size", value: request.cursorSize }
      ]
    });
  }
}


