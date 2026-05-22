// Generated from tencentad/marketing-api-go-sdk pkg/api/api_ecommerce_order.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DateRange, EcommerceOrderGetResponseData, EcommerceOrderUpdateRequest } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface EcommerceOrderApiGetRequest {
  accountId: number | string;
  dateRange: DateRange;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}

export interface EcommerceOrderApiUpdateRequest {
  data: EcommerceOrderUpdateRequest;
}


export class EcommerceOrderApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: EcommerceOrderApiGetRequest): Promise<EcommerceOrderGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: EcommerceOrderApiGetRequest): Promise<ApiResponse<EcommerceOrderGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.dateRange == null) {
      throw new ApiException("Missing the required parameter 'dateRange' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<EcommerceOrderGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/ecommerce_order/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "date_range", value: request.dateRange },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

  async update(request: EcommerceOrderApiUpdateRequest): Promise<unknown> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: EcommerceOrderApiUpdateRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/ecommerce_order/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


