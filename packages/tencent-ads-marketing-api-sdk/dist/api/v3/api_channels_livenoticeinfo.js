// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_channels_livenoticeinfo.go
// Do not edit manually.
import { ApiClient, ApiException } from "./client.js";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration.js";
export class ChannelsLivenoticeinfoApi {
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
            path: "/channels_livenoticeinfo/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "finder_username", value: request.finderUsername },
                { name: "nickname", value: request.nickname },
                { name: "wechat_channels_account_id", value: request.wechatChannelsAccountId },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
