// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalChargeSubmitV30Request, LocalChargeSubmitV30Response } from "../models";


export class LocalChargeSubmitV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalChargeSubmitPost(request: LocalChargeSubmitV30Request): Promise<LocalChargeSubmitV30Response> {
    const response = await this.openApiV30LocalChargeSubmitPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalChargeSubmitPostWithHttpInfo(request: LocalChargeSubmitV30Request): Promise<ApiResponse<LocalChargeSubmitV30Response>> {
    return this.apiClient.requestWithHttpInfo<LocalChargeSubmitV30Response>({
      method: "POST",
      path: "/open_api/v3.0/local/charge/submit/",
      queryParams: [

      ],
      body: request
    });
  }
}


