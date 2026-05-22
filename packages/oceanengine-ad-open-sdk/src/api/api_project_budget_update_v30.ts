// Generated from oceanengine/ad_open_sdk_go api/api_project_budget_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ProjectBudgetUpdateV30Request, ProjectBudgetUpdateV30Response } from "../models/index";


export interface ProjectBudgetUpdateV30ApiOpenApiV30ProjectBudgetUpdatePostRequest {
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

  async openApiV30ProjectBudgetUpdatePost(request: ProjectBudgetUpdateV30ApiOpenApiV30ProjectBudgetUpdatePostRequest): Promise<ProjectBudgetUpdateV30Response> {
    const response = await this.openApiV30ProjectBudgetUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ProjectBudgetUpdatePostWithHttpInfo(request: ProjectBudgetUpdateV30ApiOpenApiV30ProjectBudgetUpdatePostRequest): Promise<ApiResponse<ProjectBudgetUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ProjectBudgetUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/project/budget/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.projectBudgetUpdateV30Request
    });
  }
}


