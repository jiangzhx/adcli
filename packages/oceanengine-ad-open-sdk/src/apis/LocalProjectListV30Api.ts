// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalProjectListV30Filtering, LocalProjectListV30Response } from "../models";


export class LocalProjectListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalProjectListGet(localAccountId: number, filtering: LocalProjectListV30Filtering, page: number, pageSize: number): Promise<LocalProjectListV30Response> {
    const response = await this.openApiV30LocalProjectListGetWithHttpInfo(localAccountId, filtering, page, pageSize);
    return response.data;
  }

  async openApiV30LocalProjectListGetWithHttpInfo(localAccountId: number, filtering: LocalProjectListV30Filtering, page: number, pageSize: number): Promise<ApiResponse<LocalProjectListV30Response>> {
    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalProjectListGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalProjectListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/project/list/",
      queryParams: [
        { name: "local_account_id", value: localAccountId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


