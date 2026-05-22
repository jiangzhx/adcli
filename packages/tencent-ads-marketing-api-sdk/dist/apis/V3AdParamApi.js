// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.
import { ApiClient } from "../runtime/ApiClient.js";
import { ApiException } from "../runtime/ApiException.js";
export class V3AdParamApi {
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
        if (request.creativeTemplateId == null) {
            throw new ApiException("Missing the required parameter 'creativeTemplateId' when calling get");
        }
        if (request.siteSet == null) {
            throw new ApiException("Missing the required parameter 'siteSet' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            path: "/ad_param/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "marketing_goal", value: request.marketingGoal },
                { name: "marketing_sub_goal", value: request.marketingSubGoal },
                { name: "marketing_carrier_type", value: request.marketingCarrierType },
                { name: "marketing_target_type", value: request.marketingTargetType },
                { name: "creative_template_id", value: request.creativeTemplateId },
                { name: "site_set", value: request.siteSet, collectionFormat: "multi" },
                { name: "product_catalog_id", value: request.productCatalogId },
                { name: "marketing_asset_outer_spec", value: request.marketingAssetOuterSpec },
                { name: "mpa_spec", value: request.mpaSpec },
                { name: "dynamic_ad_type", value: request.dynamicAdType },
                { name: "adgroup_type", value: request.adgroupType },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
