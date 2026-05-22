// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalProjectStatusUpdateV30Request, LocalProjectStatusUpdateV30Response } from "../models";


export class LocalProjectStatusUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalProjectStatusUpdatePost(request: LocalProjectStatusUpdateV30Request): Promise<LocalProjectStatusUpdateV30Response> {
    const response = await this.openApiV30LocalProjectStatusUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalProjectStatusUpdatePostWithHttpInfo(request: LocalProjectStatusUpdateV30Request): Promise<ApiResponse<LocalProjectStatusUpdateV30Response>> {
    return this.apiClient.requestWithHttpInfo<LocalProjectStatusUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/local/project/status/update/",
      queryParams: [

      ],
      body: request
    });
  }
}


