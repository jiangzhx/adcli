// Generated from tencentad/marketing-api-go-sdk pkg/api/api_brand.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandAddResponseData, BrandGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface BrandApiAddRequest {
  accountId: number | string;
  name: string;
  brandImageFile: Blob;
}

export interface BrandApiGetRequest {
  accountId: number | string;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class BrandApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: BrandApiAddRequest): Promise<BrandAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: BrandApiAddRequest): Promise<ApiResponse<BrandAddResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling add");
    }

    if (request.name == null) {
      throw new ApiException("Missing the required parameter 'name' when calling add");
    }

    if (request.brandImageFile == null) {
      throw new ApiException("Missing the required parameter 'brandImageFile' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<BrandAddResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/brand/add",
      queryParams: [

      ],
      contentType: "multipart/form-data",
      formParams: {
        account_id: request.accountId,
        name: request.name
      },
      files: {
        brand_image_file: request.brandImageFile
      }
    });
  }

  async get(request: BrandApiGetRequest): Promise<BrandGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: BrandApiGetRequest): Promise<ApiResponse<BrandGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<BrandGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/brand/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


