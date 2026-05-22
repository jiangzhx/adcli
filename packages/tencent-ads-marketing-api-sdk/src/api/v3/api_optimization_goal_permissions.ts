// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_optimization_goal_permissions.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { OptimizationGoalPermissionsGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface OptimizationGoalPermissionsApiGetRequest {
  accountId: number | string;
  siteSet: string[];
  marketingGoal: string;
  marketingSubGoal: string;
  marketingCarrierType: string;
  marketingTargetType: string;
  bidMode?: string;
  marketingCarrierDetail?: unknown;
  deliveryScene?: string;
  fields?: unknown;
}


export class OptimizationGoalPermissionsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: OptimizationGoalPermissionsApiGetRequest): Promise<OptimizationGoalPermissionsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: OptimizationGoalPermissionsApiGetRequest): Promise<ApiResponse<OptimizationGoalPermissionsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.siteSet == null) {
      throw new ApiException("Missing the required parameter 'siteSet' when calling get");
    }

    if (request.marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling get");
    }

    if (request.marketingSubGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingSubGoal' when calling get");
    }

    if (request.marketingCarrierType == null) {
      throw new ApiException("Missing the required parameter 'marketingCarrierType' when calling get");
    }

    if (request.marketingTargetType == null) {
      throw new ApiException("Missing the required parameter 'marketingTargetType' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<OptimizationGoalPermissionsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/optimization_goal_permissions/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "site_set", value: request.siteSet, collectionFormat: "multi" },
        { name: "bid_mode", value: request.bidMode },
        { name: "marketing_goal", value: request.marketingGoal },
        { name: "marketing_sub_goal", value: request.marketingSubGoal },
        { name: "marketing_carrier_type", value: request.marketingCarrierType },
        { name: "marketing_target_type", value: request.marketingTargetType },
        { name: "marketing_carrier_detail", value: request.marketingCarrierDetail },
        { name: "delivery_scene", value: request.deliveryScene },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


