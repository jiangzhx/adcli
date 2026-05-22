// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WalletPrepayChargeGenerateRemittanceCodeCreateV30Request, WalletPrepayChargeGenerateRemittanceCodeCreateV30Response } from "../models";


export interface OpenApiV30WalletPrepayChargeGenerateRemittanceCodeCreatePostRequest {
  walletPrepayChargeGenerateRemittanceCodeCreateV30Request?: WalletPrepayChargeGenerateRemittanceCodeCreateV30Request;
}

export class WalletPrepayChargeGenerateRemittanceCodeCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30WalletPrepayChargeGenerateRemittanceCodeCreatePost(request: OpenApiV30WalletPrepayChargeGenerateRemittanceCodeCreatePostRequest): Promise<WalletPrepayChargeGenerateRemittanceCodeCreateV30Response> {
    const response = await this.openApiV30WalletPrepayChargeGenerateRemittanceCodeCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30WalletPrepayChargeGenerateRemittanceCodeCreatePostWithHttpInfo(request: OpenApiV30WalletPrepayChargeGenerateRemittanceCodeCreatePostRequest): Promise<ApiResponse<WalletPrepayChargeGenerateRemittanceCodeCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<WalletPrepayChargeGenerateRemittanceCodeCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/wallet/prepay_charge/generate_remittance_code/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.walletPrepayChargeGenerateRemittanceCodeCreateV30Request
    });
  }
}


