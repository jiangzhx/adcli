// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AssetPrePermissionsGetResponseData, AssetPrePermissionsUpdateRequest } from "../models";

export interface AssetPrePermissionsApiGetRequest {
  accountId: number | string;
  assetType: string;
  assetId?: number | string;
  assetName?: string;
  pathType?: string;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}

export interface AssetPrePermissionsApiUpdateRequest {
  data: AssetPrePermissionsUpdateRequest;
}


export class AssetPrePermissionsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: AssetPrePermissionsApiGetRequest): Promise<AssetPrePermissionsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: AssetPrePermissionsApiGetRequest): Promise<ApiResponse<AssetPrePermissionsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.assetType == null) {
      throw new ApiException("Missing the required parameter 'assetType' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AssetPrePermissionsGetResponseData>({
      method: "GET",
      path: "/asset_pre_permissions/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "asset_type", value: request.assetType },
        { name: "asset_id", value: request.assetId },
        { name: "asset_name", value: request.assetName },
        { name: "path_type", value: request.pathType },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

  async update(request: AssetPrePermissionsApiUpdateRequest): Promise<unknown> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: AssetPrePermissionsApiUpdateRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      path: "/asset_pre_permissions/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


