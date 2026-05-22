// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_bidword.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BidwordAddRequest, BidwordAddResponseData, BidwordDeleteRequest, BidwordDeleteResponseData, BidwordGetResponseData, BidwordUpdateRequest, BidwordUpdateResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface BidwordApiAddRequest {
  data: BidwordAddRequest;
}

export interface BidwordApiDeleteRequest {
  data: BidwordDeleteRequest;
}

export interface BidwordApiGetRequest {
  accountId: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  isDeleted?: boolean;
  fields?: unknown;
}

export interface BidwordApiUpdateRequest {
  data: BidwordUpdateRequest;
}


export class BidwordApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: BidwordApiAddRequest): Promise<BidwordAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: BidwordApiAddRequest): Promise<ApiResponse<BidwordAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<BidwordAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/bidword/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: BidwordApiDeleteRequest): Promise<BidwordDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: BidwordApiDeleteRequest): Promise<ApiResponse<BidwordDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<BidwordDeleteResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/bidword/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: BidwordApiGetRequest): Promise<BidwordGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: BidwordApiGetRequest): Promise<ApiResponse<BidwordGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<BidwordGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/bidword/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "is_deleted", value: request.isDeleted },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

  async update(request: BidwordApiUpdateRequest): Promise<BidwordUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: BidwordApiUpdateRequest): Promise<ApiResponse<BidwordUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<BidwordUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/bidword/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


