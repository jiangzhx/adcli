// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProjectCreateV30Request, ProjectCreateV30Response } from "../models";


export class ProjectCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ProjectCreatePost(projectCreateV30Request: ProjectCreateV30Request): Promise<ProjectCreateV30Response> {
    const response = await this.openApiV30ProjectCreatePostWithHttpInfo(projectCreateV30Request);
    return response.data;
  }

  async openApiV30ProjectCreatePostWithHttpInfo(projectCreateV30Request: ProjectCreateV30Request): Promise<ApiResponse<ProjectCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ProjectCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/project/create/",
      queryParams: [

      ],
      body: projectCreateV30Request
    });
  }
}


