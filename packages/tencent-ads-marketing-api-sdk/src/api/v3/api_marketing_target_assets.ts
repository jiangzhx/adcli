// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_marketing_target_assets.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { MarketingTargetAssetsAddRequest, MarketingTargetAssetsAddResponseData, MarketingTargetAssetsDeleteRequest, MarketingTargetAssetsGetResponseData, MarketingTargetAssetsUpdateRequest } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface MarketingTargetAssetsApiAddRequest {
  data: MarketingTargetAssetsAddRequest;
}

export interface MarketingTargetAssetsApiDeleteRequest {
  data: MarketingTargetAssetsDeleteRequest;
}

export interface MarketingTargetAssetsApiGetRequest {
  marketingTargetType: string;
  accountId?: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  organizationId?: number | string;
  fields?: unknown;
}

export interface MarketingTargetAssetsApiUpdateRequest {
  data: MarketingTargetAssetsUpdateRequest;
}


export class MarketingTargetAssetsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: MarketingTargetAssetsApiAddRequest): Promise<MarketingTargetAssetsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: MarketingTargetAssetsApiAddRequest): Promise<ApiResponse<MarketingTargetAssetsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<MarketingTargetAssetsAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/marketing_target_assets/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: MarketingTargetAssetsApiDeleteRequest): Promise<unknown> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: MarketingTargetAssetsApiDeleteRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/marketing_target_assets/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: MarketingTargetAssetsApiGetRequest): Promise<MarketingTargetAssetsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: MarketingTargetAssetsApiGetRequest): Promise<ApiResponse<MarketingTargetAssetsGetResponseData>> {
    if (request.marketingTargetType == null) {
      throw new ApiException("Missing the required parameter 'marketingTargetType' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<MarketingTargetAssetsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/marketing_target_assets/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "marketing_target_type", value: request.marketingTargetType },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "organization_id", value: request.organizationId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

  async update(request: MarketingTargetAssetsApiUpdateRequest): Promise<unknown> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: MarketingTargetAssetsApiUpdateRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/marketing_target_assets/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


