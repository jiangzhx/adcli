// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CgTransferWalletTransferListV30AccountType, CgTransferWalletTransferListV30PageInfo, CgTransferWalletTransferListV30Response } from "../models";


export interface OpenApiV30CgTransferWalletTransferListGetRequest {
  accountId: number;
  accountType: CgTransferWalletTransferListV30AccountType;
  bizRequestNo: string;
  queryBeginTime: string;
  queryEndTime: string;
  queryWalletIdList: number[];
  pageInfo: CgTransferWalletTransferListV30PageInfo;
  payeeId?: number;
  remitterId?: number;
}

export class CgTransferWalletTransferListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CgTransferWalletTransferListGet(request: OpenApiV30CgTransferWalletTransferListGetRequest): Promise<CgTransferWalletTransferListV30Response> {
    const response = await this.openApiV30CgTransferWalletTransferListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30CgTransferWalletTransferListGetWithHttpInfo(request: OpenApiV30CgTransferWalletTransferListGetRequest): Promise<ApiResponse<CgTransferWalletTransferListV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30CgTransferWalletTransferListGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30CgTransferWalletTransferListGet");
    }

    if (request.bizRequestNo == null) {
      throw new ApiException("Missing the required parameter 'bizRequestNo' when calling openApiV30CgTransferWalletTransferListGet");
    }

    if (request.queryBeginTime == null) {
      throw new ApiException("Missing the required parameter 'queryBeginTime' when calling openApiV30CgTransferWalletTransferListGet");
    }

    if (request.queryEndTime == null) {
      throw new ApiException("Missing the required parameter 'queryEndTime' when calling openApiV30CgTransferWalletTransferListGet");
    }

    if (request.queryWalletIdList == null) {
      throw new ApiException("Missing the required parameter 'queryWalletIdList' when calling openApiV30CgTransferWalletTransferListGet");
    }

    if (request.pageInfo == null) {
      throw new ApiException("Missing the required parameter 'pageInfo' when calling openApiV30CgTransferWalletTransferListGet");
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
        { name: "query_wallet_id_list", value: request.queryWalletIdList, collectionFormat: "csv" },
        { name: "payee_id", value: request.payeeId },
        { name: "remitter_id", value: request.remitterId },
        { name: "page_info", value: request.pageInfo }
      ]
    });
  }
}


