// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LeadsCallVirtualNumberGetRequest, LeadsCallVirtualNumberGetResponseData } from "../models";

export interface LeadsCallVirtualNumberApiGetRequest {
  data: LeadsCallVirtualNumberGetRequest;
}


export class LeadsCallVirtualNumberApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: LeadsCallVirtualNumberApiGetRequest): Promise<LeadsCallVirtualNumberGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: LeadsCallVirtualNumberApiGetRequest): Promise<ApiResponse<LeadsCallVirtualNumberGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<LeadsCallVirtualNumberGetResponseData>({
      method: "POST",
      path: "/leads_call_virtual_number/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


