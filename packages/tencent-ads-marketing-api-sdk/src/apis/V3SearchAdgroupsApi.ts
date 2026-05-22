// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SearchAdgroupsAddRequest, SearchAdgroupsAddResponseData, SearchAdgroupsUpdateRequest, SearchAdgroupsUpdateResponseData } from "../models";

export interface V3SearchAdgroupsApiAddRequest {
  data: SearchAdgroupsAddRequest;
}

export interface V3SearchAdgroupsApiUpdateRequest {
  data: SearchAdgroupsUpdateRequest;
}


export class V3SearchAdgroupsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3SearchAdgroupsApiAddRequest): Promise<SearchAdgroupsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3SearchAdgroupsApiAddRequest): Promise<ApiResponse<SearchAdgroupsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<SearchAdgroupsAddResponseData>({
      method: "POST",
      path: "/search_adgroups/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async update(request: V3SearchAdgroupsApiUpdateRequest): Promise<SearchAdgroupsUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: V3SearchAdgroupsApiUpdateRequest): Promise<ApiResponse<SearchAdgroupsUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<SearchAdgroupsUpdateResponseData>({
      method: "POST",
      path: "/search_adgroups/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


