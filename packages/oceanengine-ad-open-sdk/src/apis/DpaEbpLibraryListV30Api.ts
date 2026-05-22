// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaEbpLibraryListV30AccountType, DpaEbpLibraryListV30AssetQueryScope, DpaEbpLibraryListV30Response } from "../models";


export class DpaEbpLibraryListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaEbpLibraryListGet(accountId: number, accountType: DpaEbpLibraryListV30AccountType, storeType: number, nameOrId: string, offset: number, limit: number, assetQueryScope: DpaEbpLibraryListV30AssetQueryScope): Promise<DpaEbpLibraryListV30Response> {
    const response = await this.openApiV30DpaEbpLibraryListGetWithHttpInfo(accountId, accountType, storeType, nameOrId, offset, limit, assetQueryScope);
    return response.data;
  }

  async openApiV30DpaEbpLibraryListGetWithHttpInfo(accountId: number, accountType: DpaEbpLibraryListV30AccountType, storeType: number, nameOrId: string, offset: number, limit: number, assetQueryScope: DpaEbpLibraryListV30AssetQueryScope): Promise<ApiResponse<DpaEbpLibraryListV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30DpaEbpLibraryListGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30DpaEbpLibraryListGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaEbpLibraryListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/dpa/ebp/library/list/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "store_type", value: storeType },
        { name: "name_or_id", value: nameOrId },
        { name: "offset", value: offset },
        { name: "limit", value: limit },
        { name: "asset_query_scope", value: assetQueryScope }
      ]
    });
  }
}


