// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProjectCostProtectStatusGetV30Response } from "../models";


export interface OpenApiV30ProjectCostProtectStatusGetGetRequest {
  advertiserId: number;
  projectIds: number[];
}

export class ProjectCostProtectStatusGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ProjectCostProtectStatusGetGet(request: OpenApiV30ProjectCostProtectStatusGetGetRequest): Promise<ProjectCostProtectStatusGetV30Response> {
    const response = await this.openApiV30ProjectCostProtectStatusGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ProjectCostProtectStatusGetGetWithHttpInfo(request: OpenApiV30ProjectCostProtectStatusGetGetRequest): Promise<ApiResponse<ProjectCostProtectStatusGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ProjectCostProtectStatusGetGet");
    }

    if (request.projectIds == null) {
      throw new ApiException("Missing the required parameter 'projectIds' when calling openApiV30ProjectCostProtectStatusGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ProjectCostProtectStatusGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/project/cost_protect_status/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "project_ids", value: request.projectIds, collectionFormat: "csv" }
      ]
    });
  }
}


