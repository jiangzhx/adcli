// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ExtendPackageAddRequest, ExtendPackageAddResponseData, ExtendPackageGetResponseData, ExtendPackageUpdateRequest, ExtendPackageUpdateResponseData } from "../models";

export interface ExtendPackageApiAddRequest {
  data: ExtendPackageAddRequest;
}

export interface ExtendPackageApiGetRequest {
  accountId: number | string;
  packageId: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}

export interface ExtendPackageApiUpdateRequest {
  data: ExtendPackageUpdateRequest;
}


export class ExtendPackageApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: ExtendPackageApiAddRequest): Promise<ExtendPackageAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: ExtendPackageApiAddRequest): Promise<ApiResponse<ExtendPackageAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<ExtendPackageAddResponseData>({
      method: "POST",
      path: "/extend_package/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: ExtendPackageApiGetRequest): Promise<ExtendPackageGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: ExtendPackageApiGetRequest): Promise<ApiResponse<ExtendPackageGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.packageId == null) {
      throw new ApiException("Missing the required parameter 'packageId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ExtendPackageGetResponseData>({
      method: "GET",
      path: "/extend_package/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "package_id", value: request.packageId },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

  async update(request: ExtendPackageApiUpdateRequest): Promise<ExtendPackageUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: ExtendPackageApiUpdateRequest): Promise<ApiResponse<ExtendPackageUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<ExtendPackageUpdateResponseData>({
      method: "POST",
      path: "/extend_package/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


