// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportAgentGetV2V2Filtering, ReportAgentGetV2V2Response } from "../models";


export interface OpenApi2ReportAgentGetV2GetRequest {
  agentId?: number | string;
  cursor?: number;
  cursorSize?: number;
  endDate?: string;
  filtering?: ReportAgentGetV2V2Filtering;
  page?: number;
  pageSize?: number;
  startDate?: string;
}

export class ReportAgentGetV2V2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ReportAgentGetV2Get(request: OpenApi2ReportAgentGetV2GetRequest): Promise<ReportAgentGetV2V2Response> {
    const response = await this.openApi2ReportAgentGetV2GetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ReportAgentGetV2GetWithHttpInfo(request: OpenApi2ReportAgentGetV2GetRequest): Promise<ApiResponse<ReportAgentGetV2V2Response>> {

    return this.apiClient.requestWithHttpInfo<ReportAgentGetV2V2Response>({
      method: "GET",
      path: "/open_api/2/report/agent/get_v2/",
      queryParams: [
        { name: "agent_id", value: request.agentId },
        { name: "cursor", value: request.cursor },
        { name: "cursor_size", value: request.cursorSize },
        { name: "end_date", value: request.endDate },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "start_date", value: request.startDate }
      ]
    });
  }
}


