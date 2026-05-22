// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SubsidyAccountBindAddRequest, SubsidyAccountBindAddResponseData } from "../models";

export interface V3SubsidyAccountBindApiAddRequest {
  data: SubsidyAccountBindAddRequest;
}


export class V3SubsidyAccountBindApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3SubsidyAccountBindApiAddRequest): Promise<SubsidyAccountBindAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3SubsidyAccountBindApiAddRequest): Promise<ApiResponse<SubsidyAccountBindAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<SubsidyAccountBindAddResponseData>({
      method: "POST",
      path: "/subsidy_account_bind/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


