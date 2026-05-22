// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LeadsCallCreateRequest, LeadsCallCreateResponseData } from "../models";

export interface LeadsCallApiCreateRequest {
  data: LeadsCallCreateRequest;
}


export class LeadsCallApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async create(request: LeadsCallApiCreateRequest): Promise<LeadsCallCreateResponseData> {
    const response = await this.createWithHttpInfo(request);
    return response.data;
  }

  async createWithHttpInfo(request: LeadsCallApiCreateRequest): Promise<ApiResponse<LeadsCallCreateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling create");
    }
    return this.apiClient.requestWithHttpInfo<LeadsCallCreateResponseData>({
      method: "POST",
      path: "/leads_call/create",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


