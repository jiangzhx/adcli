// Generated from tencentad/marketing-api-go-sdk pkg/api/api_bid_simulation.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BidSimulationGetRequest, BidSimulationGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

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
      basePath: TencentAdsV13Configuration.basePath,
      path: "/bid_simulation/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


