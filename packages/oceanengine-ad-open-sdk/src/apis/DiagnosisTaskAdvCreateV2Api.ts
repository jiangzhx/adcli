// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DiagnosisTaskAdvCreateV2Request, DiagnosisTaskAdvCreateV2Response } from "../models";


export class DiagnosisTaskAdvCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DiagnosisTaskAdvCreatePost(request: DiagnosisTaskAdvCreateV2Request): Promise<DiagnosisTaskAdvCreateV2Response> {
    const response = await this.openApi2DiagnosisTaskAdvCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2DiagnosisTaskAdvCreatePostWithHttpInfo(request: DiagnosisTaskAdvCreateV2Request): Promise<ApiResponse<DiagnosisTaskAdvCreateV2Response>> {
    return this.apiClient.requestWithHttpInfo<DiagnosisTaskAdvCreateV2Response>({
      method: "POST",
      path: "/open_api/2/diagnosis_task/adv/create/",
      queryParams: [

      ],
      body: request
    });
  }
}


