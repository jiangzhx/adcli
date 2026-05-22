// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_search_dynamic_creatives.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SearchDynamicCreativesAddRequest, SearchDynamicCreativesAddResponseData, SearchDynamicCreativesUpdateRequest, SearchDynamicCreativesUpdateResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface SearchDynamicCreativesApiAddRequest {
  data: SearchDynamicCreativesAddRequest;
}

export interface SearchDynamicCreativesApiUpdateRequest {
  data: SearchDynamicCreativesUpdateRequest;
}


export class SearchDynamicCreativesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: SearchDynamicCreativesApiAddRequest): Promise<SearchDynamicCreativesAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: SearchDynamicCreativesApiAddRequest): Promise<ApiResponse<SearchDynamicCreativesAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<SearchDynamicCreativesAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/search_dynamic_creatives/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async update(request: SearchDynamicCreativesApiUpdateRequest): Promise<SearchDynamicCreativesUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: SearchDynamicCreativesApiUpdateRequest): Promise<ApiResponse<SearchDynamicCreativesUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<SearchDynamicCreativesUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/search_dynamic_creatives/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


