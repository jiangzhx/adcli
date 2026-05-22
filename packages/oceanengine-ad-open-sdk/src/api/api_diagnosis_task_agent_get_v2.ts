// Generated from oceanengine/ad_open_sdk_go api/api_diagnosis_task_agent_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DiagnosisTaskAgentGetV2Response } from "../models/index";


export interface DiagnosisTaskAgentGetV2ApiOpenApi2DiagnosisTaskAgentGetGetRequest {
  agentId: number | string;
  taskIds?: number | string[];
}

export class DiagnosisTaskAgentGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DiagnosisTaskAgentGetGet(request: DiagnosisTaskAgentGetV2ApiOpenApi2DiagnosisTaskAgentGetGetRequest): Promise<DiagnosisTaskAgentGetV2Response> {
    const response = await this.openApi2DiagnosisTaskAgentGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2DiagnosisTaskAgentGetGetWithHttpInfo(request: DiagnosisTaskAgentGetV2ApiOpenApi2DiagnosisTaskAgentGetGetRequest): Promise<ApiResponse<DiagnosisTaskAgentGetV2Response>> {
    if (request.agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2DiagnosisTaskAgentGetGet");
    }
    return this.apiClient.requestWithHttpInfo<DiagnosisTaskAgentGetV2Response>({
      method: "GET",
      path: "/open_api/2/diagnosis_task/agent/get/",
      queryParams: [
        { name: "agent_id", value: request.agentId },
        { name: "task_ids", value: request.taskIds, collectionFormat: "csv" }
      ]
    });
  }
}


