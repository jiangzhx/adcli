// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DynamicAdVideoAddRequest, DynamicAdVideoAddResponseData, DynamicAdVideoGetResponseData } from "../models";

export interface DynamicAdVideoApiAddRequest {
  data: DynamicAdVideoAddRequest;
}

export interface DynamicAdVideoApiGetRequest {
  accountId: number | string;
  productCatalogId: number | string;
  productMode: string;
  productOuterId: string;
  dynamicAdTemplateId: number | string;
  fields?: unknown;
}


export class DynamicAdVideoApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: DynamicAdVideoApiAddRequest): Promise<DynamicAdVideoAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: DynamicAdVideoApiAddRequest): Promise<ApiResponse<DynamicAdVideoAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<DynamicAdVideoAddResponseData>({
      method: "POST",
      path: "/dynamic_ad_video/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: DynamicAdVideoApiGetRequest): Promise<DynamicAdVideoGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: DynamicAdVideoApiGetRequest): Promise<ApiResponse<DynamicAdVideoGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.productCatalogId == null) {
      throw new ApiException("Missing the required parameter 'productCatalogId' when calling get");
    }

    if (request.productMode == null) {
      throw new ApiException("Missing the required parameter 'productMode' when calling get");
    }

    if (request.productOuterId == null) {
      throw new ApiException("Missing the required parameter 'productOuterId' when calling get");
    }

    if (request.dynamicAdTemplateId == null) {
      throw new ApiException("Missing the required parameter 'dynamicAdTemplateId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<DynamicAdVideoGetResponseData>({
      method: "GET",
      path: "/dynamic_ad_video/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "product_catalog_id", value: request.productCatalogId },
        { name: "product_mode", value: request.productMode },
        { name: "product_outer_id", value: request.productOuterId },
        { name: "dynamic_ad_template_id", value: request.dynamicAdTemplateId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


