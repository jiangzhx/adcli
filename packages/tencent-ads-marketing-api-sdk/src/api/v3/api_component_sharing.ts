// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_component_sharing.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ComponentSharingGetResponseData, ComponentSharingUpdateRequest, ComponentSharingUpdateResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface ComponentSharingApiGetRequest {
  organizationId: number | string;
  componentId?: number | string;
  page?: number;
  pageSize?: number;
  isDeleted?: boolean;
  fields?: unknown;
}

export interface ComponentSharingApiUpdateRequest {
  data: ComponentSharingUpdateRequest;
}


export class ComponentSharingApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: ComponentSharingApiGetRequest): Promise<ComponentSharingGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: ComponentSharingApiGetRequest): Promise<ApiResponse<ComponentSharingGetResponseData>> {
    if (request.organizationId == null) {
      throw new ApiException("Missing the required parameter 'organizationId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ComponentSharingGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
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

  async update(request: ComponentSharingApiUpdateRequest): Promise<ComponentSharingUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: ComponentSharingApiUpdateRequest): Promise<ApiResponse<ComponentSharingUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<ComponentSharingUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/component_sharing/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


