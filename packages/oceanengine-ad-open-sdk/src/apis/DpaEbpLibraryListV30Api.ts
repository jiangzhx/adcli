// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaEbpLibraryListV30AccountType, DpaEbpLibraryListV30AssetQueryScope, DpaEbpLibraryListV30Response } from "../models";


export interface OpenApiV30DpaEbpLibraryListGetRequest {
  accountId: number;
  accountType: DpaEbpLibraryListV30AccountType;
  storeType?: number;
  nameOrId?: string;
  offset?: number;
  limit?: number;
  assetQueryScope?: DpaEbpLibraryListV30AssetQueryScope;
}

export class DpaEbpLibraryListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaEbpLibraryListGet(request: OpenApiV30DpaEbpLibraryListGetRequest): Promise<DpaEbpLibraryListV30Response> {
    const response = await this.openApiV30DpaEbpLibraryListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DpaEbpLibraryListGetWithHttpInfo(request: OpenApiV30DpaEbpLibraryListGetRequest): Promise<ApiResponse<DpaEbpLibraryListV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30DpaEbpLibraryListGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30DpaEbpLibraryListGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaEbpLibraryListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/dpa/ebp/library/list/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "store_type", value: request.storeType },
        { name: "name_or_id", value: request.nameOrId },
        { name: "offset", value: request.offset },
        { name: "limit", value: request.limit },
        { name: "asset_query_scope", value: request.assetQueryScope }
      ]
    });
  }
}


