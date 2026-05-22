// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_wechat_channels_ad_account_validation.go
// Do not edit manually.
import { ApiClient, ApiException } from "./client.js";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration.js";
export class WechatChannelsAdAccountValidationApi {
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
            basePath: TencentAdsV30Configuration.basePath,
            path: "/wechat_channels_ad_account_validation/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "nickname", value: request.nickname },
                { name: "head_image_id", value: request.headImageId },
                { name: "wechat_channels_account_id", value: request.wechatChannelsAccountId },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
