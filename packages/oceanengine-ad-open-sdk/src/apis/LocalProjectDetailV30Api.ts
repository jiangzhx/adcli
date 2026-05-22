// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalProjectDetailV30Response } from "../models";


export class LocalProjectDetailV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalProjectDetailGet(localAccountId: number, projectId: number): Promise<LocalProjectDetailV30Response> {
    const response = await this.openApiV30LocalProjectDetailGetWithHttpInfo(localAccountId, projectId);
    return response.data;
  }

  async openApiV30LocalProjectDetailGetWithHttpInfo(localAccountId: number, projectId: number): Promise<ApiResponse<LocalProjectDetailV30Response>> {
    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalProjectDetailGet");
    }

    if (projectId == null) {
      throw new ApiException("Missing the required parameter 'projectId' when calling openApiV30LocalProjectDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalProjectDetailV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/project/detail/",
      queryParams: [
        { name: "local_account_id", value: localAccountId },
        { name: "project_id", value: projectId }
      ]
    });
  }
}


