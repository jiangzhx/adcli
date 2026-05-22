// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DouplusOrderCloseV30Request, DouplusOrderCloseV30Response } from "../models";


export class DouplusOrderCloseV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DouplusOrderClosePost(douplusOrderCloseV30Request: DouplusOrderCloseV30Request): Promise<DouplusOrderCloseV30Response> {
    const response = await this.openApiV30DouplusOrderClosePostWithHttpInfo(douplusOrderCloseV30Request);
    return response.data;
  }

  async openApiV30DouplusOrderClosePostWithHttpInfo(douplusOrderCloseV30Request: DouplusOrderCloseV30Request): Promise<ApiResponse<DouplusOrderCloseV30Response>> {

    return this.apiClient.requestWithHttpInfo<DouplusOrderCloseV30Response>({
      method: "POST",
      path: "/open_api/v3.0/douplus/order/close/",
      queryParams: [

      ],
      body: douplusOrderCloseV30Request
    });
  }
}


