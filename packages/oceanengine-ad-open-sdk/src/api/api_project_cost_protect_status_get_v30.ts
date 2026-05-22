// Generated from oceanengine/ad_open_sdk_go api/api_project_cost_protect_status_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ProjectCostProtectStatusGetV30Response } from "../models/index";


export interface ProjectCostProtectStatusGetV30ApiOpenApiV30ProjectCostProtectStatusGetGetRequest {
  advertiserId: number | string;
  projectIds: (number | string)[];
}

export class ProjectCostProtectStatusGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ProjectCostProtectStatusGetGet(request: ProjectCostProtectStatusGetV30ApiOpenApiV30ProjectCostProtectStatusGetGetRequest): Promise<ProjectCostProtectStatusGetV30Response> {
    const response = await this.openApiV30ProjectCostProtectStatusGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ProjectCostProtectStatusGetGetWithHttpInfo(request: ProjectCostProtectStatusGetV30ApiOpenApiV30ProjectCostProtectStatusGetGetRequest): Promise<ApiResponse<ProjectCostProtectStatusGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.projectIds == null) {
      throw new ApiException("projectIds is required and must be specified");
    }

    if (request.projectIds != null && request.projectIds.length < 1) {
      throw new ApiException("projectIds must have at least 1 elements");
    }

    if (request.projectIds != null && request.projectIds.length > 50) {
      throw new ApiException("projectIds must have less than 50 elements");
    }
    return this.apiClient.requestWithHttpInfo<ProjectCostProtectStatusGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/project/cost_protect_status/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "project_ids", value: request.projectIds }
      ]
    });
  }
}


