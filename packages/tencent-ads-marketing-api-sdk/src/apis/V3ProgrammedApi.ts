// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProgrammedGetRequest, ProgrammedGetResponseData } from "../models";

export interface V3ProgrammedApiGetRequest {
  data: ProgrammedGetRequest;
}


export class V3ProgrammedApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3ProgrammedApiGetRequest): Promise<ProgrammedGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3ProgrammedApiGetRequest): Promise<ApiResponse<ProgrammedGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ProgrammedGetResponseData>({
      method: "POST",
      path: "/programmed/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


