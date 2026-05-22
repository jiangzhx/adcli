// Generated from oceanengine/ad_open_sdk_go api/api_aic_material_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AicMaterialGetV30AccountType, AicMaterialGetV30Filtering, AicMaterialGetV30OrderField, AicMaterialGetV30OrderType, AicMaterialGetV30Response } from "../models/index";


export interface AicMaterialGetV30ApiOpenApiV30AicMaterialGetGetRequest {
  accountId: number | string;
  accountType: AicMaterialGetV30AccountType;
  filtering?: AicMaterialGetV30Filtering;
  page?: number;
  pageSize?: number;
  orderField?: AicMaterialGetV30OrderField;
  orderType?: AicMaterialGetV30OrderType;
}

export class AicMaterialGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AicMaterialGetGet(request: AicMaterialGetV30ApiOpenApiV30AicMaterialGetGetRequest): Promise<AicMaterialGetV30Response> {
    const response = await this.openApiV30AicMaterialGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AicMaterialGetGetWithHttpInfo(request: AicMaterialGetV30ApiOpenApiV30AicMaterialGetGetRequest): Promise<ApiResponse<AicMaterialGetV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("accountId is required and must be specified");
    }

    if (request.accountType == null) {
      throw new ApiException("accountType is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<AicMaterialGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/aic/material/get/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "order_field", value: request.orderField },
        { name: "order_type", value: request.orderType }
      ]
    });
  }
}


