// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WalletRemittanceCodeListGetV30ChargeTargetType, WalletRemittanceCodeListGetV30Response } from "../models";


export class WalletRemittanceCodeListGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30WalletRemittanceCodeListGetGet(accountId: number, chargeTargetId: number, chargeTargetType: WalletRemittanceCodeListGetV30ChargeTargetType, remittanceCodeList: string[], page: number, pageSize: number): Promise<WalletRemittanceCodeListGetV30Response> {
    const response = await this.openApiV30WalletRemittanceCodeListGetGetWithHttpInfo(accountId, chargeTargetId, chargeTargetType, remittanceCodeList, page, pageSize);
    return response.data;
  }

  async openApiV30WalletRemittanceCodeListGetGetWithHttpInfo(accountId: number, chargeTargetId: number, chargeTargetType: WalletRemittanceCodeListGetV30ChargeTargetType, remittanceCodeList: string[], page: number, pageSize: number): Promise<ApiResponse<WalletRemittanceCodeListGetV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30WalletRemittanceCodeListGetGet");
    }

    if (chargeTargetId == null) {
      throw new ApiException("Missing the required parameter 'chargeTargetId' when calling openApiV30WalletRemittanceCodeListGetGet");
    }

    if (chargeTargetType == null) {
      throw new ApiException("Missing the required parameter 'chargeTargetType' when calling openApiV30WalletRemittanceCodeListGetGet");
    }

    if (remittanceCodeList == null) {
      throw new ApiException("Missing the required parameter 'remittanceCodeList' when calling openApiV30WalletRemittanceCodeListGetGet");
    }
    return this.apiClient.requestWithHttpInfo<WalletRemittanceCodeListGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/wallet/remittance_code/list/get/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "charge_target_id", value: chargeTargetId },
        { name: "charge_target_type", value: chargeTargetType },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "remittance_code_list", value: remittanceCodeList, collectionFormat: "csv" }
      ]
    });
  }
}


