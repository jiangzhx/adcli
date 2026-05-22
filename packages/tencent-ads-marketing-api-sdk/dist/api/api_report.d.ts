import { ApiClient, type ApiResponse } from "./client";
import type { ReportAdUnionRequest, ReportAdUnionResponseData, ReportConversionsPredictRequest, ReportConversionsPredictResponseData, ReportLandingPageRequest, ReportLandingPageResponseData, ReportVideoFrameRequest, ReportVideoFrameResponseData } from "../model/index";
export interface ReportApiAdUnionRequest {
    data: ReportAdUnionRequest;
}
export interface ReportApiConversionsPredictRequest {
    data: ReportConversionsPredictRequest;
}
export interface ReportApiLandingPageRequest {
    data: ReportLandingPageRequest;
}
export interface ReportApiVideoFrameRequest {
    data: ReportVideoFrameRequest;
}
export declare class ReportApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    adUnion(request: ReportApiAdUnionRequest): Promise<ReportAdUnionResponseData>;
    adUnionWithHttpInfo(request: ReportApiAdUnionRequest): Promise<ApiResponse<ReportAdUnionResponseData>>;
    conversionsPredict(request: ReportApiConversionsPredictRequest): Promise<ReportConversionsPredictResponseData>;
    conversionsPredictWithHttpInfo(request: ReportApiConversionsPredictRequest): Promise<ApiResponse<ReportConversionsPredictResponseData>>;
    landingPage(request: ReportApiLandingPageRequest): Promise<ReportLandingPageResponseData>;
    landingPageWithHttpInfo(request: ReportApiLandingPageRequest): Promise<ApiResponse<ReportLandingPageResponseData>>;
    videoFrame(request: ReportApiVideoFrameRequest): Promise<ReportVideoFrameResponseData>;
    videoFrameWithHttpInfo(request: ReportApiVideoFrameRequest): Promise<ApiResponse<ReportVideoFrameResponseData>>;
}
