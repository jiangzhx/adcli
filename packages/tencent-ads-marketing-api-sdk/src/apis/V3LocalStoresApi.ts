// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalStoresAddRequest, LocalStoresAddResponseData, LocalStoresDeleteRequest, LocalStoresDeleteResponseData, LocalStoresGetResponseData, LocalStoresUpdateRequest, LocalStoresUpdateResponseData } from "../models";

export interface V3LocalStoresApiAddRequest {
  data: LocalStoresAddRequest;
}

export interface V3LocalStoresApiDeleteRequest {
  data: LocalStoresDeleteRequest;
}

export interface V3LocalStoresApiGetRequest {
  accountId: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}

export interface V3LocalStoresApiUpdateRequest {
  data: LocalStoresUpdateRequest;
}


export class V3LocalStoresApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3LocalStoresApiAddRequest): Promise<LocalStoresAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3LocalStoresApiAddRequest): Promise<ApiResponse<LocalStoresAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<LocalStoresAddResponseData>({
      method: "POST",
      path: "/local_stores/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: V3LocalStoresApiDeleteRequest): Promise<LocalStoresDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: V3LocalStoresApiDeleteRequest): Promise<ApiResponse<LocalStoresDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<LocalStoresDeleteResponseData>({
      method: "POST",
      path: "/local_stores/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: V3LocalStoresApiGetRequest): Promise<LocalStoresGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3LocalStoresApiGetRequest): Promise<ApiResponse<LocalStoresGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<LocalStoresGetResponseData>({
      method: "GET",
      path: "/local_stores/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

  async update(request: V3LocalStoresApiUpdateRequest): Promise<LocalStoresUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: V3LocalStoresApiUpdateRequest): Promise<ApiResponse<LocalStoresUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<LocalStoresUpdateResponseData>({
      method: "POST",
      path: "/local_stores/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


