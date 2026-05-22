// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LiveRoomComponentsAddRequest, LiveRoomComponentsAddResponseData, LiveRoomComponentsDeleteRequest, LiveRoomComponentsDeleteResponseData, LiveRoomComponentsGetResponseData, LiveRoomComponentsUpdateRequest, LiveRoomComponentsUpdateResponseData } from "../models";

export interface V3LiveRoomComponentsApiAddRequest {
  data: LiveRoomComponentsAddRequest;
}

export interface V3LiveRoomComponentsApiDeleteRequest {
  data: LiveRoomComponentsDeleteRequest;
}

export interface V3LiveRoomComponentsApiGetRequest {
  accountId: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}

export interface V3LiveRoomComponentsApiUpdateRequest {
  data: LiveRoomComponentsUpdateRequest;
}


export class V3LiveRoomComponentsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3LiveRoomComponentsApiAddRequest): Promise<LiveRoomComponentsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3LiveRoomComponentsApiAddRequest): Promise<ApiResponse<LiveRoomComponentsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<LiveRoomComponentsAddResponseData>({
      method: "POST",
      path: "/live_room_components/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: V3LiveRoomComponentsApiDeleteRequest): Promise<LiveRoomComponentsDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: V3LiveRoomComponentsApiDeleteRequest): Promise<ApiResponse<LiveRoomComponentsDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<LiveRoomComponentsDeleteResponseData>({
      method: "POST",
      path: "/live_room_components/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: V3LiveRoomComponentsApiGetRequest): Promise<LiveRoomComponentsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3LiveRoomComponentsApiGetRequest): Promise<ApiResponse<LiveRoomComponentsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<LiveRoomComponentsGetResponseData>({
      method: "GET",
      path: "/live_room_components/get",
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

  async update(request: V3LiveRoomComponentsApiUpdateRequest): Promise<LiveRoomComponentsUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: V3LiveRoomComponentsApiUpdateRequest): Promise<ApiResponse<LiveRoomComponentsUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<LiveRoomComponentsUpdateResponseData>({
      method: "POST",
      path: "/live_room_components/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


