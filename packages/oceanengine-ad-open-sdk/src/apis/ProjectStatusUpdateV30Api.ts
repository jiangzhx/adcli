// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProjectStatusUpdateV30Request, ProjectStatusUpdateV30Response } from "../models";


export class ProjectStatusUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ProjectStatusUpdatePost(request: ProjectStatusUpdateV30Request): Promise<ProjectStatusUpdateV30Response> {
    const response = await this.openApiV30ProjectStatusUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ProjectStatusUpdatePostWithHttpInfo(request: ProjectStatusUpdateV30Request): Promise<ApiResponse<ProjectStatusUpdateV30Response>> {
    return this.apiClient.requestWithHttpInfo<ProjectStatusUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/project/status/update/",
      queryParams: [

      ],
      body: request
    });
  }
}


