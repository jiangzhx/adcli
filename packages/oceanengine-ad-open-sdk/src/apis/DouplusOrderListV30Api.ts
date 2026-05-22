// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DouplusOrderListV30Filter, DouplusOrderListV30OrderByField, DouplusOrderListV30OrderByType, DouplusOrderListV30Response } from "../models";


export interface OpenApiV30DouplusOrderListGetRequest {
  awemeSecUid?: string;
  filter?: DouplusOrderListV30Filter;
  pageSize?: number;
  page?: number;
  orderByField?: DouplusOrderListV30OrderByField;
  orderByType?: DouplusOrderListV30OrderByType;
}

export class DouplusOrderListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DouplusOrderListGet(request: OpenApiV30DouplusOrderListGetRequest): Promise<DouplusOrderListV30Response> {
    const response = await this.openApiV30DouplusOrderListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DouplusOrderListGetWithHttpInfo(request: OpenApiV30DouplusOrderListGetRequest): Promise<ApiResponse<DouplusOrderListV30Response>> {

    return this.apiClient.requestWithHttpInfo<DouplusOrderListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/douplus/order/list/",
      queryParams: [
        { name: "aweme_sec_uid", value: request.awemeSecUid },
        { name: "filter", value: request.filter },
        { name: "page_size", value: request.pageSize },
        { name: "page", value: request.page },
        { name: "order_by_field", value: request.orderByField },
        { name: "order_by_type", value: request.orderByType }
      ]
    });
  }
}


