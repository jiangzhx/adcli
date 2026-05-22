// Generated from oceanengine/ad_open_sdk_go api/api_local_project_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalProjectListV30Filtering, LocalProjectListV30Response } from "../models/index";


export interface LocalProjectListV30ApiOpenApiV30LocalProjectListGetRequest {
  localAccountId: number | string;
  filtering?: LocalProjectListV30Filtering;
  page?: number;
  pageSize?: number;
}

export class LocalProjectListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalProjectListGet(request: LocalProjectListV30ApiOpenApiV30LocalProjectListGetRequest): Promise<LocalProjectListV30Response> {
    const response = await this.openApiV30LocalProjectListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalProjectListGetWithHttpInfo(request: LocalProjectListV30ApiOpenApiV30LocalProjectListGetRequest): Promise<ApiResponse<LocalProjectListV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalProjectListGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalProjectListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/project/list/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


