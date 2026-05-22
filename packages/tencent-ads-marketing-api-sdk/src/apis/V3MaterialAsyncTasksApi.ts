// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { MaterialAsyncTasksAddRequest, MaterialAsyncTasksAddResponseData, MaterialAsyncTasksGetResponseData } from "../models";

export interface V3MaterialAsyncTasksApiAddRequest {
  data: MaterialAsyncTasksAddRequest;
}

export interface V3MaterialAsyncTasksApiGetRequest {
  accountId?: number | string;
  organizationId?: number | string;
  ownershipType?: string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class V3MaterialAsyncTasksApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3MaterialAsyncTasksApiAddRequest): Promise<MaterialAsyncTasksAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3MaterialAsyncTasksApiAddRequest): Promise<ApiResponse<MaterialAsyncTasksAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<MaterialAsyncTasksAddResponseData>({
      method: "POST",
      path: "/material_async_tasks/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: V3MaterialAsyncTasksApiGetRequest): Promise<MaterialAsyncTasksGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3MaterialAsyncTasksApiGetRequest): Promise<ApiResponse<MaterialAsyncTasksGetResponseData>> {

    return this.apiClient.requestWithHttpInfo<MaterialAsyncTasksGetResponseData>({
      method: "GET",
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


