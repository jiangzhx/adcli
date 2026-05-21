// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { DiagnosisTaskAdvListV2Response, DiagnosisTaskAdvListV2Results, DiagnosisTaskAdvListV2Status } from "../models";


export class DiagnosisTaskAdvListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DiagnosisTaskAdvListGet(advertiserId: number, results: DiagnosisTaskAdvListV2Results[], status: DiagnosisTaskAdvListV2Status[], startTime: number, endTime: number, page: number, pageSize: number): Promise<DiagnosisTaskAdvListV2Response> {
    const response = await this.openApi2DiagnosisTaskAdvListGetWithHttpInfo(advertiserId, results, status, startTime, endTime, page, pageSize);
    return response.data;
  }

  async openApi2DiagnosisTaskAdvListGetWithHttpInfo(advertiserId: number, results: DiagnosisTaskAdvListV2Results[], status: DiagnosisTaskAdvListV2Status[], startTime: number, endTime: number, page: number, pageSize: number): Promise<ApiResponse<DiagnosisTaskAdvListV2Response>> {

    return this.apiClient.requestWithHttpInfo<DiagnosisTaskAdvListV2Response>({
      method: "GET",
      path: "/open_api/2/diagnosis_task/adv/list/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "results", value: results, collectionFormat: "csv" },
        { name: "status", value: status, collectionFormat: "csv" }
      ]
    });
  }
}


