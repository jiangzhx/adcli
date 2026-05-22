// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_agency_wallet_list.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AgencyWalletListGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface AgencyWalletListApiGetRequest {
  accountId: number | string;
  page: number;
  pageSize: number;
  mdmId?: number | string;
  walletId?: number | string;
  fields?: unknown;
}


export class AgencyWalletListApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: AgencyWalletListApiGetRequest): Promise<AgencyWalletListGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: AgencyWalletListApiGetRequest): Promise<ApiResponse<AgencyWalletListGetResponseData>> {
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
      basePath: TencentAdsV30Configuration.basePath,
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


