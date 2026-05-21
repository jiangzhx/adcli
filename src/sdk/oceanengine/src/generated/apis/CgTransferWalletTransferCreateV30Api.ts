// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { CgTransferWalletTransferCreateV30Request, CgTransferWalletTransferCreateV30Response } from "../models";


export class CgTransferWalletTransferCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CgTransferWalletTransferCreatePost(cgTransferWalletTransferCreateV30Request: CgTransferWalletTransferCreateV30Request): Promise<CgTransferWalletTransferCreateV30Response> {
    const response = await this.openApiV30CgTransferWalletTransferCreatePostWithHttpInfo(cgTransferWalletTransferCreateV30Request);
    return response.data;
  }

  async openApiV30CgTransferWalletTransferCreatePostWithHttpInfo(cgTransferWalletTransferCreateV30Request: CgTransferWalletTransferCreateV30Request): Promise<ApiResponse<CgTransferWalletTransferCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<CgTransferWalletTransferCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/cg_transfer/wallet/transfer/create/",
      queryParams: [

      ],
      body: cgTransferWalletTransferCreateV30Request
    });
  }
}


