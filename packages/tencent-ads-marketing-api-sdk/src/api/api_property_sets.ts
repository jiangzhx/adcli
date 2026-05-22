// Generated from tencentad/marketing-api-go-sdk pkg/api/api_property_sets.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { PropertySetsAddRequest, PropertySetsAddResponseData, PropertySetsGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface PropertySetsApiAddRequest {
  data: PropertySetsAddRequest;
}

export interface PropertySetsApiGetRequest {
  accountId: number | string;
  propertySetId?: number | string;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class PropertySetsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: PropertySetsApiAddRequest): Promise<PropertySetsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: PropertySetsApiAddRequest): Promise<ApiResponse<PropertySetsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<PropertySetsAddResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/property_sets/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: PropertySetsApiGetRequest): Promise<PropertySetsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: PropertySetsApiGetRequest): Promise<ApiResponse<PropertySetsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<PropertySetsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/property_sets/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "property_set_id", value: request.propertySetId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


