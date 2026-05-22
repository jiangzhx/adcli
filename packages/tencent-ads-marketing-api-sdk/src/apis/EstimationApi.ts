// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { EstimationGetRequest, EstimationGetResponseData } from "../models";

export interface EstimationApiGetRequest {
  data: EstimationGetRequest;
}


export class EstimationApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: EstimationApiGetRequest): Promise<EstimationGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: EstimationApiGetRequest): Promise<ApiResponse<EstimationGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<EstimationGetResponseData>({
      method: "POST",
      path: "/estimation/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


