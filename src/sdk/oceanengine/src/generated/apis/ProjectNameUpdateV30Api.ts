// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ProjectNameUpdateV30Request, ProjectNameUpdateV30Response } from "../models";


export class ProjectNameUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ProjectNameUpdatePost(projectNameUpdateV30Request: ProjectNameUpdateV30Request): Promise<ProjectNameUpdateV30Response> {
    const response = await this.openApiV30ProjectNameUpdatePostWithHttpInfo(projectNameUpdateV30Request);
    return response.data;
  }

  async openApiV30ProjectNameUpdatePostWithHttpInfo(projectNameUpdateV30Request: ProjectNameUpdateV30Request): Promise<ApiResponse<ProjectNameUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ProjectNameUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/project_name/update/",
      queryParams: [

      ],
      body: projectNameUpdateV30Request
    });
  }
}


