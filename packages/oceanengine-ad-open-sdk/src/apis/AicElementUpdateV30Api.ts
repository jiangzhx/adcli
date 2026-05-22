// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AicElementUpdateV30Request, AicElementUpdateV30Response } from "../models";


export class AicElementUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AicElementUpdatePost(aicElementUpdateV30Request: AicElementUpdateV30Request): Promise<AicElementUpdateV30Response> {
    const response = await this.openApiV30AicElementUpdatePostWithHttpInfo(aicElementUpdateV30Request);
    return response.data;
  }

  async openApiV30AicElementUpdatePostWithHttpInfo(aicElementUpdateV30Request: AicElementUpdateV30Request): Promise<ApiResponse<AicElementUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<AicElementUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/aic/element/update/",
      queryParams: [

      ],
      body: aicElementUpdateV30Request
    });
  }
}


