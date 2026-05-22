// Generated from oceanengine/ad_open_sdk_go api/api_project_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ProjectListV30Filtering, ProjectListV30Response } from "../models/index";


export interface ProjectListV30ApiOpenApiV30ProjectListGetRequest {
  advertiserId: number | string;
  fields?: string[];
  filtering?: ProjectListV30Filtering;
  page?: number;
  pageSize?: number;
}

export class ProjectListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ProjectListGet(request: ProjectListV30ApiOpenApiV30ProjectListGetRequest): Promise<ProjectListV30Response> {
    const response = await this.openApiV30ProjectListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ProjectListGetWithHttpInfo(request: ProjectListV30ApiOpenApiV30ProjectListGetRequest): Promise<ApiResponse<ProjectListV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ProjectListGet");
    }
    return this.apiClient.requestWithHttpInfo<ProjectListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/project/list/",
      queryParams: [
        { name: "fields", value: request.fields },
        { name: "filtering", value: request.filtering },
        { name: "advertiser_id", value: request.advertiserId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


