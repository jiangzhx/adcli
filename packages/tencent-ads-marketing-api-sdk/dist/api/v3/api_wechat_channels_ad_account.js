// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_wechat_channels_ad_account.go
// Do not edit manually.
import { ApiClient, ApiException } from "./client.js";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration.js";
export class WechatChannelsAdAccountApi {
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
            basePath: TencentAdsV30Configuration.basePath,
            path: "/wechat_channels_ad_account/add",
            queryParams: [],
            contentType: "application/json",
            body: request.data
        });
    }
    async delete(request) {
        const response = await this.deleteWithHttpInfo(request);
        return response.data;
    }
    async deleteWithHttpInfo(request) {
        if (request.data == null) {
            throw new ApiException("Missing the required parameter 'data' when calling delete");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "POST",
            basePath: TencentAdsV30Configuration.basePath,
            path: "/wechat_channels_ad_account/delete",
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
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            basePath: TencentAdsV30Configuration.basePath,
            path: "/wechat_channels_ad_account/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "filtering", value: request.filtering, collectionFormat: "multi" },
                { name: "page", value: request.page },
                { name: "page_size", value: request.pageSize },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
    async update(request) {
        const response = await this.updateWithHttpInfo(request);
        return response.data;
    }
    async updateWithHttpInfo(request) {
        if (request.data == null) {
            throw new ApiException("Missing the required parameter 'data' when calling update");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "POST",
            basePath: TencentAdsV30Configuration.basePath,
            path: "/wechat_channels_ad_account/update",
            queryParams: [],
            contentType: "application/json",
            body: request.data
        });
    }
}
