// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.
import { ApiClient } from "../runtime/ApiClient.js";
import { ApiException } from "../runtime/ApiException.js";
export class V3ChannelsUserpageobjectsApi {
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
            path: "/channels_userpageobjects/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "finder_username", value: request.finderUsername },
                { name: "nickname", value: request.nickname },
                { name: "last_buffer", value: request.lastBuffer },
                { name: "count", value: request.count },
                { name: "wechat_channels_account_id", value: request.wechatChannelsAccountId },
                { name: "ad_context", value: request.adContext },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
