// Generated from tencentad/marketing-api-go-sdk pkg/api/api_bidword_flow.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BidwordFlowGetRequest, BidwordFlowGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface BidwordFlowApiGetRequest {
  data: BidwordFlowGetRequest;
}


export class BidwordFlowApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: BidwordFlowApiGetRequest): Promise<BidwordFlowGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: BidwordFlowApiGetRequest): Promise<ApiResponse<BidwordFlowGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<BidwordFlowGetResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/bidword_flow/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


