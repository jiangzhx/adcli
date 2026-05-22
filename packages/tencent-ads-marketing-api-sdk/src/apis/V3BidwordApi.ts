// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BidwordAddRequest, BidwordAddResponseData, BidwordDeleteRequest, BidwordDeleteResponseData, BidwordGetResponseData, BidwordUpdateRequest, BidwordUpdateResponseData } from "../models";

export interface V3BidwordApiAddRequest {
  data: BidwordAddRequest;
}

export interface V3BidwordApiDeleteRequest {
  data: BidwordDeleteRequest;
}

export interface V3BidwordApiGetRequest {
  accountId: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  isDeleted?: boolean;
  fields?: unknown;
}

export interface V3BidwordApiUpdateRequest {
  data: BidwordUpdateRequest;
}


export class V3BidwordApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3BidwordApiAddRequest): Promise<BidwordAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3BidwordApiAddRequest): Promise<ApiResponse<BidwordAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<BidwordAddResponseData>({
      method: "POST",
      path: "/bidword/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: V3BidwordApiDeleteRequest): Promise<BidwordDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: V3BidwordApiDeleteRequest): Promise<ApiResponse<BidwordDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<BidwordDeleteResponseData>({
      method: "POST",
      path: "/bidword/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: V3BidwordApiGetRequest): Promise<BidwordGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3BidwordApiGetRequest): Promise<ApiResponse<BidwordGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<BidwordGetResponseData>({
      method: "GET",
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

  async update(request: V3BidwordApiUpdateRequest): Promise<BidwordUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: V3BidwordApiUpdateRequest): Promise<ApiResponse<BidwordUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<BidwordUpdateResponseData>({
      method: "POST",
      path: "/bidword/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


