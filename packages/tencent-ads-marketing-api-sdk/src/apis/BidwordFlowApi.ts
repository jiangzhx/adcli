// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BidwordFlowGetRequest, BidwordFlowGetResponseData } from "../models";

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
      path: "/bidword_flow/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


