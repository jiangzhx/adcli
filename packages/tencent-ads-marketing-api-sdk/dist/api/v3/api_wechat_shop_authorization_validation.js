// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_wechat_shop_authorization_validation.go
// Do not edit manually.
import { ApiClient, ApiException } from "./client.js";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration.js";
export class WechatShopAuthorizationValidationApi {
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
            path: "/wechat_shop_authorization_validation/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "wechat_channels_shop_id", value: request.wechatChannelsShopId },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
