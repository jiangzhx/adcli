// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PrepayChargeGenerateFixRemiattanceCodeCreateV30Request, PrepayChargeGenerateFixRemiattanceCodeCreateV30Response } from "../models";


export class PrepayChargeGenerateFixRemiattanceCodeCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PrepayChargeGenerateFixRemiattanceCodeCreatePost(request: PrepayChargeGenerateFixRemiattanceCodeCreateV30Request): Promise<PrepayChargeGenerateFixRemiattanceCodeCreateV30Response> {
    const response = await this.openApiV30PrepayChargeGenerateFixRemiattanceCodeCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30PrepayChargeGenerateFixRemiattanceCodeCreatePostWithHttpInfo(request: PrepayChargeGenerateFixRemiattanceCodeCreateV30Request): Promise<ApiResponse<PrepayChargeGenerateFixRemiattanceCodeCreateV30Response>> {
    return this.apiClient.requestWithHttpInfo<PrepayChargeGenerateFixRemiattanceCodeCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/prepay_charge/generate_fix_remiattance_code/create/",
      queryParams: [

      ],
      body: request
    });
  }
}


