// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProjectNameUpdateV30Request, ProjectNameUpdateV30Response } from "../models";


export interface OpenApiV30ProjectNameUpdatePostRequest {
  projectNameUpdateV30Request?: ProjectNameUpdateV30Request;
}

export class ProjectNameUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ProjectNameUpdatePost(request: OpenApiV30ProjectNameUpdatePostRequest): Promise<ProjectNameUpdateV30Response> {
    const response = await this.openApiV30ProjectNameUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ProjectNameUpdatePostWithHttpInfo(request: OpenApiV30ProjectNameUpdatePostRequest): Promise<ApiResponse<ProjectNameUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ProjectNameUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/project_name/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.projectNameUpdateV30Request
    });
  }
}


