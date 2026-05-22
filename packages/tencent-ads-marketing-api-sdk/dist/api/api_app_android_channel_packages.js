// Generated from tencentad/marketing-api-go-sdk pkg/api/api_app_android_channel_packages.go
// Do not edit manually.
import { ApiClient, ApiException } from "./client.js";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration.js";
export class AppAndroidChannelPackagesApi {
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
        if (request.promotedObjectId == null) {
            throw new ApiException("Missing the required parameter 'promotedObjectId' when calling get");
        }
        if (request.promotedObjectType == null) {
            throw new ApiException("Missing the required parameter 'promotedObjectType' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            basePath: TencentAdsV13Configuration.basePath,
            path: "/app_android_channel_packages/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "promoted_object_id", value: request.promotedObjectId },
                { name: "promoted_object_type", value: request.promotedObjectType },
                { name: "filtering", value: request.filtering, collectionFormat: "multi" },
                { name: "page", value: request.page },
                { name: "page_size", value: request.pageSize },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
