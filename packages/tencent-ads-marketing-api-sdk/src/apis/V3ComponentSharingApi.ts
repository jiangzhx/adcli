// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ComponentSharingGetResponseData, ComponentSharingUpdateRequest, ComponentSharingUpdateResponseData } from "../models";

export interface V3ComponentSharingApiGetRequest {
  organizationId: number | string;
  componentId?: number | string;
  page?: number;
  pageSize?: number;
  isDeleted?: boolean;
  fields?: unknown;
}

export interface V3ComponentSharingApiUpdateRequest {
  data: ComponentSharingUpdateRequest;
}


export class V3ComponentSharingApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3ComponentSharingApiGetRequest): Promise<ComponentSharingGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3ComponentSharingApiGetRequest): Promise<ApiResponse<ComponentSharingGetResponseData>> {
    if (request.organizationId == null) {
      throw new ApiException("Missing the required parameter 'organizationId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ComponentSharingGetResponseData>({
      method: "GET",
      path: "/component_sharing/get",
      queryParams: [
        { name: "organization_id", value: request.organizationId },
        { name: "component_id", value: request.componentId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "is_deleted", value: request.isDeleted },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

  async update(request: V3ComponentSharingApiUpdateRequest): Promise<ComponentSharingUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: V3ComponentSharingApiUpdateRequest): Promise<ApiResponse<ComponentSharingUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<ComponentSharingUpdateResponseData>({
      method: "POST",
      path: "/component_sharing/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


