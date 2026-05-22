// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AgencyWalletListGetResponseData } from "../models";

export interface V3AgencyWalletListApiGetRequest {
  accountId: number | string;
  page: number;
  pageSize: number;
  mdmId?: number | string;
  walletId?: number | string;
  fields?: unknown;
}


export class V3AgencyWalletListApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3AgencyWalletListApiGetRequest): Promise<AgencyWalletListGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3AgencyWalletListApiGetRequest): Promise<ApiResponse<AgencyWalletListGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling get");
    }

    if (request.pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AgencyWalletListGetResponseData>({
      method: "GET",
      path: "/agency_wallet_list/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "mdm_id", value: request.mdmId },
        { name: "wallet_id", value: request.walletId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


