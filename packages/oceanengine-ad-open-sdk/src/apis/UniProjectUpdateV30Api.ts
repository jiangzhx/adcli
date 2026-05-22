// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { UniProjectUpdateV30Request, UniProjectUpdateV30Response } from "../models";


export interface OpenApiV30UniProjectUpdatePostRequest {
  uniProjectUpdateV30Request?: UniProjectUpdateV30Request;
}

export class UniProjectUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30UniProjectUpdatePost(request: OpenApiV30UniProjectUpdatePostRequest): Promise<UniProjectUpdateV30Response> {
    const response = await this.openApiV30UniProjectUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30UniProjectUpdatePostWithHttpInfo(request: OpenApiV30UniProjectUpdatePostRequest): Promise<ApiResponse<UniProjectUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<UniProjectUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/uni_project/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.uniProjectUpdateV30Request
    });
  }
}


