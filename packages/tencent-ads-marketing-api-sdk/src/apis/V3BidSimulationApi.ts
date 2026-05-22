// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BidSimulationGetResponseData } from "../models";

export interface V3BidSimulationApiGetRequest {
  accountId: number | string;
  reqType?: number;
  optimizationGoalLevel?: number;
  adgroupId?: number | string;
  bidList?: unknown;
  fields?: unknown;
}


export class V3BidSimulationApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3BidSimulationApiGetRequest): Promise<BidSimulationGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3BidSimulationApiGetRequest): Promise<ApiResponse<BidSimulationGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<BidSimulationGetResponseData>({
      method: "GET",
      path: "/bid_simulation/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "req_type", value: request.reqType },
        { name: "optimization_goal_level", value: request.optimizationGoalLevel },
        { name: "adgroup_id", value: request.adgroupId },
        { name: "bid_list", value: request.bidList, collectionFormat: "multi" },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


