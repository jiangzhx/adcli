// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.
import { ApiClient } from "../runtime/ApiClient.js";
import { ApiException } from "../runtime/ApiException.js";
export class V3KeywordRecommendApi {
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
        if (request.siteSets == null) {
            throw new ApiException("Missing the required parameter 'siteSets' when calling get");
        }
        if (request.recommendCategory == null) {
            throw new ApiException("Missing the required parameter 'recommendCategory' when calling get");
        }
        if (request.accountId == null) {
            throw new ApiException("Missing the required parameter 'accountId' when calling get");
        }
        if (request.systemIndustryId == null) {
            throw new ApiException("Missing the required parameter 'systemIndustryId' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            path: "/keyword_recommend/get",
            queryParams: [
                { name: "site_sets", value: request.siteSets, collectionFormat: "multi" },
                { name: "recommend_category", value: request.recommendCategory },
                { name: "account_id", value: request.accountId },
                { name: "system_industry_id", value: request.systemIndustryId },
                { name: "query_word", value: request.queryWord, collectionFormat: "multi" },
                { name: "business_point_id", value: request.businessPointId },
                { name: "adgroup_id", value: request.adgroupId },
                { name: "campaign_id", value: request.campaignId },
                { name: "include_word", value: request.includeWord, collectionFormat: "multi" },
                { name: "exclude_word", value: request.excludeWord, collectionFormat: "multi" },
                { name: "filter_ad_word", value: request.filterAdWord },
                { name: "filter_account_word", value: request.filterAccountWord },
                { name: "recommend_reasons", value: request.recommendReasons, collectionFormat: "multi" },
                { name: "province", value: request.province, collectionFormat: "multi" },
                { name: "city", value: request.city, collectionFormat: "multi" },
                { name: "order_by", value: request.orderBy, collectionFormat: "multi" },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
