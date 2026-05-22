// Generated from tencentad/marketing-api-go-sdk pkg/api/api_data_set.go
// Do not edit manually.
import { ApiClient, ApiException } from "./client.js";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration.js";
export class DataSetApi {
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
            basePath: TencentAdsV13Configuration.basePath,
            path: "/data_set/add",
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
            basePath: TencentAdsV13Configuration.basePath,
            path: "/data_set/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "user_action_set_id", value: request.userActionSetId },
                { name: "data_set_id", value: request.dataSetId },
                { name: "env_type", value: request.envType },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
