// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_component_depends.go
// Do not edit manually.
import { ApiClient, ApiException } from "./client.js";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration.js";
export class ComponentDependsApi {
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
        if (request.marketingCarrierType == null) {
            throw new ApiException("Missing the required parameter 'marketingCarrierType' when calling get");
        }
        if (request.deliveryMode == null) {
            throw new ApiException("Missing the required parameter 'deliveryMode' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            basePath: TencentAdsV30Configuration.basePath,
            path: "/component_depends/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "marketing_goal", value: request.marketingGoal },
                { name: "marketing_sub_goal", value: request.marketingSubGoal },
                { name: "marketing_target_type", value: request.marketingTargetType },
                { name: "marketing_carrier_type", value: request.marketingCarrierType },
                { name: "automatic_site_enabled", value: request.automaticSiteEnabled },
                { name: "site_set", value: request.siteSet, collectionFormat: "multi" },
                { name: "delivery_mode", value: request.deliveryMode },
                { name: "dynamic_creative_type", value: request.dynamicCreativeType },
                { name: "creative_template_id", value: request.creativeTemplateId },
                { name: "component_type", value: request.componentType },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
