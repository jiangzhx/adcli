// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BidwordFlowGetResponseData } from "../models";

export interface V3BidwordFlowApiGetRequest {
  accountId: number | string;
  bidwordList: string[];
  orderBy?: unknown;
  fields?: unknown;
}


export class V3BidwordFlowApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3BidwordFlowApiGetRequest): Promise<BidwordFlowGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3BidwordFlowApiGetRequest): Promise<ApiResponse<BidwordFlowGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.bidwordList == null) {
      throw new ApiException("Missing the required parameter 'bidwordList' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<BidwordFlowGetResponseData>({
      method: "GET",
      path: "/bidword_flow/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "bidword_list", value: request.bidwordList, collectionFormat: "multi" },
        { name: "order_by", value: request.orderBy, collectionFormat: "multi" },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


