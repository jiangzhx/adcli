// Generated from oceanengine/ad_open_sdk_go api/api_dpa_ebp_clue_product_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DpaEbpClueProductListV30AccountType, DpaEbpClueProductListV30AssetQueryScope, DpaEbpClueProductListV30AuditStatus, DpaEbpClueProductListV30Response, DpaEbpClueProductListV30Statuses } from "../models/index";


export interface DpaEbpClueProductListV30ApiOpenApiV30DpaEbpClueProductListGetRequest {
  accountId: number | string;
  accountType: DpaEbpClueProductListV30AccountType;
  offset: number;
  limit: number;
  productIds?: number | string[];
  productName?: string;
  auditStatus?: DpaEbpClueProductListV30AuditStatus[];
  categoryIds?: number | string[];
  productIdOrNameSearch?: string;
  statuses?: DpaEbpClueProductListV30Statuses[];
  assetQueryScope?: DpaEbpClueProductListV30AssetQueryScope;
}

export class DpaEbpClueProductListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaEbpClueProductListGet(request: DpaEbpClueProductListV30ApiOpenApiV30DpaEbpClueProductListGetRequest): Promise<DpaEbpClueProductListV30Response> {
    const response = await this.openApiV30DpaEbpClueProductListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DpaEbpClueProductListGetWithHttpInfo(request: DpaEbpClueProductListV30ApiOpenApiV30DpaEbpClueProductListGetRequest): Promise<ApiResponse<DpaEbpClueProductListV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30DpaEbpClueProductListGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30DpaEbpClueProductListGet");
    }

    if (request.offset == null) {
      throw new ApiException("Missing the required parameter 'offset' when calling openApiV30DpaEbpClueProductListGet");
    }

    if (request.limit == null) {
      throw new ApiException("Missing the required parameter 'limit' when calling openApiV30DpaEbpClueProductListGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaEbpClueProductListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/dpa/ebp/clue_product/list/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "product_ids", value: request.productIds, collectionFormat: "csv" },
        { name: "product_name", value: request.productName },
        { name: "audit_status", value: request.auditStatus, collectionFormat: "csv" },
        { name: "category_ids", value: request.categoryIds, collectionFormat: "csv" },
        { name: "product_id_or_name_search", value: request.productIdOrNameSearch },
        { name: "statuses", value: request.statuses, collectionFormat: "csv" },
        { name: "asset_query_scope", value: request.assetQueryScope },
        { name: "offset", value: request.offset },
        { name: "limit", value: request.limit }
      ]
    });
  }
}


