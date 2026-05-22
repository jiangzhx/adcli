// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_search_adgroups.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SearchAdgroupsAddRequest, SearchAdgroupsAddResponseData, SearchAdgroupsUpdateRequest, SearchAdgroupsUpdateResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface SearchAdgroupsApiAddRequest {
  data: SearchAdgroupsAddRequest;
}

export interface SearchAdgroupsApiUpdateRequest {
  data: SearchAdgroupsUpdateRequest;
}


export class SearchAdgroupsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: SearchAdgroupsApiAddRequest): Promise<SearchAdgroupsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: SearchAdgroupsApiAddRequest): Promise<ApiResponse<SearchAdgroupsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<SearchAdgroupsAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/search_adgroups/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async update(request: SearchAdgroupsApiUpdateRequest): Promise<SearchAdgroupsUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: SearchAdgroupsApiUpdateRequest): Promise<ApiResponse<SearchAdgroupsUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<SearchAdgroupsUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/search_adgroups/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


