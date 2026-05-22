// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProjectListV30Filtering, ProjectListV30Response } from "../models";


export class ProjectListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ProjectListGet(advertiserId: number | string, fields: string[], filtering: ProjectListV30Filtering, page: number, pageSize: number): Promise<ProjectListV30Response> {
    const response = await this.openApiV30ProjectListGetWithHttpInfo(advertiserId, fields, filtering, page, pageSize);
    return response.data;
  }

  async openApiV30ProjectListGetWithHttpInfo(advertiserId: number | string, fields: string[], filtering: ProjectListV30Filtering, page: number, pageSize: number): Promise<ApiResponse<ProjectListV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ProjectListGet");
    }
    return this.apiClient.requestWithHttpInfo<ProjectListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/project/list/",
      queryParams: [
        { name: "filtering", value: filtering },
        { name: "advertiser_id", value: advertiserId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "fields", value: fields, collectionFormat: "csv" }
      ]
    });
  }
}

