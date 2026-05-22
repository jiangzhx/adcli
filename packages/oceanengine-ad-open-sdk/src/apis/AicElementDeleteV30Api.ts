// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AicElementDeleteV30Request, AicElementDeleteV30Response } from "../models";


export class AicElementDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AicElementDeletePost(aicElementDeleteV30Request: AicElementDeleteV30Request): Promise<AicElementDeleteV30Response> {
    const response = await this.openApiV30AicElementDeletePostWithHttpInfo(aicElementDeleteV30Request);
    return response.data;
  }

  async openApiV30AicElementDeletePostWithHttpInfo(aicElementDeleteV30Request: AicElementDeleteV30Request): Promise<ApiResponse<AicElementDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<AicElementDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/aic/element/delete/",
      queryParams: [

      ],
      body: aicElementDeleteV30Request
    });
  }
}


