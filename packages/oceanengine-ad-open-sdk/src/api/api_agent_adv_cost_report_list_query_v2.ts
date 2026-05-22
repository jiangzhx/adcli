// Generated from oceanengine/ad_open_sdk_go api/api_agent_adv_cost_report_list_query_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AgentAdvCostReportListQueryV2Request, AgentAdvCostReportListQueryV2Response } from "../models/index";


export interface AgentAdvCostReportListQueryV2ApiOpenApi2AgentAdvCostReportListQueryPostRequest {
  agentAdvCostReportListQueryV2Request?: AgentAdvCostReportListQueryV2Request;
}

export class AgentAdvCostReportListQueryV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentAdvCostReportListQueryPost(request: AgentAdvCostReportListQueryV2ApiOpenApi2AgentAdvCostReportListQueryPostRequest): Promise<AgentAdvCostReportListQueryV2Response> {
    const response = await this.openApi2AgentAdvCostReportListQueryPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AgentAdvCostReportListQueryPostWithHttpInfo(request: AgentAdvCostReportListQueryV2ApiOpenApi2AgentAdvCostReportListQueryPostRequest): Promise<ApiResponse<AgentAdvCostReportListQueryV2Response>> {

    return this.apiClient.requestWithHttpInfo<AgentAdvCostReportListQueryV2Response>({
      method: "POST",
      path: "/open_api/2/agent/adv/cost_report/list/query/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.agentAdvCostReportListQueryV2Request
    });
  }
}


