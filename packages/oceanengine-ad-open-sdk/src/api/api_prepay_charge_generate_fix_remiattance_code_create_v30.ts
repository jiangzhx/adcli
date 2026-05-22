// Generated from oceanengine/ad_open_sdk_go api/api_prepay_charge_generate_fix_remiattance_code_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { PrepayChargeGenerateFixRemiattanceCodeCreateV30Request, PrepayChargeGenerateFixRemiattanceCodeCreateV30Response } from "../models/index";


export interface PrepayChargeGenerateFixRemiattanceCodeCreateV30ApiOpenApiV30PrepayChargeGenerateFixRemiattanceCodeCreatePostRequest {
  prepayChargeGenerateFixRemiattanceCodeCreateV30Request?: PrepayChargeGenerateFixRemiattanceCodeCreateV30Request;
}

export class PrepayChargeGenerateFixRemiattanceCodeCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PrepayChargeGenerateFixRemiattanceCodeCreatePost(request: PrepayChargeGenerateFixRemiattanceCodeCreateV30ApiOpenApiV30PrepayChargeGenerateFixRemiattanceCodeCreatePostRequest): Promise<PrepayChargeGenerateFixRemiattanceCodeCreateV30Response> {
    const response = await this.openApiV30PrepayChargeGenerateFixRemiattanceCodeCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30PrepayChargeGenerateFixRemiattanceCodeCreatePostWithHttpInfo(request: PrepayChargeGenerateFixRemiattanceCodeCreateV30ApiOpenApiV30PrepayChargeGenerateFixRemiattanceCodeCreatePostRequest): Promise<ApiResponse<PrepayChargeGenerateFixRemiattanceCodeCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<PrepayChargeGenerateFixRemiattanceCodeCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/prepay_charge/generate_fix_remiattance_code/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.prepayChargeGenerateFixRemiattanceCodeCreateV30Request
    });
  }
}


