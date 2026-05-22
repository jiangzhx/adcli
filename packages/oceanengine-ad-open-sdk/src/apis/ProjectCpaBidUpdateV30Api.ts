// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProjectCpaBidUpdateV30Request, ProjectCpaBidUpdateV30Response } from "../models";


export interface OpenApiV30ProjectCpaBidUpdatePostRequest {
  projectCpaBidUpdateV30Request?: ProjectCpaBidUpdateV30Request;
}

export class ProjectCpaBidUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ProjectCpaBidUpdatePost(request: OpenApiV30ProjectCpaBidUpdatePostRequest): Promise<ProjectCpaBidUpdateV30Response> {
    const response = await this.openApiV30ProjectCpaBidUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ProjectCpaBidUpdatePostWithHttpInfo(request: OpenApiV30ProjectCpaBidUpdatePostRequest): Promise<ApiResponse<ProjectCpaBidUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ProjectCpaBidUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/project/cpa_bid/update/",
      queryParams: [

      ],
      body: request.projectCpaBidUpdateV30Request
    });
  }
}


