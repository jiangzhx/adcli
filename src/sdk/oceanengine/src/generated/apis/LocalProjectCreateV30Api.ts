// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { LocalProjectCreateV30Request, LocalProjectCreateV30Response } from "../models";


export class LocalProjectCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalProjectCreatePost(localProjectCreateV30Request: LocalProjectCreateV30Request): Promise<LocalProjectCreateV30Response> {
    const response = await this.openApiV30LocalProjectCreatePostWithHttpInfo(localProjectCreateV30Request);
    return response.data;
  }

  async openApiV30LocalProjectCreatePostWithHttpInfo(localProjectCreateV30Request: LocalProjectCreateV30Request): Promise<ApiResponse<LocalProjectCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<LocalProjectCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/local/project/create/",
      queryParams: [

      ],
      body: localProjectCreateV30Request
    });
  }
}


