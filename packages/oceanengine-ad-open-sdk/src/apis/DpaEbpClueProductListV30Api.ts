// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaEbpClueProductListV30AccountType, DpaEbpClueProductListV30AssetQueryScope, DpaEbpClueProductListV30AuditStatus, DpaEbpClueProductListV30Response, DpaEbpClueProductListV30Statuses } from "../models";


export class DpaEbpClueProductListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaEbpClueProductListGet(accountId: number, accountType: DpaEbpClueProductListV30AccountType, offset: number, limit: number, productIds: number[], productName: string, auditStatus: DpaEbpClueProductListV30AuditStatus[], categoryIds: number[], productIdOrNameSearch: string, statuses: DpaEbpClueProductListV30Statuses[], assetQueryScope: DpaEbpClueProductListV30AssetQueryScope): Promise<DpaEbpClueProductListV30Response> {
    const response = await this.openApiV30DpaEbpClueProductListGetWithHttpInfo(accountId, accountType, offset, limit, productIds, productName, auditStatus, categoryIds, productIdOrNameSearch, statuses, assetQueryScope);
    return response.data;
  }

  async openApiV30DpaEbpClueProductListGetWithHttpInfo(accountId: number, accountType: DpaEbpClueProductListV30AccountType, offset: number, limit: number, productIds: number[], productName: string, auditStatus: DpaEbpClueProductListV30AuditStatus[], categoryIds: number[], productIdOrNameSearch: string, statuses: DpaEbpClueProductListV30Statuses[], assetQueryScope: DpaEbpClueProductListV30AssetQueryScope): Promise<ApiResponse<DpaEbpClueProductListV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30DpaEbpClueProductListGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30DpaEbpClueProductListGet");
    }

    if (offset == null) {
      throw new ApiException("Missing the required parameter 'offset' when calling openApiV30DpaEbpClueProductListGet");
    }

    if (limit == null) {
      throw new ApiException("Missing the required parameter 'limit' when calling openApiV30DpaEbpClueProductListGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaEbpClueProductListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/dpa/ebp/clue_product/list/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "product_name", value: productName },
        { name: "product_id_or_name_search", value: productIdOrNameSearch },
        { name: "asset_query_scope", value: assetQueryScope },
        { name: "offset", value: offset },
        { name: "limit", value: limit },
        { name: "product_ids", value: productIds, collectionFormat: "csv" },
        { name: "audit_status", value: auditStatus, collectionFormat: "csv" },
        { name: "category_ids", value: categoryIds, collectionFormat: "csv" },
        { name: "statuses", value: statuses, collectionFormat: "csv" }
      ]
    });
  }
}


