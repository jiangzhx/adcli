// Generated from oceanengine/ad_open_sdk_go api/api_diagnosis_task_adv_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DiagnosisTaskAdvGetV2Response } from "../models/index";


export interface DiagnosisTaskAdvGetV2ApiOpenApi2DiagnosisTaskAdvGetGetRequest {
  advertiserId?: number | string;
  taskIds?: (number | string)[];
}

export class DiagnosisTaskAdvGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DiagnosisTaskAdvGetGet(request: DiagnosisTaskAdvGetV2ApiOpenApi2DiagnosisTaskAdvGetGetRequest): Promise<DiagnosisTaskAdvGetV2Response> {
    const response = await this.openApi2DiagnosisTaskAdvGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2DiagnosisTaskAdvGetGetWithHttpInfo(request: DiagnosisTaskAdvGetV2ApiOpenApi2DiagnosisTaskAdvGetGetRequest): Promise<ApiResponse<DiagnosisTaskAdvGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<DiagnosisTaskAdvGetV2Response>({
      method: "GET",
      path: "/open_api/2/diagnosis_task/adv/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "task_ids", value: request.taskIds }
      ]
    });
  }
}


