// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StdProjectCreateV30Request, StdProjectCreateV30Response } from "../models";


export class StdProjectCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30StdProjectCreatePost(stdProjectCreateV30Request: StdProjectCreateV30Request): Promise<StdProjectCreateV30Response> {
    const response = await this.openApiV30StdProjectCreatePostWithHttpInfo(stdProjectCreateV30Request);
    return response.data;
  }

  async openApiV30StdProjectCreatePostWithHttpInfo(stdProjectCreateV30Request: StdProjectCreateV30Request): Promise<ApiResponse<StdProjectCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<StdProjectCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/std_project/create/",
      queryParams: [

      ],
      body: stdProjectCreateV30Request
    });
  }
}


