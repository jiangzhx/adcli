// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ComponentsAddRequest, ComponentsAddResponseData, ComponentsDeleteRequest, ComponentsDeleteResponseData, ComponentsGetResponseData } from "../models";

export interface V3ComponentsApiAddRequest {
  data: ComponentsAddRequest;
}

export interface V3ComponentsApiDeleteRequest {
  data: ComponentsDeleteRequest;
}

export interface V3ComponentsApiGetRequest {
  accountId?: number | string;
  organizationId?: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  isDeleted?: boolean;
  fields?: unknown;
  componentIdFilteringMode?: string;
}


export class V3ComponentsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3ComponentsApiAddRequest): Promise<ComponentsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3ComponentsApiAddRequest): Promise<ApiResponse<ComponentsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<ComponentsAddResponseData>({
      method: "POST",
      path: "/components/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: V3ComponentsApiDeleteRequest): Promise<ComponentsDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: V3ComponentsApiDeleteRequest): Promise<ApiResponse<ComponentsDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<ComponentsDeleteResponseData>({
      method: "POST",
      path: "/components/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: V3ComponentsApiGetRequest): Promise<ComponentsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3ComponentsApiGetRequest): Promise<ApiResponse<ComponentsGetResponseData>> {

    return this.apiClient.requestWithHttpInfo<ComponentsGetResponseData>({
      method: "GET",
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


