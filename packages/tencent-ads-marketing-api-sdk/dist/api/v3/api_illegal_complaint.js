// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_illegal_complaint.go
// Do not edit manually.
import { ApiClient, ApiException } from "./client.js";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration.js";
export class IllegalComplaintApi {
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
        if (request.accountId == null) {
            throw new ApiException("Missing the required parameter 'accountId' when calling add");
        }
        if (request.illegalOrderId == null) {
            throw new ApiException("Missing the required parameter 'illegalOrderId' when calling add");
        }
        if (request.complaintReason == null) {
            throw new ApiException("Missing the required parameter 'complaintReason' when calling add");
        }
        if (request.file == null) {
            throw new ApiException("Missing the required parameter 'file' when calling add");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "POST",
            basePath: TencentAdsV30Configuration.basePath,
            path: "/illegal_complaint/add",
            queryParams: [],
            contentType: "multipart/form-data",
            formParams: {
                account_id: request.accountId,
                illegal_order_id: request.illegalOrderId,
                complaint_reason: request.complaintReason
            },
            files: {
                file: request.file
            }
        });
    }
    async get(request) {
        const response = await this.getWithHttpInfo(request);
        return response.data;
    }
    async getWithHttpInfo(request) {
        if (request.data == null) {
            throw new ApiException("Missing the required parameter 'data' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "POST",
            basePath: TencentAdsV30Configuration.basePath,
            path: "/illegal_complaint/get",
            queryParams: [],
            contentType: "application/json",
            body: request.data
        });
    }
}
