// Generated from oceanengine/ad_open_sdk_go api/api_diagnosis_task_adv_create_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DiagnosisTaskAdvCreateV2Request, DiagnosisTaskAdvCreateV2Response } from "../models/index";


export interface DiagnosisTaskAdvCreateV2ApiOpenApi2DiagnosisTaskAdvCreatePostRequest {
  diagnosisTaskAdvCreateV2Request?: DiagnosisTaskAdvCreateV2Request;
}

export class DiagnosisTaskAdvCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DiagnosisTaskAdvCreatePost(request: DiagnosisTaskAdvCreateV2ApiOpenApi2DiagnosisTaskAdvCreatePostRequest): Promise<DiagnosisTaskAdvCreateV2Response> {
    const response = await this.openApi2DiagnosisTaskAdvCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2DiagnosisTaskAdvCreatePostWithHttpInfo(request: DiagnosisTaskAdvCreateV2ApiOpenApi2DiagnosisTaskAdvCreatePostRequest): Promise<ApiResponse<DiagnosisTaskAdvCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<DiagnosisTaskAdvCreateV2Response>({
      method: "POST",
      path: "/open_api/2/diagnosis_task/adv/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.diagnosisTaskAdvCreateV2Request
    });
  }
}


