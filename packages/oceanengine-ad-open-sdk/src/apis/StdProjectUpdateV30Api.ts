// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StdProjectUpdateV30Request, StdProjectUpdateV30Response } from "../models";


export class StdProjectUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30StdProjectUpdatePost(stdProjectUpdateV30Request: StdProjectUpdateV30Request): Promise<StdProjectUpdateV30Response> {
    const response = await this.openApiV30StdProjectUpdatePostWithHttpInfo(stdProjectUpdateV30Request);
    return response.data;
  }

  async openApiV30StdProjectUpdatePostWithHttpInfo(stdProjectUpdateV30Request: StdProjectUpdateV30Request): Promise<ApiResponse<StdProjectUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<StdProjectUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/std_project/update/",
      queryParams: [

      ],
      body: stdProjectUpdateV30Request
    });
  }
}


