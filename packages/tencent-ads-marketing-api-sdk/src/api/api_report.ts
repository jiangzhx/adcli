// Generated from tencentad/marketing-api-go-sdk pkg/api/api_report.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ReportAdUnionRequest, ReportAdUnionResponseData, ReportConversionsPredictRequest, ReportConversionsPredictResponseData, ReportLandingPageRequest, ReportLandingPageResponseData, ReportVideoFrameRequest, ReportVideoFrameResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

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


export class ReportApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async adUnion(request: ReportApiAdUnionRequest): Promise<ReportAdUnionResponseData> {
    const response = await this.adUnionWithHttpInfo(request);
    return response.data;
  }

  async adUnionWithHttpInfo(request: ReportApiAdUnionRequest): Promise<ApiResponse<ReportAdUnionResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling adUnion");
    }
    return this.apiClient.requestWithHttpInfo<ReportAdUnionResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/report/ad_union",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async conversionsPredict(request: ReportApiConversionsPredictRequest): Promise<ReportConversionsPredictResponseData> {
    const response = await this.conversionsPredictWithHttpInfo(request);
    return response.data;
  }

  async conversionsPredictWithHttpInfo(request: ReportApiConversionsPredictRequest): Promise<ApiResponse<ReportConversionsPredictResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling conversionsPredict");
    }
    return this.apiClient.requestWithHttpInfo<ReportConversionsPredictResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/report/conversions_predict",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async landingPage(request: ReportApiLandingPageRequest): Promise<ReportLandingPageResponseData> {
    const response = await this.landingPageWithHttpInfo(request);
    return response.data;
  }

  async landingPageWithHttpInfo(request: ReportApiLandingPageRequest): Promise<ApiResponse<ReportLandingPageResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling landingPage");
    }
    return this.apiClient.requestWithHttpInfo<ReportLandingPageResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/report/landing_page",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async videoFrame(request: ReportApiVideoFrameRequest): Promise<ReportVideoFrameResponseData> {
    const response = await this.videoFrameWithHttpInfo(request);
    return response.data;
  }

  async videoFrameWithHttpInfo(request: ReportApiVideoFrameRequest): Promise<ApiResponse<ReportVideoFrameResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling videoFrame");
    }
    return this.apiClient.requestWithHttpInfo<ReportVideoFrameResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/report/video_frame",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


