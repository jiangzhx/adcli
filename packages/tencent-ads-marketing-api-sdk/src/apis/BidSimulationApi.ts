// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BidSimulationGetRequest, BidSimulationGetResponseData } from "../models";

export interface BidSimulationApiGetRequest {
  data: BidSimulationGetRequest;
}


export class BidSimulationApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: BidSimulationApiGetRequest): Promise<BidSimulationGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: BidSimulationApiGetRequest): Promise<ApiResponse<BidSimulationGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<BidSimulationGetResponseData>({
      method: "POST",
      path: "/bid_simulation/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


