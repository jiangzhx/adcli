// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_material_async_tasks.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { MaterialAsyncTasksAddRequest, MaterialAsyncTasksAddResponseData, MaterialAsyncTasksGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface MaterialAsyncTasksApiAddRequest {
  data: MaterialAsyncTasksAddRequest;
}

export interface MaterialAsyncTasksApiGetRequest {
  accountId?: number | string;
  organizationId?: number | string;
  ownershipType?: string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class MaterialAsyncTasksApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: MaterialAsyncTasksApiAddRequest): Promise<MaterialAsyncTasksAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: MaterialAsyncTasksApiAddRequest): Promise<ApiResponse<MaterialAsyncTasksAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<MaterialAsyncTasksAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/material_async_tasks/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: MaterialAsyncTasksApiGetRequest): Promise<MaterialAsyncTasksGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: MaterialAsyncTasksApiGetRequest): Promise<ApiResponse<MaterialAsyncTasksGetResponseData>> {

    return this.apiClient.requestWithHttpInfo<MaterialAsyncTasksGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/material_async_tasks/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "organization_id", value: request.organizationId },
        { name: "ownership_type", value: request.ownershipType },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


