// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { DouplusOrderListV30Filter, DouplusOrderListV30OrderByField, DouplusOrderListV30OrderByType, DouplusOrderListV30Response } from "../models";


export class DouplusOrderListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DouplusOrderListGet(awemeSecUid: string, filter: DouplusOrderListV30Filter, pageSize: number, page: number, orderByField: DouplusOrderListV30OrderByField, orderByType: DouplusOrderListV30OrderByType): Promise<DouplusOrderListV30Response> {
    const response = await this.openApiV30DouplusOrderListGetWithHttpInfo(awemeSecUid, filter, pageSize, page, orderByField, orderByType);
    return response.data;
  }

  async openApiV30DouplusOrderListGetWithHttpInfo(awemeSecUid: string, filter: DouplusOrderListV30Filter, pageSize: number, page: number, orderByField: DouplusOrderListV30OrderByField, orderByType: DouplusOrderListV30OrderByType): Promise<ApiResponse<DouplusOrderListV30Response>> {

    return this.apiClient.requestWithHttpInfo<DouplusOrderListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/douplus/order/list/",
      queryParams: [
        { name: "aweme_sec_uid", value: awemeSecUid },
        { name: "filter", value: filter },
        { name: "page_size", value: pageSize },
        { name: "page", value: page },
        { name: "order_by_field", value: orderByField },
        { name: "order_by_type", value: orderByType }
      ]
    });
  }
}


