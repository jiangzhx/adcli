// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { TargetingsGetRequest, TargetingsGetResponseData } from "../models";

export interface V3TargetingsApiGetRequest {
  data: TargetingsGetRequest;
}


export class V3TargetingsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3TargetingsApiGetRequest): Promise<TargetingsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3TargetingsApiGetRequest): Promise<ApiResponse<TargetingsGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<TargetingsGetResponseData>({
      method: "POST",
      path: "/targetings/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


