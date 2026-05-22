// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalProjectListV30Filtering, LocalProjectListV30Response } from "../models";


export interface OpenApiV30LocalProjectListGetRequest {
  localAccountId: number;
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

  async openApiV30LocalProjectListGet(request: OpenApiV30LocalProjectListGetRequest): Promise<LocalProjectListV30Response> {
    const response = await this.openApiV30LocalProjectListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalProjectListGetWithHttpInfo(request: OpenApiV30LocalProjectListGetRequest): Promise<ApiResponse<LocalProjectListV30Response>> {
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


