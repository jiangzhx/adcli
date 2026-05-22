// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_images.go
// Do not edit manually.
import { ApiClient, ApiException } from "./client.js";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration.js";
export class ImagesApi {
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
        if (request.uploadType == null) {
            throw new ApiException("Missing the required parameter 'uploadType' when calling add");
        }
        if (request.signature == null) {
            throw new ApiException("Missing the required parameter 'signature' when calling add");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "POST",
            basePath: TencentAdsV30Configuration.basePath,
            path: "/images/add",
            queryParams: [],
            contentType: "multipart/form-data",
            formParams: {
                account_id: request.accountId,
                organization_id: request.organizationId,
                upload_type: request.uploadType,
                signature: request.signature,
                bytes: request.bytes,
                image_usage: request.imageUsage,
                description: request.description,
                resize_width: request.resizeWidth,
                resize_height: request.resizeHeight,
                resize_file_size: request.resizeFileSize
            },
            files: {
                file: request.file
            }
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
            path: "/images/delete",
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
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            basePath: TencentAdsV30Configuration.basePath,
            path: "/images/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "organization_id", value: request.organizationId },
                { name: "filtering", value: request.filtering, collectionFormat: "multi" },
                { name: "page", value: request.page },
                { name: "page_size", value: request.pageSize },
                { name: "label_id", value: request.labelId },
                { name: "business_scenario", value: request.businessScenario },
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
            path: "/images/update",
            queryParams: [],
            contentType: "application/json",
            body: request.data
        });
    }
}
