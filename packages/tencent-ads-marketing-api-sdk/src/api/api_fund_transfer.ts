// Generated from tencentad/marketing-api-go-sdk pkg/api/api_fund_transfer.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FundTransferAddRequest, FundTransferAddResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface FundTransferApiAddRequest {
  data: FundTransferAddRequest;
}


export class FundTransferApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: FundTransferApiAddRequest): Promise<FundTransferAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: FundTransferApiAddRequest): Promise<ApiResponse<FundTransferAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<FundTransferAddResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/fund_transfer/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


