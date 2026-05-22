// Generated from oceanengine/ad_open_sdk_go api/api_dcd_charge_submit_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DcdChargeSubmitV30Request, DcdChargeSubmitV30Response } from "../models/index";


export interface DcdChargeSubmitV30ApiOpenApiV30DcdChargeSubmitPostRequest {
  dcdChargeSubmitV30Request?: DcdChargeSubmitV30Request;
}

export class DcdChargeSubmitV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DcdChargeSubmitPost(request: DcdChargeSubmitV30ApiOpenApiV30DcdChargeSubmitPostRequest): Promise<DcdChargeSubmitV30Response> {
    const response = await this.openApiV30DcdChargeSubmitPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DcdChargeSubmitPostWithHttpInfo(request: DcdChargeSubmitV30ApiOpenApiV30DcdChargeSubmitPostRequest): Promise<ApiResponse<DcdChargeSubmitV30Response>> {

    return this.apiClient.requestWithHttpInfo<DcdChargeSubmitV30Response>({
      method: "POST",
      path: "/open_api/v3.0/dcd/charge/submit/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.dcdChargeSubmitV30Request
    });
  }
}


