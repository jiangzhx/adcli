// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PrepayChargeGenerateRemittanceCodeCreateV30Request, PrepayChargeGenerateRemittanceCodeCreateV30Response } from "../models";


export class PrepayChargeGenerateRemittanceCodeCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PrepayChargeGenerateRemittanceCodeCreatePost(prepayChargeGenerateRemittanceCodeCreateV30Request: PrepayChargeGenerateRemittanceCodeCreateV30Request): Promise<PrepayChargeGenerateRemittanceCodeCreateV30Response> {
    const response = await this.openApiV30PrepayChargeGenerateRemittanceCodeCreatePostWithHttpInfo(prepayChargeGenerateRemittanceCodeCreateV30Request);
    return response.data;
  }

  async openApiV30PrepayChargeGenerateRemittanceCodeCreatePostWithHttpInfo(prepayChargeGenerateRemittanceCodeCreateV30Request: PrepayChargeGenerateRemittanceCodeCreateV30Request): Promise<ApiResponse<PrepayChargeGenerateRemittanceCodeCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<PrepayChargeGenerateRemittanceCodeCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/prepay_charge/generate_remittance_code/create/",
      queryParams: [

      ],
      body: prepayChargeGenerateRemittanceCodeCreateV30Request
    });
  }
}


