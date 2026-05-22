// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DiagnosisTaskAgentListV2Response, DiagnosisTaskAgentListV2Results, DiagnosisTaskAgentListV2Status } from "../models";


export interface OpenApi2DiagnosisTaskAgentListGetRequest {
  agentId: number | string;
  results?: DiagnosisTaskAgentListV2Results[];
  status?: DiagnosisTaskAgentListV2Status[];
  startTime?: string;
  endTime?: string;
  page?: number;
  pageSize?: number;
  startDateTime?: string;
  endDateTime?: string;
}

export class DiagnosisTaskAgentListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DiagnosisTaskAgentListGet(request: OpenApi2DiagnosisTaskAgentListGetRequest): Promise<DiagnosisTaskAgentListV2Response> {
    const response = await this.openApi2DiagnosisTaskAgentListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2DiagnosisTaskAgentListGetWithHttpInfo(request: OpenApi2DiagnosisTaskAgentListGetRequest): Promise<ApiResponse<DiagnosisTaskAgentListV2Response>> {
    if (request.agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2DiagnosisTaskAgentListGet");
    }
    return this.apiClient.requestWithHttpInfo<DiagnosisTaskAgentListV2Response>({
      method: "GET",
      path: "/open_api/2/diagnosis_task/agent/list/",
      queryParams: [
        { name: "agent_id", value: request.agentId },
        { name: "results", value: request.results, collectionFormat: "csv" },
        { name: "status", value: request.status, collectionFormat: "csv" },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "start_date_time", value: request.startDateTime },
        { name: "end_date_time", value: request.endDateTime }
      ]
    });
  }
}


