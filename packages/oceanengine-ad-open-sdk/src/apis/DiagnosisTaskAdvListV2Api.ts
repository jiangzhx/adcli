// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DiagnosisTaskAdvListV2Response, DiagnosisTaskAdvListV2Results, DiagnosisTaskAdvListV2Status } from "../models";


export interface OpenApi2DiagnosisTaskAdvListGetRequest {
  advertiserId?: number;
  results?: DiagnosisTaskAdvListV2Results[];
  status?: DiagnosisTaskAdvListV2Status[];
  startTime?: number;
  endTime?: number;
  page?: number;
  pageSize?: number;
}

export class DiagnosisTaskAdvListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DiagnosisTaskAdvListGet(request: OpenApi2DiagnosisTaskAdvListGetRequest): Promise<DiagnosisTaskAdvListV2Response> {
    const response = await this.openApi2DiagnosisTaskAdvListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2DiagnosisTaskAdvListGetWithHttpInfo(request: OpenApi2DiagnosisTaskAdvListGetRequest): Promise<ApiResponse<DiagnosisTaskAdvListV2Response>> {

    return this.apiClient.requestWithHttpInfo<DiagnosisTaskAdvListV2Response>({
      method: "GET",
      path: "/open_api/2/diagnosis_task/adv/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "results", value: request.results, collectionFormat: "csv" },
        { name: "status", value: request.status, collectionFormat: "csv" },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


