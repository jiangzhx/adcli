// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_marketing_target_asset_property_values.go
// Do not edit manually.
import { ApiClient, ApiException } from "./client.js";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration.js";
export class MarketingTargetAssetPropertyValuesApi {
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
        if (request.organizationId == null) {
            throw new ApiException("Missing the required parameter 'organizationId' when calling get");
        }
        if (request.marketingTargetType == null) {
            throw new ApiException("Missing the required parameter 'marketingTargetType' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            basePath: TencentAdsV30Configuration.basePath,
            path: "/marketing_target_asset_property_values/get",
            queryParams: [
                { name: "organization_id", value: request.organizationId },
                { name: "marketing_target_type", value: request.marketingTargetType },
                { name: "marketing_asset_type", value: request.marketingAssetType },
                { name: "marketing_asset_category", value: request.marketingAssetCategory },
                { name: "property_name", value: request.propertyName },
                { name: "filtering", value: request.filtering, collectionFormat: "multi" },
                { name: "page", value: request.page },
                { name: "page_size", value: request.pageSize },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
