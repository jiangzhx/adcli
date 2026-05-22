// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DiagnosisTaskAgentGetV2Response } from "../models";


export class DiagnosisTaskAgentGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DiagnosisTaskAgentGetGet(agentId: number, taskIds: number[]): Promise<DiagnosisTaskAgentGetV2Response> {
    const response = await this.openApi2DiagnosisTaskAgentGetGetWithHttpInfo(agentId, taskIds);
    return response.data;
  }

  async openApi2DiagnosisTaskAgentGetGetWithHttpInfo(agentId: number, taskIds: number[]): Promise<ApiResponse<DiagnosisTaskAgentGetV2Response>> {
    if (agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2DiagnosisTaskAgentGetGet");
    }
    return this.apiClient.requestWithHttpInfo<DiagnosisTaskAgentGetV2Response>({
      method: "GET",
      path: "/open_api/2/diagnosis_task/agent/get/",
      queryParams: [
        { name: "agent_id", value: agentId },
        { name: "task_ids", value: taskIds, collectionFormat: "csv" }
      ]
    });
  }
}


