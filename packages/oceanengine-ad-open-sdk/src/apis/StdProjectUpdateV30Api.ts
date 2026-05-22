// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StdProjectUpdateV30Request, StdProjectUpdateV30Response } from "../models";


export interface OpenApiV30StdProjectUpdatePostRequest {
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

  async openApiV30StdProjectUpdatePost(request: OpenApiV30StdProjectUpdatePostRequest): Promise<StdProjectUpdateV30Response> {
    const response = await this.openApiV30StdProjectUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30StdProjectUpdatePostWithHttpInfo(request: OpenApiV30StdProjectUpdatePostRequest): Promise<ApiResponse<StdProjectUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<StdProjectUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/std_project/update/",
      queryParams: [

      ],
      body: request.stdProjectUpdateV30Request
    });
  }
}


