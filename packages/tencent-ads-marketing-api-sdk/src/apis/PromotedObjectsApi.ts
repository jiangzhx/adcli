// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PromotedObjectsAddRequest, PromotedObjectsAddResponseData, PromotedObjectsAuthorizeRequest, PromotedObjectsAuthorizeResponseData, PromotedObjectsDeleteRequest, PromotedObjectsDeleteResponseData, PromotedObjectsGetResponseData, PromotedObjectsUpdateRequest, PromotedObjectsUpdateResponseData } from "../models";

export interface PromotedObjectsApiAddRequest {
  data: PromotedObjectsAddRequest;
}

export interface PromotedObjectsApiAuthorizeRequest {
  data: PromotedObjectsAuthorizeRequest;
}

export interface PromotedObjectsApiDeleteRequest {
  data: PromotedObjectsDeleteRequest;
}

export interface PromotedObjectsApiGetRequest {
  accountId: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}

export interface PromotedObjectsApiUpdateRequest {
  data: PromotedObjectsUpdateRequest;
}


export class PromotedObjectsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: PromotedObjectsApiAddRequest): Promise<PromotedObjectsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: PromotedObjectsApiAddRequest): Promise<ApiResponse<PromotedObjectsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<PromotedObjectsAddResponseData>({
      method: "POST",
      path: "/promoted_objects/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async authorize(request: PromotedObjectsApiAuthorizeRequest): Promise<PromotedObjectsAuthorizeResponseData> {
    const response = await this.authorizeWithHttpInfo(request);
    return response.data;
  }

  async authorizeWithHttpInfo(request: PromotedObjectsApiAuthorizeRequest): Promise<ApiResponse<PromotedObjectsAuthorizeResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling authorize");
    }
    return this.apiClient.requestWithHttpInfo<PromotedObjectsAuthorizeResponseData>({
      method: "POST",
      path: "/promoted_objects/authorize",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: PromotedObjectsApiDeleteRequest): Promise<PromotedObjectsDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: PromotedObjectsApiDeleteRequest): Promise<ApiResponse<PromotedObjectsDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<PromotedObjectsDeleteResponseData>({
      method: "POST",
      path: "/promoted_objects/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: PromotedObjectsApiGetRequest): Promise<PromotedObjectsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: PromotedObjectsApiGetRequest): Promise<ApiResponse<PromotedObjectsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<PromotedObjectsGetResponseData>({
      method: "GET",
      path: "/promoted_objects/get",
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

  async update(request: PromotedObjectsApiUpdateRequest): Promise<PromotedObjectsUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: PromotedObjectsApiUpdateRequest): Promise<ApiResponse<PromotedObjectsUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<PromotedObjectsUpdateResponseData>({
      method: "POST",
      path: "/promoted_objects/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


