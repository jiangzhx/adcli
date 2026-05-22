// Generated from tencentad/marketing-api-go-sdk pkg/api/api_asset_permissions.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AssetPermissionsAddRequest, AssetPermissionsAddResponseData, AssetPermissionsDeleteRequest } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface AssetPermissionsApiAddRequest {
  data: AssetPermissionsAddRequest;
}

export interface AssetPermissionsApiDeleteRequest {
  data: AssetPermissionsDeleteRequest;
}


export class AssetPermissionsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: AssetPermissionsApiAddRequest): Promise<AssetPermissionsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: AssetPermissionsApiAddRequest): Promise<ApiResponse<AssetPermissionsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<AssetPermissionsAddResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/asset_permissions/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: AssetPermissionsApiDeleteRequest): Promise<unknown> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: AssetPermissionsApiDeleteRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/asset_permissions/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


