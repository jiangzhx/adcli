// Generated from oceanengine/ad_open_sdk_go api/api_uni_project_monetization_mode_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { UniProjectMonetizationModeUpdateV30Request, UniProjectMonetizationModeUpdateV30Response } from "../models/index";


export interface UniProjectMonetizationModeUpdateV30ApiOpenApiV30UniProjectMonetizationModeUpdatePostRequest {
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

  async openApiV30UniProjectMonetizationModeUpdatePost(request: UniProjectMonetizationModeUpdateV30ApiOpenApiV30UniProjectMonetizationModeUpdatePostRequest): Promise<UniProjectMonetizationModeUpdateV30Response> {
    const response = await this.openApiV30UniProjectMonetizationModeUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30UniProjectMonetizationModeUpdatePostWithHttpInfo(request: UniProjectMonetizationModeUpdateV30ApiOpenApiV30UniProjectMonetizationModeUpdatePostRequest): Promise<ApiResponse<UniProjectMonetizationModeUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<UniProjectMonetizationModeUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/uni_project/monetization_mode/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.uniProjectMonetizationModeUpdateV30Request
    });
  }
}


