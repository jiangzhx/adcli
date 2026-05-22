// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BusinessPointGetRequest, BusinessPointGetResponseData } from "../models";

export interface BusinessPointApiGetRequest {
  data: BusinessPointGetRequest;
}


export class BusinessPointApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: BusinessPointApiGetRequest): Promise<BusinessPointGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: BusinessPointApiGetRequest): Promise<ApiResponse<BusinessPointGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<BusinessPointGetResponseData>({
      method: "POST",
      path: "/business_point/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


