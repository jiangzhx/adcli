// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_conversion_link_assets.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ConversionLinkAssetsAddRequest, ConversionLinkAssetsAddResponseData, ConversionLinkAssetsGetResponseData, ConversionLinkAssetsUpdateRequest, ConversionLinkAssetsUpdateResponseData, FilteringStruct } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface ConversionLinkAssetsApiAddRequest {
  data: ConversionLinkAssetsAddRequest;
}

export interface ConversionLinkAssetsApiGetRequest {
  accountId: number | string;
  filtering: FilteringStruct[];
  page?: number;
  pageSize?: number;
  key?: string;
  fields?: unknown;
}

export interface ConversionLinkAssetsApiUpdateRequest {
  data: ConversionLinkAssetsUpdateRequest;
}


export class ConversionLinkAssetsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: ConversionLinkAssetsApiAddRequest): Promise<ConversionLinkAssetsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: ConversionLinkAssetsApiAddRequest): Promise<ApiResponse<ConversionLinkAssetsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<ConversionLinkAssetsAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/conversion_link_assets/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: ConversionLinkAssetsApiGetRequest): Promise<ConversionLinkAssetsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: ConversionLinkAssetsApiGetRequest): Promise<ApiResponse<ConversionLinkAssetsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ConversionLinkAssetsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/conversion_link_assets/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "key", value: request.key },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

  async update(request: ConversionLinkAssetsApiUpdateRequest): Promise<ConversionLinkAssetsUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: ConversionLinkAssetsApiUpdateRequest): Promise<ApiResponse<ConversionLinkAssetsUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<ConversionLinkAssetsUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/conversion_link_assets/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


