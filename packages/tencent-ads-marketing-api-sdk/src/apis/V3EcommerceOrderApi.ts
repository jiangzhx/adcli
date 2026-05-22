// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DateRange, EcommerceOrderGetResponseData, EcommerceOrderUpdateRequest } from "../models";

export interface V3EcommerceOrderApiGetRequest {
  accountId: number | string;
  dateRange: DateRange;
  filtering?: unknown;
  date?: string;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}

export interface V3EcommerceOrderApiUpdateRequest {
  data: EcommerceOrderUpdateRequest;
}


export class V3EcommerceOrderApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3EcommerceOrderApiGetRequest): Promise<EcommerceOrderGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3EcommerceOrderApiGetRequest): Promise<ApiResponse<EcommerceOrderGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.dateRange == null) {
      throw new ApiException("Missing the required parameter 'dateRange' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<EcommerceOrderGetResponseData>({
      method: "GET",
      path: "/ecommerce_order/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "date", value: request.date },
        { name: "date_range", value: request.dateRange },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

  async update(request: V3EcommerceOrderApiUpdateRequest): Promise<unknown> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: V3EcommerceOrderApiUpdateRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      path: "/ecommerce_order/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


