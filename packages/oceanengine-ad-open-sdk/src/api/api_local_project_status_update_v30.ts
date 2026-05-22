// Generated from oceanengine/ad_open_sdk_go api/api_local_project_status_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalProjectStatusUpdateV30Request, LocalProjectStatusUpdateV30Response } from "../models/index";


export interface LocalProjectStatusUpdateV30ApiOpenApiV30LocalProjectStatusUpdatePostRequest {
  localProjectStatusUpdateV30Request?: LocalProjectStatusUpdateV30Request;
}

export class LocalProjectStatusUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalProjectStatusUpdatePost(request: LocalProjectStatusUpdateV30ApiOpenApiV30LocalProjectStatusUpdatePostRequest): Promise<LocalProjectStatusUpdateV30Response> {
    const response = await this.openApiV30LocalProjectStatusUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalProjectStatusUpdatePostWithHttpInfo(request: LocalProjectStatusUpdateV30ApiOpenApiV30LocalProjectStatusUpdatePostRequest): Promise<ApiResponse<LocalProjectStatusUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<LocalProjectStatusUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/local/project/status/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.localProjectStatusUpdateV30Request
    });
  }
}


