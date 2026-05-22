// Generated from tencentad/marketing-api-go-sdk pkg/api/api_adcreative_template_list.go
// Do not edit manually.
import { ApiClient, ApiException } from "./client.js";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration.js";
export class AdcreativeTemplateListApi {
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
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            basePath: TencentAdsV13Configuration.basePath,
            path: "/adcreative_template_list/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "site_set", value: request.siteSet },
                { name: "campaign_type", value: request.campaignType },
                { name: "promoted_object_type", value: request.promotedObjectType },
                { name: "dynamic_ability_type", value: request.dynamicAbilityType, collectionFormat: "multi" },
                { name: "is_dynamic_creative", value: request.isDynamicCreative },
                { name: "wechat_scene_spec_position", value: request.wechatSceneSpecPosition, collectionFormat: "multi" },
                { name: "adcreative_template_id", value: request.adcreativeTemplateId },
                { name: "page", value: request.page },
                { name: "page_size", value: request.pageSize },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
