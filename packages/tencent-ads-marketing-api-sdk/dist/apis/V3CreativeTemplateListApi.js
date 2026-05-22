// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.
import { ApiClient } from "../runtime/ApiClient.js";
import { ApiException } from "../runtime/ApiException.js";
export class V3CreativeTemplateListApi {
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
            path: "/creative_template_list/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "marketing_goal", value: request.marketingGoal },
                { name: "marketing_sub_goal", value: request.marketingSubGoal },
                { name: "marketing_target_type", value: request.marketingTargetType },
                { name: "marketing_carrier_type", value: request.marketingCarrierType },
                { name: "site_set", value: request.siteSet },
                { name: "dynamic_ability_type", value: request.dynamicAbilityType },
                { name: "wechat_scene_spec_position", value: request.wechatSceneSpecPosition, collectionFormat: "multi" },
                { name: "creative_template_id", value: request.creativeTemplateId },
                { name: "page", value: request.page },
                { name: "page_size", value: request.pageSize },
                { name: "dynamic_ad_type", value: request.dynamicAdType },
                { name: "dynamic_creative_type", value: request.dynamicCreativeType },
                { name: "support_site_set", value: request.supportSiteSet, collectionFormat: "multi" },
                { name: "bid_mode", value: request.bidMode },
                { name: "wechat_channels_scene", value: request.wechatChannelsScene, collectionFormat: "multi" },
                { name: "display_scene", value: request.displayScene, collectionFormat: "multi" },
                { name: "pc_scene", value: request.pcScene, collectionFormat: "multi" },
                { name: "adgroup_id", value: request.adgroupId },
                { name: "adgroup_type", value: request.adgroupType },
                { name: "mpa_spec", value: request.mpaSpec },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
