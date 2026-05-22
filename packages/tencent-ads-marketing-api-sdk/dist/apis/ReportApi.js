// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.
import { ApiClient } from "../runtime/ApiClient.js";
import { ApiException } from "../runtime/ApiException.js";
export class ReportApi {
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
    async adUnion(request) {
        const response = await this.adUnionWithHttpInfo(request);
        return response.data;
    }
    async adUnionWithHttpInfo(request) {
        if (request.data == null) {
            throw new ApiException("Missing the required parameter 'data' when calling adUnion");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "POST",
            path: "/report/ad_union",
            queryParams: [],
            contentType: "application/json",
            body: request.data
        });
    }
    async conversionsPredict(request) {
        const response = await this.conversionsPredictWithHttpInfo(request);
        return response.data;
    }
    async conversionsPredictWithHttpInfo(request) {
        if (request.data == null) {
            throw new ApiException("Missing the required parameter 'data' when calling conversionsPredict");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "POST",
            path: "/report/conversions_predict",
            queryParams: [],
            contentType: "application/json",
            body: request.data
        });
    }
    async landingPage(request) {
        const response = await this.landingPageWithHttpInfo(request);
        return response.data;
    }
    async landingPageWithHttpInfo(request) {
        if (request.data == null) {
            throw new ApiException("Missing the required parameter 'data' when calling landingPage");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "POST",
            path: "/report/landing_page",
            queryParams: [],
            contentType: "application/json",
            body: request.data
        });
    }
    async videoFrame(request) {
        const response = await this.videoFrameWithHttpInfo(request);
        return response.data;
    }
    async videoFrameWithHttpInfo(request) {
        if (request.data == null) {
            throw new ApiException("Missing the required parameter 'data' when calling videoFrame");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "POST",
            path: "/report/video_frame",
            queryParams: [],
            contentType: "application/json",
            body: request.data
        });
    }
}
