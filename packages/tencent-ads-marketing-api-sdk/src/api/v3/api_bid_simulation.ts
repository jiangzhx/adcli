// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_bid_simulation.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BidSimulationGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface BidSimulationApiGetRequest {
  accountId: number | string;
  reqType?: number;
  optimizationGoalLevel?: number;
  adgroupId?: number | string;
  bidList?: unknown;
  fields?: unknown;
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
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<BidSimulationGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
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


