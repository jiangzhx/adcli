// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CgTransferWalletTransferCreateV30Request, CgTransferWalletTransferCreateV30Response } from "../models";


export interface OpenApiV30CgTransferWalletTransferCreatePostRequest {
  cgTransferWalletTransferCreateV30Request?: CgTransferWalletTransferCreateV30Request;
}

export class CgTransferWalletTransferCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CgTransferWalletTransferCreatePost(request: OpenApiV30CgTransferWalletTransferCreatePostRequest): Promise<CgTransferWalletTransferCreateV30Response> {
    const response = await this.openApiV30CgTransferWalletTransferCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30CgTransferWalletTransferCreatePostWithHttpInfo(request: OpenApiV30CgTransferWalletTransferCreatePostRequest): Promise<ApiResponse<CgTransferWalletTransferCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<CgTransferWalletTransferCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/cg_transfer/wallet/transfer/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.cgTransferWalletTransferCreateV30Request
    });
  }
}


