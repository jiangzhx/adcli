// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { CgTransferWalletTransferListV30AccountType, CgTransferWalletTransferListV30PageInfo, CgTransferWalletTransferListV30Response } from "../models";


export class CgTransferWalletTransferListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CgTransferWalletTransferListGet(accountId: number, accountType: CgTransferWalletTransferListV30AccountType, bizRequestNo: string, queryBeginTime: string, queryEndTime: string, queryWalletIdList: number[], pageInfo: CgTransferWalletTransferListV30PageInfo, payeeId: number, remitterId: number): Promise<CgTransferWalletTransferListV30Response> {
    const response = await this.openApiV30CgTransferWalletTransferListGetWithHttpInfo(accountId, accountType, bizRequestNo, queryBeginTime, queryEndTime, queryWalletIdList, pageInfo, payeeId, remitterId);
    return response.data;
  }

  async openApiV30CgTransferWalletTransferListGetWithHttpInfo(accountId: number, accountType: CgTransferWalletTransferListV30AccountType, bizRequestNo: string, queryBeginTime: string, queryEndTime: string, queryWalletIdList: number[], pageInfo: CgTransferWalletTransferListV30PageInfo, payeeId: number, remitterId: number): Promise<ApiResponse<CgTransferWalletTransferListV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30CgTransferWalletTransferListGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30CgTransferWalletTransferListGet");
    }

    if (bizRequestNo == null) {
      throw new ApiException("Missing the required parameter 'bizRequestNo' when calling openApiV30CgTransferWalletTransferListGet");
    }

    if (queryBeginTime == null) {
      throw new ApiException("Missing the required parameter 'queryBeginTime' when calling openApiV30CgTransferWalletTransferListGet");
    }

    if (queryEndTime == null) {
      throw new ApiException("Missing the required parameter 'queryEndTime' when calling openApiV30CgTransferWalletTransferListGet");
    }

    if (queryWalletIdList == null) {
      throw new ApiException("Missing the required parameter 'queryWalletIdList' when calling openApiV30CgTransferWalletTransferListGet");
    }

    if (pageInfo == null) {
      throw new ApiException("Missing the required parameter 'pageInfo' when calling openApiV30CgTransferWalletTransferListGet");
    }
    return this.apiClient.requestWithHttpInfo<CgTransferWalletTransferListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/cg_transfer/wallet/transfer/list/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "biz_request_no", value: bizRequestNo },
        { name: "query_begin_time", value: queryBeginTime },
        { name: "query_end_time", value: queryEndTime },
        { name: "payee_id", value: payeeId },
        { name: "remitter_id", value: remitterId },
        { name: "page_info", value: pageInfo },
        { name: "query_wallet_id_list", value: queryWalletIdList, collectionFormat: "csv" }
      ]
    });
  }
}


