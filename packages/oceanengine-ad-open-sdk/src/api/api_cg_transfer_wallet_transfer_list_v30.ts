// Generated from oceanengine/ad_open_sdk_go api/api_cg_transfer_wallet_transfer_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CgTransferWalletTransferListV30AccountType, CgTransferWalletTransferListV30PageInfo, CgTransferWalletTransferListV30Response } from "../models/index";


export interface CgTransferWalletTransferListV30ApiOpenApiV30CgTransferWalletTransferListGetRequest {
  accountId: number | string;
  accountType: CgTransferWalletTransferListV30AccountType;
  bizRequestNo: string;
  queryBeginTime: string;
  queryEndTime: string;
  queryWalletIdList: number[];
  pageInfo: CgTransferWalletTransferListV30PageInfo;
  payeeId?: number | string;
  remitterId?: number | string;
}

export class CgTransferWalletTransferListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CgTransferWalletTransferListGet(request: CgTransferWalletTransferListV30ApiOpenApiV30CgTransferWalletTransferListGetRequest): Promise<CgTransferWalletTransferListV30Response> {
    const response = await this.openApiV30CgTransferWalletTransferListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30CgTransferWalletTransferListGetWithHttpInfo(request: CgTransferWalletTransferListV30ApiOpenApiV30CgTransferWalletTransferListGetRequest): Promise<ApiResponse<CgTransferWalletTransferListV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("accountId is required and must be specified");
    }

    if (request.accountType == null) {
      throw new ApiException("accountType is required and must be specified");
    }

    if (request.bizRequestNo == null) {
      throw new ApiException("bizRequestNo is required and must be specified");
    }

    if (request.queryBeginTime == null) {
      throw new ApiException("queryBeginTime is required and must be specified");
    }

    if (request.queryEndTime == null) {
      throw new ApiException("queryEndTime is required and must be specified");
    }

    if (request.queryWalletIdList == null) {
      throw new ApiException("queryWalletIdList is required and must be specified");
    }

    if (request.pageInfo == null) {
      throw new ApiException("pageInfo is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<CgTransferWalletTransferListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/cg_transfer/wallet/transfer/list/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "biz_request_no", value: request.bizRequestNo },
        { name: "query_begin_time", value: request.queryBeginTime },
        { name: "query_end_time", value: request.queryEndTime },
        { name: "query_wallet_id_list", value: request.queryWalletIdList },
        { name: "payee_id", value: request.payeeId },
        { name: "remitter_id", value: request.remitterId },
        { name: "page_info", value: request.pageInfo }
      ]
    });
  }
}


