// Generated from oceanengine/ad_open_sdk_go api/api_local_project_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalProjectCreateV30Request, LocalProjectCreateV30Response } from "../models/index";


export interface LocalProjectCreateV30ApiOpenApiV30LocalProjectCreatePostRequest {
  localProjectCreateV30Request?: LocalProjectCreateV30Request;
}

export class LocalProjectCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalProjectCreatePost(request: LocalProjectCreateV30ApiOpenApiV30LocalProjectCreatePostRequest): Promise<LocalProjectCreateV30Response> {
    const response = await this.openApiV30LocalProjectCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalProjectCreatePostWithHttpInfo(request: LocalProjectCreateV30ApiOpenApiV30LocalProjectCreatePostRequest): Promise<ApiResponse<LocalProjectCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<LocalProjectCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/local/project/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.localProjectCreateV30Request
    });
  }
}


