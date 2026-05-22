// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalQualificationGetV30Response } from "../models";


export interface OpenApiV30LocalQualificationGetGetRequest {
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

  async openApiV30LocalQualificationGetGet(request: OpenApiV30LocalQualificationGetGetRequest): Promise<LocalQualificationGetV30Response> {
    const response = await this.openApiV30LocalQualificationGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalQualificationGetGetWithHttpInfo(request: OpenApiV30LocalQualificationGetGetRequest): Promise<ApiResponse<LocalQualificationGetV30Response>> {
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


