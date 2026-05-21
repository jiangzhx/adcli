// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ReportAgentGetV2V2Filtering, ReportAgentGetV2V2Response } from "../models";


export class ReportAgentGetV2V2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ReportAgentGetV2Get(agentId: number, cursor: number, cursorSize: number, endDate: string, filtering: ReportAgentGetV2V2Filtering, page: number, pageSize: number, startDate: string): Promise<ReportAgentGetV2V2Response> {
    const response = await this.openApi2ReportAgentGetV2GetWithHttpInfo(agentId, cursor, cursorSize, endDate, filtering, page, pageSize, startDate);
    return response.data;
  }

  async openApi2ReportAgentGetV2GetWithHttpInfo(agentId: number, cursor: number, cursorSize: number, endDate: string, filtering: ReportAgentGetV2V2Filtering, page: number, pageSize: number, startDate: string): Promise<ApiResponse<ReportAgentGetV2V2Response>> {

    return this.apiClient.requestWithHttpInfo<ReportAgentGetV2V2Response>({
      method: "GET",
      path: "/open_api/2/report/agent/get_v2/",
      queryParams: [
        { name: "agent_id", value: agentId },
        { name: "cursor", value: cursor },
        { name: "cursor_size", value: cursorSize },
        { name: "end_date", value: endDate },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "start_date", value: startDate }
      ]
    });
  }
}


