// Generated from oceanengine/ad_open_sdk_go api/api_cg_transfer_wallet_transfer_detail_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CgTransferWalletTransferDetailV30AccountType, CgTransferWalletTransferDetailV30Response } from "../models/index";


export interface CgTransferWalletTransferDetailV30ApiOpenApiV30CgTransferWalletTransferDetailGetRequest {
  accountId: number | string;
  accountType: CgTransferWalletTransferDetailV30AccountType;
  bizRequestNo: string;
  transferBizRequestNo?: string;
  transferSerial?: string;
}

export class CgTransferWalletTransferDetailV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CgTransferWalletTransferDetailGet(request: CgTransferWalletTransferDetailV30ApiOpenApiV30CgTransferWalletTransferDetailGetRequest): Promise<CgTransferWalletTransferDetailV30Response> {
    const response = await this.openApiV30CgTransferWalletTransferDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30CgTransferWalletTransferDetailGetWithHttpInfo(request: CgTransferWalletTransferDetailV30ApiOpenApiV30CgTransferWalletTransferDetailGetRequest): Promise<ApiResponse<CgTransferWalletTransferDetailV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30CgTransferWalletTransferDetailGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30CgTransferWalletTransferDetailGet");
    }

    if (request.bizRequestNo == null) {
      throw new ApiException("Missing the required parameter 'bizRequestNo' when calling openApiV30CgTransferWalletTransferDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<CgTransferWalletTransferDetailV30Response>({
      method: "GET",
      path: "/open_api/v3.0/cg_transfer/wallet/transfer/detail/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "biz_request_no", value: request.bizRequestNo },
        { name: "transfer_biz_request_no", value: request.transferBizRequestNo },
        { name: "transfer_serial", value: request.transferSerial }
      ]
    });
  }
}


