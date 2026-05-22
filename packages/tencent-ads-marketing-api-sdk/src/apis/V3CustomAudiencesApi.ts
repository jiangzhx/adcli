// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CustomAudiencesAddRequest, CustomAudiencesAddResponseData, CustomAudiencesDeleteRequest, CustomAudiencesGetResponseData, CustomAudiencesUpdateRequest } from "../models";

export interface V3CustomAudiencesApiAddRequest {
  data: CustomAudiencesAddRequest;
}

export interface V3CustomAudiencesApiDeleteRequest {
  data: CustomAudiencesDeleteRequest;
}

export interface V3CustomAudiencesApiGetRequest {
  accountId: number | string;
  audienceId?: number | string;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}

export interface V3CustomAudiencesApiUpdateRequest {
  data: CustomAudiencesUpdateRequest;
}


export class V3CustomAudiencesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3CustomAudiencesApiAddRequest): Promise<CustomAudiencesAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3CustomAudiencesApiAddRequest): Promise<ApiResponse<CustomAudiencesAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<CustomAudiencesAddResponseData>({
      method: "POST",
      path: "/custom_audiences/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: V3CustomAudiencesApiDeleteRequest): Promise<unknown> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: V3CustomAudiencesApiDeleteRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      path: "/custom_audiences/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: V3CustomAudiencesApiGetRequest): Promise<CustomAudiencesGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3CustomAudiencesApiGetRequest): Promise<ApiResponse<CustomAudiencesGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<CustomAudiencesGetResponseData>({
      method: "GET",
      path: "/custom_audiences/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "audience_id", value: request.audienceId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

  async update(request: V3CustomAudiencesApiUpdateRequest): Promise<unknown> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: V3CustomAudiencesApiUpdateRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      path: "/custom_audiences/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


