// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WalletRemittanceCodeListGetV30ChargeTargetType, WalletRemittanceCodeListGetV30Response } from "../models";


export interface OpenApiV30WalletRemittanceCodeListGetGetRequest {
  accountId: number | string;
  chargeTargetId: number | string;
  chargeTargetType: WalletRemittanceCodeListGetV30ChargeTargetType;
  remittanceCodeList: string[];
  page?: number;
  pageSize?: number;
}

export class WalletRemittanceCodeListGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30WalletRemittanceCodeListGetGet(request: OpenApiV30WalletRemittanceCodeListGetGetRequest): Promise<WalletRemittanceCodeListGetV30Response> {
    const response = await this.openApiV30WalletRemittanceCodeListGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30WalletRemittanceCodeListGetGetWithHttpInfo(request: OpenApiV30WalletRemittanceCodeListGetGetRequest): Promise<ApiResponse<WalletRemittanceCodeListGetV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30WalletRemittanceCodeListGetGet");
    }

    if (request.chargeTargetId == null) {
      throw new ApiException("Missing the required parameter 'chargeTargetId' when calling openApiV30WalletRemittanceCodeListGetGet");
    }

    if (request.chargeTargetType == null) {
      throw new ApiException("Missing the required parameter 'chargeTargetType' when calling openApiV30WalletRemittanceCodeListGetGet");
    }

    if (request.remittanceCodeList == null) {
      throw new ApiException("Missing the required parameter 'remittanceCodeList' when calling openApiV30WalletRemittanceCodeListGetGet");
    }
    return this.apiClient.requestWithHttpInfo<WalletRemittanceCodeListGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/wallet/remittance_code/list/get/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "charge_target_id", value: request.chargeTargetId },
        { name: "charge_target_type", value: request.chargeTargetType },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "remittance_code_list", value: request.remittanceCodeList, collectionFormat: "csv" }
      ]
    });
  }
}


