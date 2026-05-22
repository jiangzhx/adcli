// Generated from oceanengine/ad_open_sdk_go api/api_local_charge_submit_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalChargeSubmitV30Request, LocalChargeSubmitV30Response } from "../models/index";


export interface LocalChargeSubmitV30ApiOpenApiV30LocalChargeSubmitPostRequest {
  localChargeSubmitV30Request?: LocalChargeSubmitV30Request;
}

export class LocalChargeSubmitV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalChargeSubmitPost(request: LocalChargeSubmitV30ApiOpenApiV30LocalChargeSubmitPostRequest): Promise<LocalChargeSubmitV30Response> {
    const response = await this.openApiV30LocalChargeSubmitPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalChargeSubmitPostWithHttpInfo(request: LocalChargeSubmitV30ApiOpenApiV30LocalChargeSubmitPostRequest): Promise<ApiResponse<LocalChargeSubmitV30Response>> {

    return this.apiClient.requestWithHttpInfo<LocalChargeSubmitV30Response>({
      method: "POST",
      path: "/open_api/v3.0/local/charge/submit/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.localChargeSubmitV30Request
    });
  }
}


