// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LeadCluesGetRequest, LeadCluesGetResponseData, LeadCluesUpdateRequest } from "../models";

export interface LeadCluesApiGetRequest {
  data: LeadCluesGetRequest;
}

export interface LeadCluesApiUpdateRequest {
  data: LeadCluesUpdateRequest;
}


export class LeadCluesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: LeadCluesApiGetRequest): Promise<LeadCluesGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: LeadCluesApiGetRequest): Promise<ApiResponse<LeadCluesGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<LeadCluesGetResponseData>({
      method: "POST",
      path: "/lead_clues/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async update(request: LeadCluesApiUpdateRequest): Promise<unknown> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: LeadCluesApiUpdateRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      path: "/lead_clues/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


