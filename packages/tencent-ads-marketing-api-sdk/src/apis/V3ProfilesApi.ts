// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProfilesAddRequest, ProfilesAddResponseData, ProfilesDeleteRequest, ProfilesDeleteResponseData, ProfilesGetResponseData } from "../models";

export interface V3ProfilesApiAddRequest {
  data: ProfilesAddRequest;
}

export interface V3ProfilesApiDeleteRequest {
  data: ProfilesDeleteRequest;
}

export interface V3ProfilesApiGetRequest {
  accountId?: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  organizationId?: number | string;
  fields?: unknown;
}


export class V3ProfilesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3ProfilesApiAddRequest): Promise<ProfilesAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3ProfilesApiAddRequest): Promise<ApiResponse<ProfilesAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<ProfilesAddResponseData>({
      method: "POST",
      path: "/profiles/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: V3ProfilesApiDeleteRequest): Promise<ProfilesDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: V3ProfilesApiDeleteRequest): Promise<ApiResponse<ProfilesDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<ProfilesDeleteResponseData>({
      method: "POST",
      path: "/profiles/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: V3ProfilesApiGetRequest): Promise<ProfilesGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3ProfilesApiGetRequest): Promise<ApiResponse<ProfilesGetResponseData>> {

    return this.apiClient.requestWithHttpInfo<ProfilesGetResponseData>({
      method: "GET",
      path: "/profiles/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "organization_id", value: request.organizationId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


