// Generated from oceanengine/ad_open_sdk_go api/api_local_qualification_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalQualificationGetV30Response } from "../models/index";


export interface LocalQualificationGetV30ApiOpenApiV30LocalQualificationGetGetRequest {
  localAccountId: number | string;
}

export class LocalQualificationGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalQualificationGetGet(request: LocalQualificationGetV30ApiOpenApiV30LocalQualificationGetGetRequest): Promise<LocalQualificationGetV30Response> {
    const response = await this.openApiV30LocalQualificationGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalQualificationGetGetWithHttpInfo(request: LocalQualificationGetV30ApiOpenApiV30LocalQualificationGetGetRequest): Promise<ApiResponse<LocalQualificationGetV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalQualificationGetGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalQualificationGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/qualification/get/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId }
      ]
    });
  }
}


