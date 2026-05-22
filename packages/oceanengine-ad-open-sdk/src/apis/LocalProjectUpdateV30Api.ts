// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalProjectUpdateV30Request, LocalProjectUpdateV30Response } from "../models";


export class LocalProjectUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalProjectUpdatePost(localProjectUpdateV30Request: LocalProjectUpdateV30Request): Promise<LocalProjectUpdateV30Response> {
    const response = await this.openApiV30LocalProjectUpdatePostWithHttpInfo(localProjectUpdateV30Request);
    return response.data;
  }

  async openApiV30LocalProjectUpdatePostWithHttpInfo(localProjectUpdateV30Request: LocalProjectUpdateV30Request): Promise<ApiResponse<LocalProjectUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<LocalProjectUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/local/project/update/",
      queryParams: [

      ],
      body: localProjectUpdateV30Request
    });
  }
}


