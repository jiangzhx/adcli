// Generated from tencentad/marketing-api-go-sdk pkg/api/api_review_ad_appeal.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ReviewAdAppealAddRequest, ReviewAdAppealGetRequest, ReviewAdAppealGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface ReviewAdAppealApiAddRequest {
  data: ReviewAdAppealAddRequest;
}

export interface ReviewAdAppealApiGetRequest {
  data: ReviewAdAppealGetRequest;
}


export class ReviewAdAppealApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: ReviewAdAppealApiAddRequest): Promise<unknown> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: ReviewAdAppealApiAddRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/review_ad_appeal/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: ReviewAdAppealApiGetRequest): Promise<ReviewAdAppealGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: ReviewAdAppealApiGetRequest): Promise<ApiResponse<ReviewAdAppealGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ReviewAdAppealGetResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/review_ad_appeal/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


