// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CustomTagsAddRequest, CustomTagsAddResponseData, CustomTagsDeleteRequest, CustomTagsGetResponseData, CustomTagsUpdateRequest } from "../models";

export interface CustomTagsApiAddRequest {
  data: CustomTagsAddRequest;
}

export interface CustomTagsApiDeleteRequest {
  data: CustomTagsDeleteRequest;
}

export interface CustomTagsApiGetRequest {
  accountId: number | string;
  parentTagId?: number | string;
  tagId?: number | string;
  tagCode?: string;
  platform?: string;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}

export interface CustomTagsApiUpdateRequest {
  data: CustomTagsUpdateRequest;
}


export class CustomTagsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: CustomTagsApiAddRequest): Promise<CustomTagsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: CustomTagsApiAddRequest): Promise<ApiResponse<CustomTagsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<CustomTagsAddResponseData>({
      method: "POST",
      path: "/custom_tags/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: CustomTagsApiDeleteRequest): Promise<unknown> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: CustomTagsApiDeleteRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      path: "/custom_tags/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: CustomTagsApiGetRequest): Promise<CustomTagsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: CustomTagsApiGetRequest): Promise<ApiResponse<CustomTagsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<CustomTagsGetResponseData>({
      method: "GET",
      path: "/custom_tags/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "parent_tag_id", value: request.parentTagId },
        { name: "tag_id", value: request.tagId },
        { name: "tag_code", value: request.tagCode },
        { name: "platform", value: request.platform },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

  async update(request: CustomTagsApiUpdateRequest): Promise<unknown> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: CustomTagsApiUpdateRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      path: "/custom_tags/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


