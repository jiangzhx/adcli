// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DiagnosisTaskAdvGetV2Response } from "../models";


export interface OpenApi2DiagnosisTaskAdvGetGetRequest {
  advertiserId?: number;
  taskIds?: number[];
}

export class DiagnosisTaskAdvGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DiagnosisTaskAdvGetGet(request: OpenApi2DiagnosisTaskAdvGetGetRequest): Promise<DiagnosisTaskAdvGetV2Response> {
    const response = await this.openApi2DiagnosisTaskAdvGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2DiagnosisTaskAdvGetGetWithHttpInfo(request: OpenApi2DiagnosisTaskAdvGetGetRequest): Promise<ApiResponse<DiagnosisTaskAdvGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<DiagnosisTaskAdvGetV2Response>({
      method: "GET",
      path: "/open_api/2/diagnosis_task/adv/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "task_ids", value: request.taskIds, collectionFormat: "csv" }
      ]
    });
  }
}


