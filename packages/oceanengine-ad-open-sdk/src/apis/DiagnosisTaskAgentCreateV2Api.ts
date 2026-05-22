// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DiagnosisTaskAgentCreateV2Request, DiagnosisTaskAgentCreateV2Response } from "../models";


export class DiagnosisTaskAgentCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DiagnosisTaskAgentCreatePost(request: DiagnosisTaskAgentCreateV2Request): Promise<DiagnosisTaskAgentCreateV2Response> {
    const response = await this.openApi2DiagnosisTaskAgentCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2DiagnosisTaskAgentCreatePostWithHttpInfo(request: DiagnosisTaskAgentCreateV2Request): Promise<ApiResponse<DiagnosisTaskAgentCreateV2Response>> {
    return this.apiClient.requestWithHttpInfo<DiagnosisTaskAgentCreateV2Response>({
      method: "POST",
      path: "/open_api/2/diagnosis_task/agent/create/",
      queryParams: [

      ],
      body: request
    });
  }
}


