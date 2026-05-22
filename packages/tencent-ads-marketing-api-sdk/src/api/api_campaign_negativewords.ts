// Generated from tencentad/marketing-api-go-sdk pkg/api/api_campaign_negativewords.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CampaignNegativewordsAddRequest, CampaignNegativewordsAddResponseData, CampaignNegativewordsGetRequest, CampaignNegativewordsGetResponseData, CampaignNegativewordsUpdateRequest, CampaignNegativewordsUpdateResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface CampaignNegativewordsApiAddRequest {
  data: CampaignNegativewordsAddRequest;
}

export interface CampaignNegativewordsApiGetRequest {
  data: CampaignNegativewordsGetRequest;
}

export interface CampaignNegativewordsApiUpdateRequest {
  data: CampaignNegativewordsUpdateRequest;
}


export class CampaignNegativewordsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: CampaignNegativewordsApiAddRequest): Promise<CampaignNegativewordsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: CampaignNegativewordsApiAddRequest): Promise<ApiResponse<CampaignNegativewordsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<CampaignNegativewordsAddResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/campaign_negativewords/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: CampaignNegativewordsApiGetRequest): Promise<CampaignNegativewordsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: CampaignNegativewordsApiGetRequest): Promise<ApiResponse<CampaignNegativewordsGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<CampaignNegativewordsGetResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/campaign_negativewords/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async update(request: CampaignNegativewordsApiUpdateRequest): Promise<CampaignNegativewordsUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: CampaignNegativewordsApiUpdateRequest): Promise<ApiResponse<CampaignNegativewordsUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<CampaignNegativewordsUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/campaign_negativewords/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


