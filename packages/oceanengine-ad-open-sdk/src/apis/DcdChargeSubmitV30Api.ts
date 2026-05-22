// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DcdChargeSubmitV30Request, DcdChargeSubmitV30Response } from "../models";


export class DcdChargeSubmitV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DcdChargeSubmitPost(request: DcdChargeSubmitV30Request): Promise<DcdChargeSubmitV30Response> {
    const response = await this.openApiV30DcdChargeSubmitPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DcdChargeSubmitPostWithHttpInfo(request: DcdChargeSubmitV30Request): Promise<ApiResponse<DcdChargeSubmitV30Response>> {
    return this.apiClient.requestWithHttpInfo<DcdChargeSubmitV30Response>({
      method: "POST",
      path: "/open_api/v3.0/dcd/charge/submit/",
      queryParams: [

      ],
      body: request
    });
  }
}


