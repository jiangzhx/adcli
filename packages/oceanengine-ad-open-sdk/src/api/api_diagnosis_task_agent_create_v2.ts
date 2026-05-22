// Generated from oceanengine/ad_open_sdk_go api/api_diagnosis_task_agent_create_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DiagnosisTaskAgentCreateV2Request, DiagnosisTaskAgentCreateV2Response } from "../models/index";


export interface DiagnosisTaskAgentCreateV2ApiOpenApi2DiagnosisTaskAgentCreatePostRequest {
  diagnosisTaskAgentCreateV2Request?: DiagnosisTaskAgentCreateV2Request;
}

export class DiagnosisTaskAgentCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DiagnosisTaskAgentCreatePost(request: DiagnosisTaskAgentCreateV2ApiOpenApi2DiagnosisTaskAgentCreatePostRequest): Promise<DiagnosisTaskAgentCreateV2Response> {
    const response = await this.openApi2DiagnosisTaskAgentCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2DiagnosisTaskAgentCreatePostWithHttpInfo(request: DiagnosisTaskAgentCreateV2ApiOpenApi2DiagnosisTaskAgentCreatePostRequest): Promise<ApiResponse<DiagnosisTaskAgentCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<DiagnosisTaskAgentCreateV2Response>({
      method: "POST",
      path: "/open_api/2/diagnosis_task/agent/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.diagnosisTaskAgentCreateV2Request
    });
  }
}


