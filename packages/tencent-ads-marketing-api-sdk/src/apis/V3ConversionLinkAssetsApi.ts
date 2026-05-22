// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ConversionLinkAssetsAddRequest, ConversionLinkAssetsAddResponseData, ConversionLinkAssetsGetResponseData, ConversionLinkAssetsUpdateRequest, ConversionLinkAssetsUpdateResponseData, FilteringStruct } from "../models";

export interface V3ConversionLinkAssetsApiAddRequest {
  data: ConversionLinkAssetsAddRequest;
}

export interface V3ConversionLinkAssetsApiGetRequest {
  accountId: number | string;
  filtering: FilteringStruct[];
  page?: number;
  pageSize?: number;
  key?: string;
  fields?: unknown;
}

export interface V3ConversionLinkAssetsApiUpdateRequest {
  data: ConversionLinkAssetsUpdateRequest;
}


export class V3ConversionLinkAssetsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3ConversionLinkAssetsApiAddRequest): Promise<ConversionLinkAssetsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3ConversionLinkAssetsApiAddRequest): Promise<ApiResponse<ConversionLinkAssetsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<ConversionLinkAssetsAddResponseData>({
      method: "POST",
      path: "/conversion_link_assets/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: V3ConversionLinkAssetsApiGetRequest): Promise<ConversionLinkAssetsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3ConversionLinkAssetsApiGetRequest): Promise<ApiResponse<ConversionLinkAssetsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ConversionLinkAssetsGetResponseData>({
      method: "GET",
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

  async update(request: V3ConversionLinkAssetsApiUpdateRequest): Promise<ConversionLinkAssetsUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: V3ConversionLinkAssetsApiUpdateRequest): Promise<ApiResponse<ConversionLinkAssetsUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<ConversionLinkAssetsUpdateResponseData>({
      method: "POST",
      path: "/conversion_link_assets/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


