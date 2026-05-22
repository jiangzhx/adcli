// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProjectDeepCpaBidUpdateV30Request, ProjectDeepCpaBidUpdateV30Response } from "../models";


export class ProjectDeepCpaBidUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ProjectDeepCpaBidUpdatePost(projectDeepCpaBidUpdateV30Request: ProjectDeepCpaBidUpdateV30Request): Promise<ProjectDeepCpaBidUpdateV30Response> {
    const response = await this.openApiV30ProjectDeepCpaBidUpdatePostWithHttpInfo(projectDeepCpaBidUpdateV30Request);
    return response.data;
  }

  async openApiV30ProjectDeepCpaBidUpdatePostWithHttpInfo(projectDeepCpaBidUpdateV30Request: ProjectDeepCpaBidUpdateV30Request): Promise<ApiResponse<ProjectDeepCpaBidUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ProjectDeepCpaBidUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/project/deep_cpa_bid/update/",
      queryParams: [

      ],
      body: projectDeepCpaBidUpdateV30Request
    });
  }
}


