// Generated from oceanengine/ad_open_sdk_go api/api_cg_transfer_wallet_transfer_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CgTransferWalletTransferCreateV30Request, CgTransferWalletTransferCreateV30Response } from "../models/index";


export interface CgTransferWalletTransferCreateV30ApiOpenApiV30CgTransferWalletTransferCreatePostRequest {
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

  async openApiV30CgTransferWalletTransferCreatePost(request: CgTransferWalletTransferCreateV30ApiOpenApiV30CgTransferWalletTransferCreatePostRequest): Promise<CgTransferWalletTransferCreateV30Response> {
    const response = await this.openApiV30CgTransferWalletTransferCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30CgTransferWalletTransferCreatePostWithHttpInfo(request: CgTransferWalletTransferCreateV30ApiOpenApiV30CgTransferWalletTransferCreatePostRequest): Promise<ApiResponse<CgTransferWalletTransferCreateV30Response>> {

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


