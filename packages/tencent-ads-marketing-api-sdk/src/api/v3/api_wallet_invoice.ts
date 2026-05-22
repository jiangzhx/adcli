// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_wallet_invoice.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { WalletDateRangeTransaction, WalletInvoiceGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface WalletInvoiceApiGetRequest {
  accountId: number | string;
  walletIdList: string;
  dateRange: WalletDateRangeTransaction;
  fundType?: string;
  page?: number;
  pageSize?: number;
  primaryKey?: string;
  fields?: unknown;
}


export class WalletInvoiceApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: WalletInvoiceApiGetRequest): Promise<WalletInvoiceGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: WalletInvoiceApiGetRequest): Promise<ApiResponse<WalletInvoiceGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.walletIdList == null) {
      throw new ApiException("Missing the required parameter 'walletIdList' when calling get");
    }

    if (request.dateRange == null) {
      throw new ApiException("Missing the required parameter 'dateRange' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<WalletInvoiceGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/wallet_invoice/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "wallet_id_list", value: request.walletIdList },
        { name: "fund_type", value: request.fundType },
        { name: "date_range", value: request.dateRange },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "primary_key", value: request.primaryKey },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


