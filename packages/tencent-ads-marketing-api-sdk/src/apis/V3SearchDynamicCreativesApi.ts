// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SearchDynamicCreativesAddRequest, SearchDynamicCreativesAddResponseData, SearchDynamicCreativesUpdateRequest, SearchDynamicCreativesUpdateResponseData } from "../models";

export interface V3SearchDynamicCreativesApiAddRequest {
  data: SearchDynamicCreativesAddRequest;
}

export interface V3SearchDynamicCreativesApiUpdateRequest {
  data: SearchDynamicCreativesUpdateRequest;
}


export class V3SearchDynamicCreativesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3SearchDynamicCreativesApiAddRequest): Promise<SearchDynamicCreativesAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3SearchDynamicCreativesApiAddRequest): Promise<ApiResponse<SearchDynamicCreativesAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<SearchDynamicCreativesAddResponseData>({
      method: "POST",
      path: "/search_dynamic_creatives/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async update(request: V3SearchDynamicCreativesApiUpdateRequest): Promise<SearchDynamicCreativesUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: V3SearchDynamicCreativesApiUpdateRequest): Promise<ApiResponse<SearchDynamicCreativesUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<SearchDynamicCreativesUpdateResponseData>({
      method: "POST",
      path: "/search_dynamic_creatives/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


