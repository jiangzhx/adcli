// Generated from oceanengine/ad_open_sdk_go api/api_std_project_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StdProjectUpdateV30Request, StdProjectUpdateV30Response } from "../models/index";


export interface StdProjectUpdateV30ApiOpenApiV30StdProjectUpdatePostRequest {
  stdProjectUpdateV30Request?: StdProjectUpdateV30Request;
}

export class StdProjectUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30StdProjectUpdatePost(request: StdProjectUpdateV30ApiOpenApiV30StdProjectUpdatePostRequest): Promise<StdProjectUpdateV30Response> {
    const response = await this.openApiV30StdProjectUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30StdProjectUpdatePostWithHttpInfo(request: StdProjectUpdateV30ApiOpenApiV30StdProjectUpdatePostRequest): Promise<ApiResponse<StdProjectUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<StdProjectUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/std_project/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.stdProjectUpdateV30Request
    });
  }
}


