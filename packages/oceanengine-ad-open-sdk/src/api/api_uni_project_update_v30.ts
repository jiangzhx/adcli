// Generated from oceanengine/ad_open_sdk_go api/api_uni_project_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { UniProjectUpdateV30Request, UniProjectUpdateV30Response } from "../models/index";


export interface UniProjectUpdateV30ApiOpenApiV30UniProjectUpdatePostRequest {
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

  async openApiV30UniProjectUpdatePost(request: UniProjectUpdateV30ApiOpenApiV30UniProjectUpdatePostRequest): Promise<UniProjectUpdateV30Response> {
    const response = await this.openApiV30UniProjectUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30UniProjectUpdatePostWithHttpInfo(request: UniProjectUpdateV30ApiOpenApiV30UniProjectUpdatePostRequest): Promise<ApiResponse<UniProjectUpdateV30Response>> {

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


