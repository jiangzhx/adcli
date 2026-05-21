// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { UniProjectCreateV30Request, UniProjectCreateV30Response } from "../models";


export class UniProjectCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30UniProjectCreatePost(uniProjectCreateV30Request: UniProjectCreateV30Request): Promise<UniProjectCreateV30Response> {
    const response = await this.openApiV30UniProjectCreatePostWithHttpInfo(uniProjectCreateV30Request);
    return response.data;
  }

  async openApiV30UniProjectCreatePostWithHttpInfo(uniProjectCreateV30Request: UniProjectCreateV30Request): Promise<ApiResponse<UniProjectCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<UniProjectCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/uni_project/create/",
      queryParams: [

      ],
      body: uniProjectCreateV30Request
    });
  }
}


