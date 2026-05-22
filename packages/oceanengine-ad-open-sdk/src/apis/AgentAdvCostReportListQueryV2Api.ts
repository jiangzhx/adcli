// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AgentAdvCostReportListQueryV2Request, AgentAdvCostReportListQueryV2Response } from "../models";


export class AgentAdvCostReportListQueryV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentAdvCostReportListQueryPost(agentAdvCostReportListQueryV2Request: AgentAdvCostReportListQueryV2Request): Promise<AgentAdvCostReportListQueryV2Response> {
    const response = await this.openApi2AgentAdvCostReportListQueryPostWithHttpInfo(agentAdvCostReportListQueryV2Request);
    return response.data;
  }

  async openApi2AgentAdvCostReportListQueryPostWithHttpInfo(agentAdvCostReportListQueryV2Request: AgentAdvCostReportListQueryV2Request): Promise<ApiResponse<AgentAdvCostReportListQueryV2Response>> {

    return this.apiClient.requestWithHttpInfo<AgentAdvCostReportListQueryV2Response>({
      method: "POST",
      path: "/open_api/2/agent/adv/cost_report/list/query/",
      queryParams: [

      ],
      body: agentAdvCostReportListQueryV2Request
    });
  }
}


