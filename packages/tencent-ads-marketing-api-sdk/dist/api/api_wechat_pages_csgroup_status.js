// Generated from tencentad/marketing-api-go-sdk pkg/api/api_wechat_pages_csgroup_status.go
// Do not edit manually.
import { ApiClient, ApiException } from "./client.js";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration.js";
export class WechatPagesCsgroupStatusApi {
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
            basePath: TencentAdsV13Configuration.basePath,
            path: "/wechat_pages_csgroup_status/update",
            queryParams: [],
            contentType: "application/json",
            body: request.data
        });
    }
}
