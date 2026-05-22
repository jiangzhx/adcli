// Generated from tencentad/marketing-api-go-sdk pkg/api/api_videomaker_autoadjustments.go
// Do not edit manually.
import { ApiClient, ApiException } from "./client.js";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration.js";
export class VideomakerAutoadjustmentsApi {
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
        if (request.adjustmentType == null) {
            throw new ApiException("Missing the required parameter 'adjustmentType' when calling add");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "POST",
            basePath: TencentAdsV13Configuration.basePath,
            path: "/videomaker_autoadjustments/add",
            queryParams: [],
            contentType: "multipart/form-data",
            formParams: {
                account_id: request.accountId,
                video_id: request.videoId,
                signature: request.signature,
                adjustment_type: request.adjustmentType,
                smart_adjustment: request.smartAdjustment,
                manual_adjustment: request.manualAdjustment
            },
            files: {
                video_file: request.videoFile
            }
        });
    }
}
