// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProjectBudgetUpdateV30Request, ProjectBudgetUpdateV30Response } from "../models";


export interface OpenApiV30ProjectBudgetUpdatePostRequest {
  projectBudgetUpdateV30Request?: ProjectBudgetUpdateV30Request;
}

export class ProjectBudgetUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ProjectBudgetUpdatePost(request: OpenApiV30ProjectBudgetUpdatePostRequest): Promise<ProjectBudgetUpdateV30Response> {
    const response = await this.openApiV30ProjectBudgetUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ProjectBudgetUpdatePostWithHttpInfo(request: OpenApiV30ProjectBudgetUpdatePostRequest): Promise<ApiResponse<ProjectBudgetUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ProjectBudgetUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/project/budget/update/",
      queryParams: [

      ],
      body: request.projectBudgetUpdateV30Request
    });
  }
}


