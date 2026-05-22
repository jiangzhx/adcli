// Generated from tencentad/marketing-api-go-sdk pkg/api/api_bidword_rpt.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BidwordRptGetRequest, BidwordRptGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface BidwordRptApiGetRequest {
  data: BidwordRptGetRequest;
}


export class BidwordRptApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: BidwordRptApiGetRequest): Promise<BidwordRptGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: BidwordRptApiGetRequest): Promise<ApiResponse<BidwordRptGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<BidwordRptGetResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/bidword_rpt/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


