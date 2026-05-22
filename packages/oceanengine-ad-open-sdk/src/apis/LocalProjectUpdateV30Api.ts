// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalProjectUpdateV30Request, LocalProjectUpdateV30Response } from "../models";


export interface OpenApiV30LocalProjectUpdatePostRequest {
  localProjectUpdateV30Request?: LocalProjectUpdateV30Request;
}

export class LocalProjectUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalProjectUpdatePost(request: OpenApiV30LocalProjectUpdatePostRequest): Promise<LocalProjectUpdateV30Response> {
    const response = await this.openApiV30LocalProjectUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalProjectUpdatePostWithHttpInfo(request: OpenApiV30LocalProjectUpdatePostRequest): Promise<ApiResponse<LocalProjectUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<LocalProjectUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/local/project/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.localProjectUpdateV30Request
    });
  }
}


