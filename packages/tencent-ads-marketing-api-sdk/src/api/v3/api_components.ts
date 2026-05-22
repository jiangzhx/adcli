// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_components.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ComponentsAddRequest, ComponentsAddResponseData, ComponentsDeleteRequest, ComponentsDeleteResponseData, ComponentsGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface ComponentsApiAddRequest {
  data: ComponentsAddRequest;
}

export interface ComponentsApiDeleteRequest {
  data: ComponentsDeleteRequest;
}

export interface ComponentsApiGetRequest {
  accountId?: number | string;
  organizationId?: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  isDeleted?: boolean;
  fields?: unknown;
  componentIdFilteringMode?: string;
}


export class ComponentsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: ComponentsApiAddRequest): Promise<ComponentsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: ComponentsApiAddRequest): Promise<ApiResponse<ComponentsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<ComponentsAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/components/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: ComponentsApiDeleteRequest): Promise<ComponentsDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: ComponentsApiDeleteRequest): Promise<ApiResponse<ComponentsDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<ComponentsDeleteResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/components/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: ComponentsApiGetRequest): Promise<ComponentsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: ComponentsApiGetRequest): Promise<ApiResponse<ComponentsGetResponseData>> {

    return this.apiClient.requestWithHttpInfo<ComponentsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/components/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "organization_id", value: request.organizationId },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "is_deleted", value: request.isDeleted },
        { name: "fields", value: request.fields, collectionFormat: "multi" },
        { name: "component_id_filtering_mode", value: request.componentIdFilteringMode }
      ],
      contentType: "text/plain"
    });
  }

}


