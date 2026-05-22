// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { UniProjectMonetizationModeUpdateV30Request, UniProjectMonetizationModeUpdateV30Response } from "../models";


export interface OpenApiV30UniProjectMonetizationModeUpdatePostRequest {
  uniProjectMonetizationModeUpdateV30Request?: UniProjectMonetizationModeUpdateV30Request;
}

export class UniProjectMonetizationModeUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30UniProjectMonetizationModeUpdatePost(request: OpenApiV30UniProjectMonetizationModeUpdatePostRequest): Promise<UniProjectMonetizationModeUpdateV30Response> {
    const response = await this.openApiV30UniProjectMonetizationModeUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30UniProjectMonetizationModeUpdatePostWithHttpInfo(request: OpenApiV30UniProjectMonetizationModeUpdatePostRequest): Promise<ApiResponse<UniProjectMonetizationModeUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<UniProjectMonetizationModeUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/uni_project/monetization_mode/update/",
      queryParams: [

      ],
      body: request.uniProjectMonetizationModeUpdateV30Request
    });
  }
}


