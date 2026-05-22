// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WildcardsGetRequest, WildcardsGetResponseData } from "../models";

export interface WildcardsApiGetRequest {
  data: WildcardsGetRequest;
}


export class WildcardsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: WildcardsApiGetRequest): Promise<WildcardsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: WildcardsApiGetRequest): Promise<ApiResponse<WildcardsGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<WildcardsGetResponseData>({
      method: "POST",
      path: "/wildcards/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


