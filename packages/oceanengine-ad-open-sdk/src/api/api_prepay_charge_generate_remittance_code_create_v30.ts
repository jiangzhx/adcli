// Generated from oceanengine/ad_open_sdk_go api/api_prepay_charge_generate_remittance_code_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { PrepayChargeGenerateRemittanceCodeCreateV30Request, PrepayChargeGenerateRemittanceCodeCreateV30Response } from "../models/index";


export interface PrepayChargeGenerateRemittanceCodeCreateV30ApiOpenApiV30PrepayChargeGenerateRemittanceCodeCreatePostRequest {
  prepayChargeGenerateRemittanceCodeCreateV30Request?: PrepayChargeGenerateRemittanceCodeCreateV30Request;
}

export class PrepayChargeGenerateRemittanceCodeCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PrepayChargeGenerateRemittanceCodeCreatePost(request: PrepayChargeGenerateRemittanceCodeCreateV30ApiOpenApiV30PrepayChargeGenerateRemittanceCodeCreatePostRequest): Promise<PrepayChargeGenerateRemittanceCodeCreateV30Response> {
    const response = await this.openApiV30PrepayChargeGenerateRemittanceCodeCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30PrepayChargeGenerateRemittanceCodeCreatePostWithHttpInfo(request: PrepayChargeGenerateRemittanceCodeCreateV30ApiOpenApiV30PrepayChargeGenerateRemittanceCodeCreatePostRequest): Promise<ApiResponse<PrepayChargeGenerateRemittanceCodeCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<PrepayChargeGenerateRemittanceCodeCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/prepay_charge/generate_remittance_code/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.prepayChargeGenerateRemittanceCodeCreateV30Request
    });
  }
}


