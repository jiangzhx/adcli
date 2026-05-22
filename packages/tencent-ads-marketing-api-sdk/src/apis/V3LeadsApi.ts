// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LeadsAddRequest, LeadsAddResponseData, LeadsUpdateRequest, LeadsUpdateResponseData } from "../models";

export interface V3LeadsApiAddRequest {
  data: LeadsAddRequest;
}

export interface V3LeadsApiUpdateRequest {
  data: LeadsUpdateRequest;
}


export class V3LeadsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3LeadsApiAddRequest): Promise<LeadsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3LeadsApiAddRequest): Promise<ApiResponse<LeadsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<LeadsAddResponseData>({
      method: "POST",
      path: "/leads/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async update(request: V3LeadsApiUpdateRequest): Promise<LeadsUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: V3LeadsApiUpdateRequest): Promise<ApiResponse<LeadsUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<LeadsUpdateResponseData>({
      method: "POST",
      path: "/leads/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


