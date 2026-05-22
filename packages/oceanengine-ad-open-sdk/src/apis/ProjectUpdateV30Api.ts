// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProjectUpdateV30Request, ProjectUpdateV30Response } from "../models";


export class ProjectUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ProjectUpdatePost(projectUpdateV30Request: ProjectUpdateV30Request): Promise<ProjectUpdateV30Response> {
    const response = await this.openApiV30ProjectUpdatePostWithHttpInfo(projectUpdateV30Request);
    return response.data;
  }

  async openApiV30ProjectUpdatePostWithHttpInfo(projectUpdateV30Request: ProjectUpdateV30Request): Promise<ApiResponse<ProjectUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ProjectUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/project/update/",
      queryParams: [

      ],
      body: projectUpdateV30Request
    });
  }
}


