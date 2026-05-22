// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.
import { ApiClient } from "../runtime/ApiClient.js";
import { ApiException } from "../runtime/ApiException.js";
export class V3OptimizationGoalPermissionsApi {
    apiClient;
    constructor(apiClient = new ApiClient()) {
        this.apiClient = apiClient;
    }
    getApiClient() {
        return this.apiClient;
    }
    setApiClient(apiClient) {
        this.apiClient = apiClient;
    }
    async get(request) {
        const response = await this.getWithHttpInfo(request);
        return response.data;
    }
    async getWithHttpInfo(request) {
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
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
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
