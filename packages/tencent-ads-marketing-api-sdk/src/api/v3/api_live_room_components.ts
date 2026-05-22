// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_live_room_components.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LiveRoomComponentsAddRequest, LiveRoomComponentsAddResponseData, LiveRoomComponentsDeleteRequest, LiveRoomComponentsDeleteResponseData, LiveRoomComponentsGetResponseData, LiveRoomComponentsUpdateRequest, LiveRoomComponentsUpdateResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface LiveRoomComponentsApiAddRequest {
  data: LiveRoomComponentsAddRequest;
}

export interface LiveRoomComponentsApiDeleteRequest {
  data: LiveRoomComponentsDeleteRequest;
}

export interface LiveRoomComponentsApiGetRequest {
  accountId: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}

export interface LiveRoomComponentsApiUpdateRequest {
  data: LiveRoomComponentsUpdateRequest;
}


export class LiveRoomComponentsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: LiveRoomComponentsApiAddRequest): Promise<LiveRoomComponentsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: LiveRoomComponentsApiAddRequest): Promise<ApiResponse<LiveRoomComponentsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<LiveRoomComponentsAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/live_room_components/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: LiveRoomComponentsApiDeleteRequest): Promise<LiveRoomComponentsDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: LiveRoomComponentsApiDeleteRequest): Promise<ApiResponse<LiveRoomComponentsDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<LiveRoomComponentsDeleteResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/live_room_components/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: LiveRoomComponentsApiGetRequest): Promise<LiveRoomComponentsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: LiveRoomComponentsApiGetRequest): Promise<ApiResponse<LiveRoomComponentsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<LiveRoomComponentsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
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

  async update(request: LiveRoomComponentsApiUpdateRequest): Promise<LiveRoomComponentsUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: LiveRoomComponentsApiUpdateRequest): Promise<ApiResponse<LiveRoomComponentsUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<LiveRoomComponentsUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/live_room_components/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


