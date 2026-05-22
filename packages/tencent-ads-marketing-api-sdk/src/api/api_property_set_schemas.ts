// Generated from tencentad/marketing-api-go-sdk pkg/api/api_property_set_schemas.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { PropertySetSchemasAddRequest, PropertySetSchemasGetResponseData, PropertySetSchemasUpdateRequest } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface PropertySetSchemasApiAddRequest {
  data: PropertySetSchemasAddRequest;
}

export interface PropertySetSchemasApiGetRequest {
  accountId: number | string;
  propertySetId: number | string;
  fields?: unknown;
}

export interface PropertySetSchemasApiUpdateRequest {
  data: PropertySetSchemasUpdateRequest;
}


export class PropertySetSchemasApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: PropertySetSchemasApiAddRequest): Promise<unknown> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: PropertySetSchemasApiAddRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/property_set_schemas/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: PropertySetSchemasApiGetRequest): Promise<PropertySetSchemasGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: PropertySetSchemasApiGetRequest): Promise<ApiResponse<PropertySetSchemasGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.propertySetId == null) {
      throw new ApiException("Missing the required parameter 'propertySetId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<PropertySetSchemasGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/property_set_schemas/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "property_set_id", value: request.propertySetId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

  async update(request: PropertySetSchemasApiUpdateRequest): Promise<unknown> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: PropertySetSchemasApiUpdateRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/property_set_schemas/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


