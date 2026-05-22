// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProjectCpaBidUpdateV30Request, ProjectCpaBidUpdateV30Response } from "../models";


export class ProjectCpaBidUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ProjectCpaBidUpdatePost(request: ProjectCpaBidUpdateV30Request): Promise<ProjectCpaBidUpdateV30Response> {
    const response = await this.openApiV30ProjectCpaBidUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ProjectCpaBidUpdatePostWithHttpInfo(request: ProjectCpaBidUpdateV30Request): Promise<ApiResponse<ProjectCpaBidUpdateV30Response>> {
    return this.apiClient.requestWithHttpInfo<ProjectCpaBidUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/project/cpa_bid/update/",
      queryParams: [

      ],
      body: request
    });
  }
}


