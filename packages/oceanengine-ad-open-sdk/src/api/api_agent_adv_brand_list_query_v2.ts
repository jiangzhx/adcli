// Generated from oceanengine/ad_open_sdk_go api/api_agent_adv_brand_list_query_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AgentAdvBrandListQueryV2Filtering, AgentAdvBrandListQueryV2Response } from "../models/index";


export interface AgentAdvBrandListQueryV2ApiOpenApi2AgentAdvBrandListQueryGetRequest {
  agentId: number | string;
  startDate: string;
  endDate: string;
  filtering: AgentAdvBrandListQueryV2Filtering;
  cursor?: number;
  cursorSize?: number;
}

export class AgentAdvBrandListQueryV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentAdvBrandListQueryGet(request: AgentAdvBrandListQueryV2ApiOpenApi2AgentAdvBrandListQueryGetRequest): Promise<AgentAdvBrandListQueryV2Response> {
    const response = await this.openApi2AgentAdvBrandListQueryGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AgentAdvBrandListQueryGetWithHttpInfo(request: AgentAdvBrandListQueryV2ApiOpenApi2AgentAdvBrandListQueryGetRequest): Promise<ApiResponse<AgentAdvBrandListQueryV2Response>> {
    if (request.agentId == null) {
      throw new ApiException("agentId is required and must be specified");
    }

    if (request.startDate == null) {
      throw new ApiException("startDate is required and must be specified");
    }

    if (request.endDate == null) {
      throw new ApiException("endDate is required and must be specified");
    }

    if (request.filtering == null) {
      throw new ApiException("filtering is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<AgentAdvBrandListQueryV2Response>({
      method: "GET",
      path: "/open_api/2/agent/adv/brand/list/query/",
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


