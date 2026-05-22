// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LeadsCallRecordsGetRequest, LeadsCallRecordsGetResponseData } from "../models";

export interface LeadsCallRecordsApiGetRequest {
  data: LeadsCallRecordsGetRequest;
}


export class LeadsCallRecordsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: LeadsCallRecordsApiGetRequest): Promise<LeadsCallRecordsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: LeadsCallRecordsApiGetRequest): Promise<ApiResponse<LeadsCallRecordsGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<LeadsCallRecordsGetResponseData>({
      method: "POST",
      path: "/leads_call_records/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


