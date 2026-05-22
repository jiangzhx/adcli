// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DiagnosisTaskAgentListV2Response, DiagnosisTaskAgentListV2Results, DiagnosisTaskAgentListV2Status } from "../models";


export class DiagnosisTaskAgentListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DiagnosisTaskAgentListGet(agentId: number, results: DiagnosisTaskAgentListV2Results[], status: DiagnosisTaskAgentListV2Status[], startTime: string, endTime: string, page: number, pageSize: number, startDateTime: string, endDateTime: string): Promise<DiagnosisTaskAgentListV2Response> {
    const response = await this.openApi2DiagnosisTaskAgentListGetWithHttpInfo(agentId, results, status, startTime, endTime, page, pageSize, startDateTime, endDateTime);
    return response.data;
  }

  async openApi2DiagnosisTaskAgentListGetWithHttpInfo(agentId: number, results: DiagnosisTaskAgentListV2Results[], status: DiagnosisTaskAgentListV2Status[], startTime: string, endTime: string, page: number, pageSize: number, startDateTime: string, endDateTime: string): Promise<ApiResponse<DiagnosisTaskAgentListV2Response>> {
    if (agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2DiagnosisTaskAgentListGet");
    }
    return this.apiClient.requestWithHttpInfo<DiagnosisTaskAgentListV2Response>({
      method: "GET",
      path: "/open_api/2/diagnosis_task/agent/list/",
      queryParams: [
        { name: "agent_id", value: agentId },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "start_date_time", value: startDateTime },
        { name: "end_date_time", value: endDateTime },
        { name: "results", value: results, collectionFormat: "csv" },
        { name: "status", value: status, collectionFormat: "csv" }
      ]
    });
  }
}


