// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_bidword_flow.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BidwordFlowGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface BidwordFlowApiGetRequest {
  accountId: number | string;
  bidwordList: string[];
  orderBy?: unknown;
  fields?: unknown;
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
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.bidwordList == null) {
      throw new ApiException("Missing the required parameter 'bidwordList' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<BidwordFlowGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
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


