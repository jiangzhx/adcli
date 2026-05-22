// Generated from tencentad/marketing-api-go-sdk pkg/api/api_adcreatives.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdcreativesAddRequest, AdcreativesAddResponseData, AdcreativesDeleteRequest, AdcreativesDeleteResponseData, AdcreativesGetResponseData, AdcreativesUpdateRequest, AdcreativesUpdateResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface AdcreativesApiAddRequest {
  data: AdcreativesAddRequest;
}

export interface AdcreativesApiDeleteRequest {
  data: AdcreativesDeleteRequest;
}

export interface AdcreativesApiGetRequest {
  accountId: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  isDeleted?: boolean;
  linkPageTypeCompatible?: boolean;
  weixinOfficialAccountsUpgradeEnabled?: boolean;
  fields?: unknown;
}

export interface AdcreativesApiUpdateRequest {
  data: AdcreativesUpdateRequest;
}


export class AdcreativesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: AdcreativesApiAddRequest): Promise<AdcreativesAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: AdcreativesApiAddRequest): Promise<ApiResponse<AdcreativesAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<AdcreativesAddResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/adcreatives/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: AdcreativesApiDeleteRequest): Promise<AdcreativesDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: AdcreativesApiDeleteRequest): Promise<ApiResponse<AdcreativesDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<AdcreativesDeleteResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/adcreatives/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: AdcreativesApiGetRequest): Promise<AdcreativesGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: AdcreativesApiGetRequest): Promise<ApiResponse<AdcreativesGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AdcreativesGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/adcreatives/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "is_deleted", value: request.isDeleted },
        { name: "link_page_type_compatible", value: request.linkPageTypeCompatible },
        { name: "weixin_official_accounts_upgrade_enabled", value: request.weixinOfficialAccountsUpgradeEnabled },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

  async update(request: AdcreativesApiUpdateRequest): Promise<AdcreativesUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: AdcreativesApiUpdateRequest): Promise<ApiResponse<AdcreativesUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<AdcreativesUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/adcreatives/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


