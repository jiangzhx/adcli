// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { UniProjectUpdateV30Request, UniProjectUpdateV30Response } from "../models";


export class UniProjectUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30UniProjectUpdatePost(uniProjectUpdateV30Request: UniProjectUpdateV30Request): Promise<UniProjectUpdateV30Response> {
    const response = await this.openApiV30UniProjectUpdatePostWithHttpInfo(uniProjectUpdateV30Request);
    return response.data;
  }

  async openApiV30UniProjectUpdatePostWithHttpInfo(uniProjectUpdateV30Request: UniProjectUpdateV30Request): Promise<ApiResponse<UniProjectUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<UniProjectUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/uni_project/update/",
      queryParams: [

      ],
      body: uniProjectUpdateV30Request
    });
  }
}


