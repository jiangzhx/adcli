// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BidwordRptGetRequest, BidwordRptGetResponseData } from "../models";

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
      path: "/bidword_rpt/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


