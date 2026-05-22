// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.
import { ApiClient } from "../runtime/ApiClient.js";
import { ApiException } from "../runtime/ApiException.js";
export class V3WechatChannelsAdAccountWechatBindingApi {
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
    async add(request) {
        const response = await this.addWithHttpInfo(request);
        return response.data;
    }
    async addWithHttpInfo(request) {
        if (request.data == null) {
            throw new ApiException("Missing the required parameter 'data' when calling add");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "POST",
            path: "/wechat_channels_ad_account_wechat_binding/add",
            queryParams: [],
            contentType: "application/json",
            body: request.data
        });
    }
    async get(request) {
        const response = await this.getWithHttpInfo(request);
        return response.data;
    }
    async getWithHttpInfo(request) {
        if (request.accountId == null) {
            throw new ApiException("Missing the required parameter 'accountId' when calling get");
        }
        if (request.wechatBindAuthToken == null) {
            throw new ApiException("Missing the required parameter 'wechatBindAuthToken' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            path: "/wechat_channels_ad_account_wechat_binding/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "wechat_bind_auth_token", value: request.wechatBindAuthToken },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
