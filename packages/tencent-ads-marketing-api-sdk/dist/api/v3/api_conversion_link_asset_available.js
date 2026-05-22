// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_conversion_link_asset_available.go
// Do not edit manually.
import { ApiClient, ApiException } from "./client.js";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration.js";
export class ConversionLinkAssetAvailableApi {
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
        if (request.marketingGoal == null) {
            throw new ApiException("Missing the required parameter 'marketingGoal' when calling get");
        }
        if (request.marketingTargetType == null) {
            throw new ApiException("Missing the required parameter 'marketingTargetType' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            basePath: TencentAdsV30Configuration.basePath,
            path: "/conversion_link_asset_available/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "marketing_goal", value: request.marketingGoal },
                { name: "marketing_target_type", value: request.marketingTargetType },
                { name: "marketing_asset_outer_id", value: request.marketingAssetOuterId },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
