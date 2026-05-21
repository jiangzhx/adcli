// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { DiagnosisTaskAdvGetV2Response } from "../models";


export class DiagnosisTaskAdvGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DiagnosisTaskAdvGetGet(advertiserId: number, taskIds: number[]): Promise<DiagnosisTaskAdvGetV2Response> {
    const response = await this.openApi2DiagnosisTaskAdvGetGetWithHttpInfo(advertiserId, taskIds);
    return response.data;
  }

  async openApi2DiagnosisTaskAdvGetGetWithHttpInfo(advertiserId: number, taskIds: number[]): Promise<ApiResponse<DiagnosisTaskAdvGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<DiagnosisTaskAdvGetV2Response>({
      method: "GET",
      path: "/open_api/2/diagnosis_task/adv/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "task_ids", value: taskIds, collectionFormat: "csv" }
      ]
    });
  }
}


