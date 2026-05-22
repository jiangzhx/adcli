// Generated from tencentad/marketing-api-go-sdk pkg/api/api_authorization.go
// Do not edit manually.
import { ApiClient, ApiException } from "./client.js";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration.js";
export class AuthorizationApi {
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
    async wechatBind(request) {
        const response = await this.wechatBindWithHttpInfo(request);
        return response.data;
    }
    async wechatBindWithHttpInfo(request) {
        if (request.accessToken == null) {
            throw new ApiException("Missing the required parameter 'accessToken' when calling wechatBind");
        }
        if (request.redirectUri == null) {
            throw new ApiException("Missing the required parameter 'redirectUri' when calling wechatBind");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            basePath: TencentAdsV13Configuration.basePath,
            path: "/authorization/wechat_bind",
            queryParams: [
                { name: "access_token", value: request.accessToken },
                { name: "redirect_uri", value: request.redirectUri },
                { name: "account_id", value: request.accountId },
                { name: "wechat_account_id", value: request.wechatAccountId },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
