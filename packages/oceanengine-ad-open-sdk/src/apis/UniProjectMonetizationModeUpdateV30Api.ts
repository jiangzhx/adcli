// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { UniProjectMonetizationModeUpdateV30Request, UniProjectMonetizationModeUpdateV30Response } from "../models";


export class UniProjectMonetizationModeUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30UniProjectMonetizationModeUpdatePost(uniProjectMonetizationModeUpdateV30Request: UniProjectMonetizationModeUpdateV30Request): Promise<UniProjectMonetizationModeUpdateV30Response> {
    const response = await this.openApiV30UniProjectMonetizationModeUpdatePostWithHttpInfo(uniProjectMonetizationModeUpdateV30Request);
    return response.data;
  }

  async openApiV30UniProjectMonetizationModeUpdatePostWithHttpInfo(uniProjectMonetizationModeUpdateV30Request: UniProjectMonetizationModeUpdateV30Request): Promise<ApiResponse<UniProjectMonetizationModeUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<UniProjectMonetizationModeUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/uni_project/monetization_mode/update/",
      queryParams: [

      ],
      body: uniProjectMonetizationModeUpdateV30Request
    });
  }
}


